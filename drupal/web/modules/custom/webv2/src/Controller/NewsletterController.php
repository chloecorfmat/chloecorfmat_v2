<?php

namespace Drupal\webv2\Controller;

use Drupal\config_pages\ConfigPagesLoaderServiceInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Form\FormBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Controller for building the newsletter pages content.
 */
class NewsletterController extends ControllerBase {

  /**
   * The form builder service.
   *
   * @var \Drupal\Core\Form\FormBuilderInterface
   */
  protected $formBuilder;

  /**
   * The config pages loader service.
   *
   * @var \Drupal\config_pages\ConfigPagesLoaderServiceInterface
   */
  protected $configPagesLoader;

  /**
   * Constructs a new NewsletterController.
   *
   * @param \Drupal\config_pages\ConfigPagesLoaderServiceInterface $configPagesLoader
   *   The config pages loader service.
   * @param \Drupal\Core\Form\FormBuilderInterface $form_builder
   *   The form builder service.
   */
  public function __construct(
    FormBuilderInterface $form_builder,
    ConfigPagesLoaderServiceInterface $configPagesLoader,
  ) {
    $this->formBuilder = $form_builder;
    $this->configPagesLoader = $configPagesLoader;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('form_builder'),
      $container->get('config_pages.loader'),
    );
  }

  /**
   * Provides the render array for the newsletter subscription page.
   *
   * @return array
   *   A render array representing the content of the newsletter subscription page.
   */
  public function confirmation() {
    $config_pages = $this->configPagesLoader;
    $newsletter = $config_pages->load('newsletter');

    $title = 'Votre inscription a bien été prise en compte.';

    $build = [
      '#theme' => 'newsletter_confirmation',
      '#title' => $title,
    ];

    return $build;
  }
}
