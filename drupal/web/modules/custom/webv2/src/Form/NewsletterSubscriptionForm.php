<?php

namespace Drupal\webv2\Form;

use Brevo\Client\Api\ContactsApi;
use Brevo\Client\Configuration;
use Brevo\Client\Model\CreateContact;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Markup;
use Exception;
use GuzzleHttp\Client;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\config_pages\ConfigPagesLoaderServiceInterface;

/**
 * Provides a form for searching movies.
 */
class NewsletterSubscriptionForm extends FormBase {

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
    return 'newsletter_subscription_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config_pages = $this->configPagesLoader;
    $newsletter = $config_pages->load('config');

    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Adresse e-mail (champ obligatoire)'),
      '#size' => 30,
      '#maxlength' => 128,
      '#required' => true,
      '#description' => '<p>exemple : prenom.nom@gmail.com</p>',
      '#description_display' => 'before',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t("S’inscrire"),
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

    $config_pages = $this->configPagesLoader;
    $newsletter = $config_pages->load('config');

    $apiKey = $newsletter->get('field_brevo_api_key')->value;

    // Configure API key authorization: api-key
    $config = Configuration::getDefaultConfiguration()->setApiKey('api-key', $apiKey);

    $apiInstance = new ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
      new Client(),
      $config
    );

    $email = $form_state->getUserInput()['email'];
    $list = (int) $newsletter->get('field_brevo_list_newsletter')->value;

    $createContact = new CreateContact([
      'email' => $email,
      'updateEnabled' => true,
      'listIds' =>[$list]
    ]);

    try {
      $apiInstance->createContact($createContact);
      $form_state->setRedirect('webv2.newsletter.confirmation');


    } catch (Exception $e) {
      echo 'Exception when calling ContactsApi->createContact: ', $e->getMessage(), PHP_EOL;
      die();
    }
  }

}
