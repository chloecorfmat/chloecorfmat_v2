<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\webv2\Service\ColorService;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ContactController extends ControllerBase
{

  /**
   * The entity type manager service.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The config pages loader service.
   *
   * @var \Drupal\config_pages\ConfigPagesLoaderServiceInterface
   */
  protected $configPagesLoader;

  /**
   * The form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * @var \Drupal\webv2\Service\ColorService
   */
  protected $colorService;

  /**
   * Constructs a new Homepage.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager service.
   * @param \Drupal\config_pages\ConfigPagesLoaderServiceInterface $configPagesLoader
   *   The config pages loader service.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   The form builder service.
   * @param \Drupal\webv2\Service\ColorService $colorService.
   *   The color service.
   */
  public function __construct(
    EntityTypeManagerInterface $entityTypeManager,
    ConfigPagesLoaderServiceInterface $configPagesLoader,
    FormBuilderInterface $form_builder,
    ColorService $colorService) {
    $this->entityTypeManager = $entityTypeManager;
    $this->configPagesLoader = $configPagesLoader;
    $this->formBuilder = $form_builder;
    $this->colorService = $colorService;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('entity_type.manager'),
      $container->get('config_pages.loader'),
      $container->get('form_builder'),
      $container->get('webv2.color_service'),
    );
  }

  /**
   * Provides the render array for the homepage.
   *
   * @return array
   *   A render array representing the content of the homepage.
   */
  public function build()
  {
    $config_pages = $this->configPagesLoader;
    $contact = $config_pages->load('contact');

    // Bloc "Hero".
    $title = $contact->get('field_contact_header_title')->value;
    $text = $contact->get('field_contact_header_text')->value;
    $photo = $contact->get('field_contact_header_photo')->entity;
    $callout = $contact->get('field_contact_header_callout')->value;

    $blockHero = [
      'title' => $title,
      'text' => $text,
      'photo' => $photo,
      'callout' => $callout,
    ];

    // Bloc "Réservez votre appel découverte.
    $title = $contact->get('field_contact_discovery_title')->value;
    $text = $contact->get('field_contact_discovery_text')->value;

    $entity = $contact->get('field_contact_discovery_cta')->referencedEntities()[0];
    $cta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $this->colorService->getLitteralColorFromHexaCode(
        $entity->get('field_pg_background_color')[0]->color
      ),
    ];

    $blockDiscoveryCall = [
      'title' => $title,
      'text' => $text,
      'cta' => $cta,
    ];

    // Bloc "Contact"
    $storage = $this->entityTypeManager->getStorage('taxonomy_term');
    $query = $storage->getQuery()
      ->condition('vid', 'social_media')
      ->condition('field_taxo_social_media_type', 'social_media')
      ->condition('status', 1)
      ->accessCheck(TRUE);
    $tids = $query->execute();
    $terms = $storage->loadMultiple($tids);

    $platforms = [];
    foreach ($terms as $term) {
      $logo = $term->get('field_taxo_logo')->referencedEntities()[0]
        ->field_media_image[0]
        ->entity->uri->value;

      $platforms[] = [
        'name' => $term->get('name')->value,
        'url' => $term->get('field_taxo_url')[0]->uri,
        'logo' => $logo
      ];
    }

    $form = $this->formBuilder->getForm('Drupal\webv2\Form\FormspreeContactForm');

    $blockContact = [
      'others' => [
        'title' => $contact->get('field_c_contact_others_title')->value,
        'text' => $contact->get('field_c_contact_others_text')->value,
      ],
      'social' => [
        'title' => $contact->get('field_c_contact_social_title')->value,
        'platforms' => $platforms,
      ],
      'form' => [
        'title' => $contact->get('field_contact_contact_form_title')->value,
        'form' => $form,
      ],
    ];

    $configPagesTag = $contact->getCacheTagsToInvalidate()[0];
    $build = [
      '#theme' => 'contact',
      '#hero' => $blockHero,
      '#discoveryCall' => $blockDiscoveryCall,
      '#contact' => $blockContact,
      '#cache' => [
        'tags' => [$configPagesTag],
      ],
    ];

    $cache_metadata = new CacheableMetadata();
    $cache_metadata->addCacheTags([$configPagesTag]);
    $cache_metadata->applyTo($build);

    return $build;
  }

}
