<?php

// phpcs:ignoreFile

/**
 * @file
 * Template for sites/default/settings.php.
 *
 * This file IS committed to git as a reference. The real settings.php is
 * gitignored (see drupal/.gitignore) because it holds real secrets
 * (database password, hash salt). To provision an environment:
 *
 *   cp settings.example.php settings.php
 *
 * ...then replace every "CHANGE_ME_*" placeholder below with the real
 * value for that environment, and toggle the environment switch flag.
 */

$databases['default']['default'] = array (
  'database' => 'CHANGE_ME_DB_NAME',
  'username' => 'CHANGE_ME_DB_USER',
  'password' => 'CHANGE_ME_DB_PASSWORD',
  'prefix' => '',
  'host' => 'CHANGE_ME_DB_HOST',
  'port' => 5432,
  'driver' => 'pgsql',
  'namespace' => 'Drupal\\pgsql\\Driver\\Database\\pgsql',
  'autoload' => 'core/modules/pgsql/src/Driver/Database/pgsql/',
);

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 *
 * Generate a real value per environment, e.g.:
 *   php -r "echo bin2hex(random_bytes(55)), PHP_EOL;"
 *
 * Never reuse the same salt across environments, and never commit the
 * real value.
 */
$settings['hash_salt'] = 'CHANGE_ME_HASH_SALT';

$settings['update_free_access'] = FALSE;

$settings['config_sync_directory'] = '../config/sync';

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

$settings['entity_update_batch_size'] = 50;

$settings['entity_update_backup'] = TRUE;

$settings['migrate_node_migrate_type_classic'] = FALSE;

/**
 * Environment switch.
 *
 * This file is shared between local and production. Toggle this single
 * flag per environment: TRUE locally, FALSE in production. Everything
 * dev-only (Twig debug, disabled caches/aggregation, verbose errors) is
 * gated behind it below instead of being applied unconditionally.
 */
$config['config_split.config_split.local']['status'] = FALSE;

if ($config['config_split.config_split.local']['status']) {
  $config['system.logging']['error_level'] = 'verbose';
  $settings['rebuild_access'] = TRUE;

  $settings['cache']['bins']['render'] = 'cache.backend.memory';
  $settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.memory';

  $config['system.performance']['css']['preprocess'] = FALSE;
  $config['system.performance']['js']['preprocess'] = FALSE;

  // Loads Twig debug/cache overrides (see development.services.yml).
  $settings['container_yamls'][] = $app_root . '/' . $site_path . '/development.services.yml';
}
