(function ($, deck, window) {
	var $d = $(document);
//	$window = $(window);

	$d.on('deck.change', function(e, from, to) {

//		$c = $[deck]('getContainer');
		$('.watermark').html($[deck]('getSlide', to).attr('id'));

	});


})(jQuery, 'deck', this);