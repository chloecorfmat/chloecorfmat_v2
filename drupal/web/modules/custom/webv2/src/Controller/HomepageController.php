<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class HomepageController extends ControllerBase
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
   * Constructs a new Homepage.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager service.
   * @param \Drupal\config_pages\ConfigPagesLoaderServiceInterface $configPagesLoader
   *   The config pages loader service.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   The form builder service.
   */
  public function __construct(
    EntityTypeManagerInterface $entityTypeManager,
    ConfigPagesLoaderServiceInterface $configPagesLoader,
    FormBuilderInterface $form_builder) {
    $this->entityTypeManager = $entityTypeManager;
    $this->configPagesLoader = $configPagesLoader;
    $this->formBuilder = $form_builder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('entity_type.manager'),
      $container->get('config_pages.loader'),
      $container->get('form_builder')
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
    $homepage = $config_pages->load('homepage');

    // Bloc "Hero"
    $entity = $homepage->get('field_hp_hero_cta')->referencedEntities()[0];
    $cta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $entity->get('field_pg_background_color')[0]->color,
    ];
    $title = $homepage->get('field_hp_hero_title')->value;
    $description = $homepage->get('field_hp_hero_description')->value;
    $photo = $homepage->get('field_hp_hero_photo')->entity;

    $blockHero = [
      'title' => $title,
      'description' => $description,
      'cta' => $cta,
      'photo' => $photo,
    ];

    // Bloc "Situations"
    $title = $homepage->get('field_hp_situations_title')->value;
    $situations = [];

    foreach ($homepage->get('field_hp_situations_situations')->referencedEntities() as $situation) {
      $situations[] = [
        'title' => $situation->get('field_pg_situation_title')->value,
        'description' => $situation->get('field_pg_situation_description')->value,
      ];
    }

    $blockSituations = [
      'title' => $title,
      'situations' => $situations,
    ];


    // Bloc "Podcast"
    $entity = $homepage->get('field_hp_podcast_transcript_cta')->referencedEntities()[0];
    $transcriptCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $entity->get('field_pg_background_color')[0]->color,
    ];

    $storage = $this->entityTypeManager->getStorage('taxonomy_term');
    $query = $storage->getQuery()
      ->condition('vid', 'social_media')
      ->condition('field_taxo_social_media_type', 'podcast')
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

    $blockPodcast = [
      'title' => $homepage->get('field_hp_podcast_title')->value,
      'description' => $homepage->get('field_hp_podcast_description')->value,
      'mascotte' => $homepage->get('field_hp_podcast_image')
        ->referencedEntities()[0]->get('field_media_image')[0]
        ->entity->uri->value,
      'platforms' => [
        'text' => $homepage->get('field_hp_podcast_platforms_text')->value,
        'platforms' => $platforms,
      ],
      'transcription' => [
        'text' => $homepage->get('field_hp_podcast_transcript_text')->value,
        'cta' => $transcriptCta
      ],
      'banner' => $homepage->get('field_hp_podcast_banner'),
    ];


    // Bloc "À propos"
    $entity = $homepage->get('field_hp_about_cta')->referencedEntities()[0];
    $aboutCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $entity->get('field_pg_background_color')[0]->color,
    ];

    $photo = $homepage->get('field_hp_about_photo')[0]->entity
      ->field_media_image[0]->entity
      ->uri->value;

    $blockAbout = [
      'photo' => $photo,
      'title' => $homepage->get('field_hp_about_title')->value,
      'description' => $homepage->get('field_hp_about_description')->value,
      'cta' => $aboutCta,
    ];

    $entity = $homepage->get('field_hp_newsletter_last_cta')->referencedEntities()[0];
    $newsletterCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $entity->get('field_pg_background_color')[0]->color,
    ];

    $photo = $homepage->get('field_hp_newsletter_photo')[0]->entity
      ->field_media_image[0]->entity
      ->uri->value;

    $form = $this->formBuilder->getForm('Drupal\webv2\Form\NewsletterSubscriptionForm');

    $blockNewsletter = [
      'title' => $homepage->get('field_hp_newsletter_title')->value,
      'text' => $homepage->get('field_hp_newsletter_text')->value,
      'photo' => $photo,
      'last_editions' => [
        'cta' => $newsletterCta,
        'text' => $homepage->get('field_hp_newsletter_last_text')->value
      ],
      'form' => [
        'title' => $homepage->get('field_hp_newsletter_form_title')->value,
        'form' => $form
      ]
    ];

    $services = [];

    $pgServices = $homepage->get('field_hp_services_services')->referencedEntities();

    foreach ($pgServices as $pgService) {;

      $entity = $pgService->get('field_pg_service_cta')->referencedEntities()[0];

      $pgServiceCta = [
        'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
        'text' => $entity->get('field_pg_link')->first()->title,
        'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
        'external' => ($entity->get('field_pg_is_external')->value == TRUE),
        'color' => $this->getLitteralColorFromHexaCode(
          $entity->get('field_pg_background_color')[0]->color
        ),
      ];

      $services[] = [
        'name' => $pgService->get('field_pg_service_name')->value,
        'description' => $pgService->get('field_pg_service_description')->value,
        'image' => $pgService->get('field_pg_service_image')[0]->entity
          ->field_media_image[0]->entity->uri->value,
        'cta' => $pgServiceCta
      ];
    }

    $blockServices = [
      'title' => $homepage->get('field_hp_services_title')->value,
      'description' => $homepage->get('field_hp_services_description')->value,
      'services' => $services,
    ];

    $entity = $homepage->get('field_hp_cta_cta')->referencedEntities()[0];

    $ctaCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $this->getLitteralColorFromHexaCode(
        $entity->get('field_pg_background_color')[0]->color
      ),
    ];

    $photoCta = $homepage->get('field_hp_cta_photo')[0]->entity
      ->field_media_image[0]->entity->uri->value;

    $blockCta = [
      'title' => $homepage->get('field_hp_cta_title')->value,
      'text' => $homepage->get('field_hp_cta_text')->value,
      'photo' => $photoCta,
      'cta' => $ctaCta,
    ];

    $entity = $homepage->get('field_hp_blog_cta')->referencedEntities()[0];

    $blogCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $this->getLitteralColorFromHexaCode(
        $entity->get('field_pg_background_color')[0]->color
      ),
    ];

    $blockBlog = [
      'title' => $homepage->get('field_hp_blog_title')->value,
      'text' => $homepage->get('field_hp_blog_text')->value,
      'cta' => $blogCta,
    ];

    $entity = $homepage->get('field_hp_reviews_cta')->referencedEntities()[0];

    $reviewsCta = [
      'url' => $entity->get('field_pg_link')->first()->getUrl()->toString(),
      'text' => $entity->get('field_pg_link')->first()->title,
      'target' => ($entity->get('field_pg_is_external')->value == TRUE) ? 'blank' : 'self',
      'external' => ($entity->get('field_pg_is_external')->value == TRUE),
      'color' => $this->getLitteralColorFromHexaCode(
        $entity->get('field_pg_background_color')[0]->color
      ),
    ];

    $reviews = [];

    $storage = $this->entityTypeManager->getStorage('taxonomy_term');
    $query = $storage->getQuery()
      ->condition('vid', 'reviews')
      ->condition('field_taxo_display_in_hp', 1)
      ->condition('status', 1)
      ->accessCheck(TRUE);
    $tids = $query->execute();
    $terms = $storage->loadMultiple($tids);

    foreach ($terms as $term) {
      $review = [
        'name' => $term->name->value,
        'company' => $term->field_taxo_company->value,
        'review' => $term->field_taxo_review->value,
        'color' => $this->getLitteralColorFromHexaCode(
          $term->get('field_taxo_bg_color')[0]->color
        ),
      ];

      $reviews[] = $review;
    }

    $blockReviews = [
      'title' => $homepage->get('field_hp_reviews_title')->value,
      'text' => $homepage->get('field_hp_reviews_text')->value,
      'reviews' => $reviews,
      'cta' => $reviewsCta,
    ];


    $photoResource = $homepage->get('field_hp_resource_photo')[0]->entity
      ->field_media_image[0]->entity->uri->value;

    $blockResource = [
      'title' => $homepage->get('field_hp_resource_title')->value,
      'text' => $homepage->get('field_hp_resource_text')->value,
      'photo' => $photoResource
    ];

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

    $contactPage = $config_pages->load('contact');
    $blockContact = [
      'title' => $contactPage->get('field_contact_title')->value,
      'text' => $contactPage->get('field_contact_text')->value,
      'others' => [
        'title' => $contactPage->get('field_contact_others_title')->value,
        'text' => $contactPage->get('field_contact_others_text')->value,
      ],
      'social' => [
        'title' => $contactPage->get('field_contact_social_title')->value,
        'platforms' => $platforms,
      ],
      'form' => [
        'title' => $contactPage->get('field_contact_form_title')->value,
      ],
    ];

    $configPagesTag = $homepage->getCacheTagsToInvalidate()[0];
    $build = [
      '#theme' => 'homepage',
      '#hero' => $blockHero,
      '#situations' => $blockSituations,
      '#podcast' => $blockPodcast,
      '#about' => $blockAbout,
      '#newsletter' => $blockNewsletter,
      '#services' => $blockServices,
      '#cta' => $blockCta,
      '#blog' => $blockBlog,
      '#reviews' => $blockReviews,
      '#resource' => $blockResource,
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

  private function getLitteralColorFromHexaCode(string $code) {
    switch($code) {
      case "#AEE6ED":
        return 'lagoon-blue';
      case "#FA9A64":
        return 'vine-peach';
      case "#C7A9FF":
        return 'lavender-purple-medium';
      case "#121289":
        return 'midnight-blue';
      case "#3028F4":
        return 'electric-blue';
      case '#E4CFFF':
        return 'lavender-purple-light';
      case '#F8DD81':
        return 'honey-yellow-light';
      case '#F2BB04':
      default:
        return 'honey-yellow';
    }
  }

}
