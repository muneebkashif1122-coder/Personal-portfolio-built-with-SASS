(function ($) {
  $.fn.typewriterLoop = function (options) {

    const settings = $.extend({
      texts: [],
      typeSpeed: 100,
      deleteSpeed: 50,
      pause: 1500
    }, options);

    return this.each(function () {
      const $el = $(this);
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const currentText = settings.texts[textIndex];

        if (!isDeleting) {
          $el.text(currentText.substring(0, charIndex + 1));
          charIndex++;

          if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, settings.pause);
          } else {
            setTimeout(type, settings.typeSpeed);
          }

        } else {
          $el.text(currentText.substring(0, charIndex - 1));
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % settings.texts.length;
            setTimeout(type, 300);
          } else {
            setTimeout(type, settings.deleteSpeed);
          }
        }
      }

      type();
    });
  };
})(jQuery);