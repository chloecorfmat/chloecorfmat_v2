<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Drupal\webv2\Service\ColorService;
use Symfony\Component\DependencyInjection\ContainerInterface;

class BlogController extends ControllerBase
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
    ConfigPagesLoaderServiceInterface $configPagesLoader) {
    $this->entityTypeManager = $entityTypeManager;
    $this->configPagesLoader = $configPagesLoader;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('entity_type.manager'),
      $container->get('config_pages.loader'),
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
    $blog = $config_pages->load('blog');

    // Récupérer tous les articles publiés dans l'ordre de publication
    $node_storage = $this->entityTypeManager->getStorage('node');
    $query = $node_storage->getQuery()
      ->condition('type', 'article')
      ->condition('status', 1)
      ->sort('created', 'DESC')
      ->accessCheck(TRUE);

    $nids = $query->execute();
    $articles = $node_storage->loadMultiple($nids);

    $configPagesTag = $blog->getCacheTagsToInvalidate()[0];
    $build = [
      '#theme' => 'blog',
      '#title' => $blog->field_blog_title->value,
      '#subtitle' => $blog->field_blog_subtitle->value,
      '#description' => $blog->field_blog_description->value,
      '#articles' => $articles,
      '#cache' => [
        'tags' => [$configPagesTag, 'node_list:article'],
      ],
    ];

    $cache_metadata = new CacheableMetadata();
    $cache_metadata->addCacheTags([$configPagesTag, 'node_list:article']);
    $cache_metadata->applyTo($build);

    return $build;
  }

}
