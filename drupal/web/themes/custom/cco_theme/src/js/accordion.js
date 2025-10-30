(function () {
  class Accordion {
    constructor(el) {
      this.el = el;
      this.triggers = Array.from(el.querySelectorAll('.accordion-trigger'));
      this.allowMultiple = false; // Modifier à false pour n'autoriser qu'un seul panneau ouvert à la fois

      this.init();
    }

    init() {
      this.triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => this.toggle(e.currentTarget));
        trigger.addEventListener('keydown', (e) => this.handleKeyDown(e));
      });
    }

    toggle(trigger) {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));

      if (!this.allowMultiple && !isExpanded) {
        // Fermer tous les autres panneaux de cet accordéon uniquement
        this.triggers.forEach(t => {
          if (t !== trigger && t.getAttribute('aria-expanded') === 'true') {
            this.close(t);
          }
        });
      }

      if (isExpanded) {
        this.close(trigger);
      } else {
        this.open(trigger);
      }
    }

    open(trigger) {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', 'true');
      panel.classList.remove('accordion-panel--hidden');
    }

    close(trigger) {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', 'false');
      panel.classList.add('accordion-panel--hidden');
    }

    handleKeyDown(e) {
      const trigger = e.currentTarget;
      const index = this.triggers.indexOf(trigger);

      switch(e.key) {
        case 'ArrowDown':
          e.preventDefault();
          this.focusNext(index);
          break;
        case 'ArrowUp':
          e.preventDefault();
          this.focusPrevious(index);
          break;
        case 'Home':
          e.preventDefault();
          this.triggers[0].focus();
          break;
        case 'End':
          e.preventDefault();
          this.triggers[this.triggers.length - 1].focus();
          break;
      }
    }

    focusNext(currentIndex) {
      const nextIndex = currentIndex === this.triggers.length - 1 ? 0 : currentIndex + 1;
      this.triggers[nextIndex].focus();
    }

    focusPrevious(currentIndex) {
      const prevIndex = currentIndex === 0 ? this.triggers.length - 1 : currentIndex - 1;
      this.triggers[prevIndex].focus();
    }
  }

  // Initialisation automatique de TOUS les accordéons sur la page
  document.addEventListener('DOMContentLoaded', () => {
    const accordionElements = document.querySelectorAll('.accordion');
    accordionElements.forEach(accordionEl => {
      new Accordion(accordionEl);
    });
  });
})();
