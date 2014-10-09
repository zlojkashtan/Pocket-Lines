//=================================================================
//
//  ██████╗  ██████╗ ███╗   ██╗██████╗  █████╗    ███████╗███████╗
//  ██╔══██╗██╔═══██╗████╗  ██║██╔══██╗██╔══██╗   ██╔════╝██╔════╝
//  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║███████║   █████╗  ███████╗
//  ██╔══██╗██║   ██║██║╚██╗██║██║  ██║██╔══██║   ██╔══╝  ╚════██║
//  ██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║██╗███████╗███████║
//  ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
//
//  http://bonda.es - FROM MALLORCA WITH LOVE
//=================================================================
// https://github.com/PascalPrecht/angular-translate-ng-newsletter-article/blob/master/article.md
// http://angular-translate.github.io/
// http://angular-translate.github.io/docs/#/api/pascalprecht.translate.filter:translate
//=================================================================
// {{'TITLE' | translate}}
// <button ng-click="changeLanguage('de')" translate="BUTTON_LANG_DE"></button>
// {{ 'WITH_VALUES' | translate:'{value: 5}' }} --> 'WITH_VALUES': 'The following value is dynamic: {{value}}'
//=================================================================

PL.config(function ($translateProvider) {

	$translateProvider.translations('es', {
		

		// GENERALES
		//---------------------------------------------------
		CARGANDO: 'Cargando...',
		ESPERA: 'Espera',
		MI_VALOR: 'Mi valoración',
		VER_MAS: 'Ver más',
		FLAG_TIB: 'Transporte TIB',

		// Home
		//---------------------------------------------------
		INPUT_INTRODUCE: 'Buscar número o nombre de parada',
		INPUT_OFFLINE: 'No tienes internet',
		MSG_OFFLINE_H1: 'No estás conectado',
		MSG_OFFLINE_P: 'Activa internet en tu teléfono para poder consultar las paradas',
		MSG_START: 'Empieza a buscar una parada escribiendo el nombre de la calle en la que se encuentra',
		HEADER_MAPA: 'Situación en el mapa',
		FLAG_PARADAS_VISTAS: 'Parada vista {{clicks}} veces',

		// Ajustes
		//---------------------------------------------------
		AJUSTES_TITLE: 'Ajustes',
		IDIOMA_PREDETERMINADO: 'Idioma predeterminado',
		PREFERENCIAS_BUSQUEDA: 'Preferencias de búsqueda',

	});

});