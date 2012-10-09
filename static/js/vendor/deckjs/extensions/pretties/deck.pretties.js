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

  $d.on('keydown', function (e) {
    // [ 219 push the left to collapse under the weight of the right
    // ] 221 push the right to collapse under the weight of the left
    var code = e.which;
    if (code === 219 || code === 221) {
      var $halves = $('.half');
      var i = 0;
      for (i; i < $halves.length; i+=2) {
        // assume always have 2 per page
        var $before = $halves.eq(i);
        var $after = $halves.eq(i + 1);

        if (code === 219) {
          // OI -> oo
          if ($after.hasClass('collapse')) {
            $before.removeClass('expand');
            $after.removeClass('collapse');
          } else {
            // oo -> IO
            $before.addClass('collapse');
            $after.addClass('expand');
          }
          // IO -> IO
          // nada
        } else if (code === 221) {
          // IO -> oo
          if ($before.hasClass('collapse')) {
            $before.removeClass('collapse');
            $after.removeClass('expand');
          } else {
            // oo -> OI
            $before.addClass('expand');
            $after.addClass('collapse');
          }
          // OI -> OI
          // nada
        }
      }
    }
  });

})(jQuery, 'deck', this);