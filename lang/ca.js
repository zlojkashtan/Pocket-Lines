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

	$translateProvider.translations('ca', {

		// GENERALES
		//---------------------------------------------------
		CARGANDO: 'Loading...',
		ESPERA: 'Wait',
		MI_VALOR: 'My Evaluation',
		VER_MAS: 'See More',

		// Ajustes
		//---------------------------------------------------
		AJUSTES_TITLE: 'Configuració',
		IDIOMA_PREDETERMINADO: 'Idioma predeterminat',
		PREFERENCIAS_BUSQUEDA: 'Preferències de búsqueda',

	});

});
