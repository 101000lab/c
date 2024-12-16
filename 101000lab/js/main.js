require(['jquery', 'domReady', 'requirecss', 'micro-location', 'jquery.autopager-1.0.0.min'], function($, domReady) {
	requireCss('//c.101000lab.org/101000lab/css/style.css');
	var l = Location.parse(location.href);
	if (!window.matchMedia) {
	    domReady(displayReady);
	} else if (window.matchMedia("(max-width: 767px)").matches) {
	    // mobile
	    domReady(displayReady);
	} else {
	    // display
	    domReady(displayReady);
	}

	function displayReady() {
	    if (l.pathname === '/' && l.hash !== '#t') {
		// top
		$('#logo').one('click', function() {
			var $self = $(this);
			$self.fadeOut(2000, function(){
				$self.removeClass('init').addClass('hide');
				$('.hide').fadeIn(2000);

				$('#logo a').attr({href:'/#t'});
			    });
		    });

		// autopager
		$.autopager({
			link: '#nav-next',
			    content: '.contents',
			    pagingPoint: 200
			    });
		$.autopager.load();

		$(document).on('click', 'div.post', function() {
		    var $self = $(this);
		    var href = $self.attr('data-href');
		    if (href) {
			location.href = href;
		    }
		});
	    } else if (l.pathname.match(/\/post\//)) {
		// permalink
		$('#logo').removeClass('init');
		$('.hide').removeClass('hide');
		$('.post').removeClass('bar').addClass('work').hide();
		var highres = $('.post').attr('data-highres');
		$('.post').css({backgroundImage:'url(' + highres + ')'}).fadeIn(2000);
		$('#logo a').attr({href:'/#t'});
		var width = $(window).width() - 50;
		var height = $(window).height() - $('#content > div').position().top - 10;
		$('#content > div').css({width:width, height:height});
		$(window).on('resize', function(){
			var width = $(window).width() - 50;
			var height = $(window).height() - $('#content > div').position().top - 10;
			$('#content > div').css({width:width, height:height});
		    });
	    } else {
		$('#logo').removeClass('init');
		$('.hide').fadeIn(2000).removeClass('hide');
		$('#logo a').attr({href:'/#t'});

		// autopager
		$.autopager({
			link: '#nav-next',
			    content: '.contents',
			    pagingPoint: 200
			    });
		$.autopager.load();

		$(document).on('click', 'div.post', function() {
		    var $self = $(this);
		    var href = $self.attr('data-href');
		    if (href) {
			location.href = href;
		    }
		});
	    }
	}

	function mobileReady() {
	    if (l.pathname === '/' && l.hash !== '#t') {
		var height = $(window).height() - $('#content > div').position().top - 10;
		// top
		$('#logo').one('click', function() {
			var $self = $(this);
			$self.fadeOut(2000, function(){
				$self.removeClass('init').addClass('hide');
				$('.hide').fadeIn(2000);

				$('#logo a').attr({href:'/#t'});

				$('.post').removeClass('bar').addClass('work')
				    .each(function() {
					    var width = $(window).width() - 15;
					    $('#content > div').css({width:width, height:height});
					    var highres = $(this).attr('data-highres');
					    $(this).css({backgroundImage:'url(' + highres + ')',
							marginBottom:'10px'}).fadeIn(2000);
					});
			    });
		    });

		// autopager
		/*
		$.autopager({
			link: '#nav-next',
			    content: '.contents',
			    pagingPoint: 200,
			    load: function() {
			    var height = $(window).height() - $('#content > div').position().top - 10;
				$('.post').removeClass('bar').addClass('work')
				    .each(function() {
					    var width = $(window).width() - 15;
					    $('#content > div').css({width:width, height:height});
					    var highres = $(this).attr('data-highres');
					    var highres = $(this).attr('data-highres');
					    $(this).css({backgroundImage:'url(' + highres + ')',
							marginBottom:'10px'}).fadeIn(2000);
					});
			}
			    });
		*/

		/*
		$(document).on('click', 'div.post', function() {
		    var $self = $(this);
		    var href = $self.attr('data-href');
		    if (href) {
			location.href = href;
		    }
		});
		*/

	    } else if (l.pathname.match(/\/post\//)) {
		// permalink
		$('#logo').removeClass('init');
		$('.hide').removeClass('hide');
		$('.post').removeClass('bar').addClass('work').hide();
		var highres = $('.post').attr('data-highres');
		$('.post').css({backgroundImage:'url(' + highres + ')'}).fadeIn(2000);
		$('#logo a').attr({href:'/#t'});
		var width = $(window).width() - 50;
		var height = $(window).height() - $('#content > div').position().top - 10;
		$('#content > div').css({width:width, height:height});
		$(window).on('resize', function(){
			var width = $(window).width() - 50;
			var height = $(window).height() - $('#content > div').position().top - 10;
			$('#content > div').css({width:width, height:height});
		    });
	    } else {
		$('#logo').removeClass('init');
		$('.hide').fadeIn(2000).removeClass('hide');
		$('#logo a').attr({href:'/#t'});

		// autopager
		$.autopager({
			link: '#nav-next',
			    content: '.contents',
			    pagingPoint: 200
			    });
		$.autopager.load();

		$(document).on('click', 'div.post', function() {
		    var $self = $(this);
		    var href = $self.attr('data-href');
		    if (href) {
			location.href = href;
		    }
		});
	    }
	}
    });