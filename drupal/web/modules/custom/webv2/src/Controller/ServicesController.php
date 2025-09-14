<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\webv2\Service\ColorService;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Controller for building the newsletter pages content.
 */
class ServicesController extends ControllerBase {

  /**
   * The config pages loader service.
   *
   * @var \Drupal\config_pages\ConfigPagesLoaderServiceInterface
   */
  protected $configPagesLoader;

  /**
   * Constructs a new ServicesController.
   *
   * @param \Drupal\config_pages\ConfigPagesLoaderServiceInterface $configPagesLoader
   *   The config pages loader service.
   */
  public function __construct(
    ConfigPagesLoaderServiceInterface $configPagesLoader,
    private readonly ColorService $colorService,
  ) {
    $this->configPagesLoader = $configPagesLoader;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('config_pages.loader'),
      $container->get('webv2.color_service'),
    );
  }

  /**
   * Provides the render array for the services list page.
   *
   * @return array
   *   A render array representing the content of the services list page.
   */
  public function list() {
    $config_pages = $this->configPagesLoader;
    $services = $config_pages->load('services');

    $title = $services->get('field_services_title')->value;
    $text = $services->get('field_services_text')->value;

    $textCta = $services->get('field_services_cta_text')->value;

    $entity = $services->get('field_services_cta_cta')->referencedEntities()[0];
    $cta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $this->colorService
        ->getLitteralColorFromHexaCode(
          $entity->get('field_pg_background_color')[0]->color
        ),
    ];

    $photoCta = $services->get('field_services_cta_photo')->referencedEntities()[0]
      ->field_media_image[0]
      ->entity->uri->value;

    $list = [];
    $entities = $services->get('field_services_services')->referencedEntities();

    foreach($entities as $entity) {
      $image = $entity->get('field_mascot')->referencedEntities()[0]
        ->field_media_image[0]
        ->entity->uri->value;

      $service = [
        'name' => $entity->get('field_list_name')->value,
        'description' => $entity->get('field_list_description')->value,
        'image' => $image,
        'cta' => [
          'text' => $entity->get('field_list_cta_text')->value,
          'url' => $entity->toUrl()->toString(),
          'color' => $this->colorService
            ->getLitteralColorFromHexaCode(
              $entity->get('field_list_cta_color')[0]->color
            ),
        ]
      ];

      $list[] = $service;
    }

    $build = [
      '#theme' => 'services',
      '#title' => $title,
      '#text' => $text,
      '#services' => $list,
      '#cta' => [
        'photo' => $photoCta,
        'text' => $textCta,
        'cta' => $cta,
      ],
    ];

    return $build;
  }
}
