(function () {


  const root = document.querySelector('.carousel');
  if (root !== null) {
    const track = root.querySelector('#carousel__track');
    const slides = Array.from(track.querySelectorAll('.carousel__slide'));
    const prevBtn = root.querySelector('.carousel__prev');
    const nextBtn = root.querySelector('.carousel__next');

    const perView = 2; // Nombre de cartes visibles
    let index = 0; // index du premier slide visible

    // Événements
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // Navigation clavier depuis les boutons (flèches gauche/droite)
    [prevBtn, nextBtn].forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          next();
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prev();
        }
      });
    });

    // Ajustement à la taille (utile si styles changent)
    window.addEventListener('resize', update);

    // Init
    update();

    function clamp(val, min, max) {
      return Math.min(Math.max(val, min), max);
    }

    function update() {
      const maxIndex = Math.max(0, slides.length - perView);
      index = clamp(index, 0, maxIndex);

      // Calcul du décalage en pourcentage : chaque carte fait 50% + gap géré par flex-gap
      const percentPerStep = 100 / perView; // 50
      track.style.transform = `translateX(-${index * percentPerStep}%)`;

      // Accessibilité : masquer les cartes non visibles aux lecteurs d'écran
      slides.forEach((slide, i) => {
        const visible = i >= index && i < index + perView;
        slide.setAttribute('aria-hidden', String(!visible));
      });

      // État des boutons
      const atStart = index === 0;
      const atEnd = index === maxIndex;
      prevBtn.disabled = atStart;
      prevBtn.setAttribute('aria-disabled', String(atStart));
      nextBtn.disabled = atEnd;
      nextBtn.setAttribute('aria-disabled', String(atEnd));
    }

    function next() {
      index += 1;
      update();
    }

    function prev() {
      index -= 1;
      update();
    }
  }
})();
