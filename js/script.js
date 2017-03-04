//BURGER MENU | MENU
$(document).ready(function ($) {
	var $L = 1200,
		$menu_navegacio = $('#botoneraMenu'),
		$icona_hamburguesa = $('#menuBurger'),
		$sombrejat = $('#cd-shadow-layer');

	//Obrir el menu lateral | esquerra | en mobil
	$icona_hamburguesa.on('click', function (event) {
		event.preventDefault();
		obrirMenuLateral($menu_navegacio, $sombrejat, $('body'));
	});

	//Mostrar la botonera de menus | esquerra |
	$(window).on('resize', function () {
		if ($(window).width() >= $L && $menu_navegacio.hasClass('botoneraLateral')) {
			$menu_navegacio.removeClass('botoneraLateral');
			$sombrejat.removeClass('is-visible');
			$('body').removeClass('overflow-hidden');
		}

	});

	//Obrir el menu lateral | esquerra | en mobil
	function obrirMenuLateral($lateral_panel, $background_layer, $body) {
		if ($lateral_panel.hasClass('botoneraLateral')) {
			$lateral_panel.removeClass('botoneraLateral');
			$background_layer.removeClass('is-visible');
			$body.removeClass('overflow-hidden');
		} else {
			$lateral_panel.addClass('botoneraLateral');
			$background_layer.addClass('is-visible');
			$body.addClass('overflow-hidden');
		}
	}
	//Mostrar la botonera de menus | esquerra |
    /*
	function botonsMenu( $navigation, $MQ) {
		if ( $(window).width() >= $MQ ) {
			$navigation.detach();
			$navigation.appendTo('header');
		} else {
			$navigation.detach();
			$navigation.insertAfter('header');
		}
	}*/
});

/*------------------ PARALLAX ------------------*/
// makes the parallax elements
function parallaxIt() {

  //Variables de window
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }); 

  // Per cada element "Background" del nostre parallax
  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed); 
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    }); 
  }); 

  $fwindow.trigger('scroll');
};

parallaxIt();

/* Desplaçament suau - Menus*/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-80
        }, 1000);
    }
});