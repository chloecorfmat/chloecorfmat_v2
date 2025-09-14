<?php

namespace Drupal\webv2\Service;

use Psr\Log\LoggerInterface;

final class ColorService {

  public function getLitteralColorFromHexaCode(string $code): string {
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
