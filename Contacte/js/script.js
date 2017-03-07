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
});
