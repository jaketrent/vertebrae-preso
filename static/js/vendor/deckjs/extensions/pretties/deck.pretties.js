(function ($, deck, window) {
	var $d = $(document);
  var $watermark = $('.watermark');
  var timer;

  var spineSegments = [
    'VERTEBRAE',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12',
    'L1',
    'L2',
    'L3',
    'L4',
    'L5',
    'THANKS'
  ];

  var $slides = $('.slide');
  var i = 0;
  for (i; i < $slides.length; ++i) {
    var slide = $slides.eq(i);
    slide.attr('id', spineSegments[i]);
  }

	$d.on('deck.change', function(e, from, to) {

    $watermark.html($[deck]('getSlide', to).attr('id'));

    $watermark.removeClass('flipInY').addClass('flipInY');
    timer = setTimeout(function () {
      $('.watermark').removeClass('flipInY');
    }, 1000);

	});
})(jQuery, 'deck', this);