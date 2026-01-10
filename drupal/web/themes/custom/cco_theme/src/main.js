import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faClock, faStopwatch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import hljs from 'highlight.js';

document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();
});

// N’ajoute que les icônes réellement utilisées
library.add(faChevronLeft, faChevronRight, faClock, faStopwatch, faUser, faLinkedin, faTwitter);

// Convertit automatiquement <i class="fa-..."> en SVG
dom.watch();
