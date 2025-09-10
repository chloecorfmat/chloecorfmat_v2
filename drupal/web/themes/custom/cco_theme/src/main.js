import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// N’ajoute que les icônes réellement utilisées
library.add(faChevronLeft, faChevronRight, faLinkedin, faTwitter);

// Convertit automatiquement <i class="fa-..."> en SVG
dom.watch();
