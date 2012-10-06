(function ($, deck, window) {
	var $d = $(document);
  var $watermark = $('.watermark');
  var timer;
	$d.on('deck.change', function(e, from, to) {

    $watermark.html($[deck]('getSlide', to).attr('id'));

    $watermark.removeClass('flipInY').addClass('flipInY');
    timer = setTimeout(function () {
      $('.watermark').removeClass('flipInY');
    }, 1000);

	});
})(jQuery, 'deck', this);