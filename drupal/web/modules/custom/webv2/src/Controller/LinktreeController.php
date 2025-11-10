<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\webv2\Service\ColorService;
use Symfony\Component\DependencyInjection\ContainerInterface;

class LinktreeController extends ControllerBase
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
    $linktree = $config_pages->load('linktree');

    $title = $linktree->get('field_linktree_title')->value;

    $sections = [];
    if ($linktree->hasField('field_linktree_sections') && !$linktree->get('field_linktree_sections')->isEmpty()) {
      $paragraph_view_builder = $this->entityTypeManager->getViewBuilder('paragraph');

      foreach ($linktree->get('field_linktree_sections')->referencedEntities() as $paragraph) {
        $sections[] = $paragraph_view_builder->view($paragraph, 'full');
      }
    }

    $configPagesTag = $linktree->getCacheTagsToInvalidate()[0];
    $build = [
      '#theme' => 'linktree',
      '#title' => $title,
      '#sections' => $sections,
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
