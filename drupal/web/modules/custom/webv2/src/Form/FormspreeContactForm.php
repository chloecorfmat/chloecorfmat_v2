<?php

namespace Drupal\webv2\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Markup;
use Exception;
use GuzzleHttp\Client;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\config_pages\ConfigPagesLoaderServiceInterface;

/**
 * Provides a Formspree contact form.
 */
class FormspreeContactForm extends FormBase {

  /**
   * The config pages loader service.
   *
   * @var \Drupal\config_pages\ConfigPagesLoaderServiceInterface
   */
  protected $configPagesLoader;

  public function __construct(ConfigPagesLoaderServiceInterface $configPagesLoader) {
    $this->configPagesLoader = $configPagesLoader;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new self(
      $container->get('config_pages.loader'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'formspree_contact_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config_pages = $this->configPagesLoader;
    $config = $config_pages->load('config');

    // Configurer l'action Formspree
    $form['#action'] = $config->get('field_formspree_action')->value;
    $form['#method'] = 'POST';

    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Nom'),
      '#required' => true,
    ];

    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Adresse e-mail'),
      '#required' => true,
      '#description' => '<p>exemple : prenom.nom@gmail.com</p>',
      '#description_display' => 'before',
    ];

    $form['object'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Objet'),
      '#required' => true,
    ];

    $form['textarea'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Message'),
      '#required' => true,
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t("Envoyer le message"),
      '#attributes' => [
        'class' => [
          'btn',
        ],
      ],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  }

}
