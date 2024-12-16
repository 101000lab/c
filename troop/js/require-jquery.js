$(function() {

    if (!location.href.match(/trooprecords.net\/*$/)) {
	      return;
    }

    $('div#slider').css({position:'relative'}).height($('div.slider:first').height());
    $('div.slider').css({position:'absolute'});

    $('div.slider').hide();
    $('div.slider:first').show();

    var count =  $('div.slider').size();
    var current = 0;

    if (count < 2) {
	      return;
    }

    id = setInterval(function() {
	      $('div.slider').eq(current).fadeOut(1000);
        next = (current + 1) % count;
	      $('div.slider').eq(next).fadeIn(1000);
	      current = next;
	  }, 5000);

});
