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

$(document).ready(function(){
  
  $(".slider").slick({
    autoplay:true,
    autoplaySpeed:10000,
    speed:600,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
   // fade:true,
    draggable:false,
    prevArrow:'<button class="PrevArrow"><i class="icon-circle-left"></i></button>',
    nextArrow:'<button class="NextArrow"><i class="icon-circle-right"></button>', 
  });
  
})