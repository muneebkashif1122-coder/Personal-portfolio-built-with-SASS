(function ($) {
  $.fn.glitch = function () {
    return this.each(function () {
      let $el = $(this);
      let text = $el.text();

      // Set the data-text attribute so CSS can "see" it
      $el.attr('data-text', text).addClass('visual-glitch');

      // Randomly trigger the glitch intensity to make it look "organic"
      setInterval(function () {
        if (Math.random() > 0.8) {
          $el.addClass('active');
          setTimeout(() => $el.removeClass('active'), 200);
        }
      }, 1500);
    });
  };

  $(function () {
    $('span.block').glitch();
    
    // Typewriter initialization
    var typewriterElement = document.getElementById('typewriter');
    if (typewriterElement && typeof Typewriter !== 'undefined') {
      new Typewriter(typewriterElement, {
        strings: ['UX/UI Designer and Front-end Director', 'Based in Kyiv...'],
        autoStart: true,
        loop: true,
      });
    }
  });
})(jQuery);
