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

    //+==============================================
    // GENERALES
    // - /
    //+==============================================
    CARGANDO: 'Cargando...',
    ESPERA: 'Espera',
    MI_VALOR: 'Mi valoración',
    VER_MAS: 'Ver más',


    //+==============================================
    // BUTTONS
    // - /
    //+==============================================
    NO_ENCONTRADO_BUSCADOR: 'Ir al buscador',
    AYUDA_PREGUNTAS: 'Responder preguntas',
    ANADIR_CESTA: 'AÑADIR A LA CESTA',
    NO_VENTA_BUTTON: 'No a la venta',
    LOGOUT_BUTTON: 'Cerrar sesión',
    ACTUALIZAR_DATOS_BUTTON: 'Actualizar datos',
    INVITA_BUTTON: 'Enviar invitaciones',


    //+==============================================
    // TABS
    // - /
    //+==============================================
    //PRODUCTO
    COMENTARIOS: 'Comentarios',
    CARACTERISTICAS: 'Características',
    BODEGA_TAB: 'Bodega',
    OTROS_VINOS: 'Otros vinos',

    //BODEGA
    DESTACADO_TAB: 'Destacados',
    EXPERIENCIAS_TAB: 'Experiencias',
    VINOS_TAB: 'Vinos',

    //+==============================================
    // HOME
    // - /
    //+==============================================
    ACTUALIZAR_HOME: 'Actualizando contenido de Wineity. Por favor, espera...',


    //+==============================================
    // PRODUCTO
    // - /productos/ver/<num>
    //+==============================================
    NO_ENCONTRADO: 'Producto no encontrado',
    NO_ENCONTRADO_TEXT: 'El producto que has buscado no existe en nuestra base de datos o se ha descatalogado. Te recomendamos buscarlo a través de nuestro buscador o que descubras nuestro variado catálogo de productos.',
    AYUDA_CRECER: '¡Ayuda a Wineity a crecer!',
    AYUDA_CRECER_TEXT: 'Si te interesa tanto como a nosotros que el catálogo de Wineity crezca, ayúdanos respondiendo algunas preguntas sobre el producto que acabas de buscar y no has encontrado.',
    NO_VENTA: 'Este producto no se está vendiendo actualmente en Wineity. Añádelo a favoritos y podrás acceder a él facilmente.',
    HEADER_PRODUCTO: 'Detalles del vino',
    PRECIO: 'Precio',
    BOTELLAS: 'botellas',
    VALORACION: 'Valoración',
    BODEGA: 'Bodega',
    REGION: 'Región',
    TIPO: 'Tipo',
    EDAD: 'Edad',
    DORIGEN: 'D. Origen',
    C_VARIEDAD: 'Variedad',
    C_NCATAS: 'Notas de cata',
    C_BARRICA: 'Barrica',
    C_MARIDAJE: 'Maridaje',
    C_TSERVICIO: 'Temperatura de servicio',
    C_PREMIOS: 'Temperatura de servicio',
    C_OTROS: 'Otros',


    //+==============================================
    // BODEGA
    // - /bodegas/ver/<num>
    // - ALGUNAS KEYS SE UTILIZAN DE PRODUCTO
    //+==============================================
    HEADER_BODEGA: 'Detalles de la bodega',
    FUNDACION: 'Fundación',
    NO_VINOS: 'Esta bodega no tiene vinos actualmente en Wineit',


    //+==============================================
    // DESCUBRE
    // - /descubre
    //+==============================================
    HEADER_DESCUBRE: 'Descubre',


    //+==============================================
    // PERFIL
    // ' \'    '
    //+==============================================
    HEADER_PERFIL: 'Mi Wineity',
    P_ACTIVIDAD: 'ACTIVIDAD',
    P_FAVORITOS: 'FAVORITOS',
    P_CUPONES: 'CUPONES',
    CARGA_FAVORITOS: 'Cargando favoritos',
    NO_FAVORITOS: 'No tienes favoritos',

        //+==============================================
        // LOGIN
        //+==============================================
        ESCRIBE_EMAIL: 'Escribe tu dirección de email',
        COMPROBAR_EMAIL_TEXT: 'Por favor, comprueba que tu dirección es válida',
        LOGIN_REGISTRARSE: 'Registrarse',
        OLVIDADO_PW: '¿Has olvidado la contraseña?',
        INICIANDO_SESION: 'Iniciando sesión',
        AVISO_BETA: 'Wineity actualmente se encuentra en estado de Beta Cerrada, y para poder iniciar sesión necesitas obtener tus datos de acceso en https://www.wineity.com',

        //+==============================================
        // MENU AJUSTES
        //+==============================================
        AJUSTES_PERSO: 'Ajustes personales',
        AJUSTES_CUENTA: 'Ajustes de cuenta',
        INVITA_AMIGOS: 'Invita a tus amigos',
        LINK_FAQ: 'F.A.Q.',
        LINK_LEGAL: 'Aviso legal',
        LINK_SATISFACCION: 'Garantía de satisfacción',
        INFO_PROBLEMA: 'Informar de un problema',

            //+==============================================
            // AJUSTES DE CUENTA
            //+==============================================
            CUENTA_IDIOMAS: 'IDIOMAS',
            CUENTA_IDIOMAS_TEXT: 'Elige el idioma con el que quieres utilizar Wineity',
            CUENTA_REDES: 'REDES SOCIALES',
            CUENTA_REDES_TEXT: 'Comparte la experiencia Wineity en las redes sociales',
            PUBLICAR_FB: 'Publicar en Facebook',
            PUBLICAR_FB_TEXT: 'Comparte tus favoritos y valoraciones en Facebook',
            PUBLICAR_TW: 'Publicar en Twitter',
            PUBLICAR_TW_TEXT: 'Comparte tus favoritos y valoraciones en Twitter',

            //+==============================================
            // AJUSTES PERSONALES
            //+==============================================
            PERSO_DATOS_PERSO: 'DATOS PERSONALES',
            PERSO_DATOS_PERSO_TEXT: 'Rellena tus datos para mejorar tu experiencia',

            //PLACEHOLDERS
            PERSO_DATOS_PH_NOMBRE: 'Tu nombre',
            PERSO_DATOS_PH_APELLIDOS: 'Tus apellidos',

            PERSO_DATOS_ENVIO: 'DATOS DE ENVÍO',

            //PLACEHOLDERS
            PERSO_DATOS_PH_VIA: 'Nombre de la vía',
            PERSO_DATOS_PH_PISO: 'Número, portal, piso, puerta, etc.',
            PERSO_DATOS_PH_CP: 'C.P.',

            PERSO_DATOS_ENVIO_TEXT: 'Dirección donde quieres recibir tus pedidos',
            PERSO_SELECT_PAIS: 'Selecciona un pais',
            PERSO_SELECT_COMUNIDAD: 'Selecciona una comunidad',
            PERSO_TARGETAS_ALERT: 'Por motivos de seguridad, no se muestra tu información de pago, ni dejamos que se modifique información sensible a través de la app. Si quieres modificar otros datos, dirigete a https://www.wineity.com con tu ordenador',

            //+==============================================
            // INIVITA AMIGOS
            //+==============================================
            HEADER_INVITA: 'Invitar amigos',
            EMAIL_AMIGO_PH: 'Email del amigo',


            //+==============================================
            // F.A.Q.
            //+==============================================
            HEADER_FAQ: 'Preguntas frecuentes',
            FAQ_1: '¿Qué es Wineity?',
            FAQ_1_TEXT: 'Wineity es la aplicación móvil de referencia para cualquier experiencia vinícola ya sea ésta basada en la cata, la ruta, la estancia o la compra de vino u otro servicio que ofrezca cualquier bodega a nivel mundial.',
            FAQ_2: '¿Qué servicios ofrece Wineity?',
            FAQ_2_TEXT: 'Wineity ofrece los servicios que la bodega o región quiera ofrecer, venta de vinos, bonos para disfrutar de catas, tours, estancias, visitas guiadas, libros. Todo para que el usuario obtenga una experiencia agradable y disfrute del mundo que rodea al vino.',
            FAQ_3: '¿Son auténticos los productos vendidos en Wineity?',
            FAQ_3_TEXT: 'Todos los productos vendidos por Wineity son auténticos, y han pasado nuestros controles de calidad.',
            FAQ_4: '¿Los productos vendidos en Wineity están marcados con la etiqueta de CE?',
            FAQ_4_TEXT: 'Sí, todo lo que vendemos en Wineity es conforme a la legislación vigente. Si tienes alguna pregunta, puedes ponerte en contacto con nosotros.',
            FAQ_5: '¿Qué debo hacer para ser miembro en Wineity o "Wineity VIP Club"?',
            FAQ_5_TEXT: 'Para poder ser miembro de Wineity debes registrarte haciendo clic aquí http://www.Wineity.com/registro/, introduciendo un email y una contraseña. Como miembro registrado, podrá rellenar su perfil personal, incluyendo sus gustos o preferencias en el mundo del vino. Puede hacerse miembro VIP registrándose en el CLUB VIP Wineity, que pagando una cuota mensual/anual recibirá en su casa muestras de vino escogidos por nuestros sumillers, recibirá las ofertas en bonos de rutas, catas, tours, estancias, visitas guiadas o libros, en primer lugar, antes que el resto de miembros no VIP. Las muestras de vino serán 1 caja de 3 botellas, cada una de un tipo de vino o de una bodega diferente. Con el propósito que nuestros socios puedan disfrutar de nuevas experiencias.',
            FAQ_5_TEXT_2: 'Para poder comprar cualquiera de nuestros productos deberá registrarse.',
            FAQ_6: '¿Cómo contrato los servicios / productos?',
            FAQ_6_TEXT: 'Para contratar nuestros servicio / producto tiene que ir a la sección de vinos o de bonos oferta. Escoja el producto deseado y haga clic en "Añadir al carrito". Cuando desee finalizar el pedido, haga clic en "Contratar" y será redireccionado a la página de pago seguro.',
            FAQ_7: '¿Cuáles son las formas de pago disponibles?',
            FAQ_7_TEXT: 'Usted puede comprar en Wineity a través de las siguientes modalidades de pago: tarjeta de crédito (Mastercard y Visa), Paypal, y transferencia bancaria. Si desea realizar el pago por transferencia bancaria, utilice los siguientes datos:',
            FAQ_7_TEXT_2: 'Nº de cuenta: 0081-0435-41-0001303740',
            FAQ_8: '¿Cuál es el proceso una vez contrato los servicios?',
            FAQ_8_TEXT: 'Una vez que compres en Wineity, si el producto es vino, recibirá un Tracking number para poder seguir tu pedido y saber en qué estado se encuentra. Si lo que has comprado es un bono oferta, cuando lo vayas a utilizar deberás seguir las instrucciones del bono para activarlo. Si tuvieras alguna duda deberías ponerte en contacto con nuestro departamento de atención al cliente.',
            FAQ_8_TEXT_2: 'Si tiene alguna duda, póngase en contacto con nosotros a info@Wineity.com',
            FAQ_9: '¿En qué consiste la garantía de satisfacción?',
            FAQ_9_TEXT: 'Nuestro objetivo es alcanzar la máxima satisfacción de nuestros clientes. Podemos garantizarle el 100% de calidad en nuestros servicios.',
            FAQ_9_LINK: 'Link a garantía de satisfacción',
            FAQ_10: '¿Puedo comprar en Wineity sino vivo en España?',
            FAQ_10_TEXT: 'Usted puede comprar en Wineity aunque no resida en España. Contamos con un equipo multilingüe que podrá asesorarle en caso de que no hable español. ',
            FAQ_10_TEXT_2: 'Si lo que compra es vino y su dirección de entrega es dentro de la Comunidad Europea, no habrá aduanas ni aranceles añadidos al coste. Si en cambio la dirección de entrega está fuera de la Comunidad Europea, le informaremos del procedimiento a seguir para y los gastos que conllevará dicha entrega.',
            FAQ_11: '¿En qué idiomas puedo comunicarme con vosotros?',
            FAQ_11_TEXT: 'Nosotros hablamos los siguientes idiomas: español, catalán, inglés, alemán y francés.',
            FAQ_12: '¿Cómo garantizáis la protección de datos?',
            FAQ_12_TEXT: 'Wineity es consciente de la importancia que otorgan sus usuarios al tratamiento responsable de los datos personales. Por ello, Wineity cumple todas las normas legales de protección de datos que sean aplicables y establece mecanismos y procedimientos de seguridad para la gestión de los datos de los usuarios. Wineity cumple con las directrices de la Ley Orgánica 15/1999 de 13 de diciembre de Protección de Datos de Carácter Personal, el Real Decreto 1720/ 2007 de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.',
            FAQ_13: 'Cómo puedo darme de baja en Wineity o "Wineity VIP Club"?',
            FAQ_13_TEXT: 'Si desea eliminar su cuenta puede hacerlo en la sección Mi Cuenta. Si desea darse de baja y dejar de recibir ofertas especiales y otras informaciones de Wineity póngase en contacto con nosotros enviando un email a info@Wineity.com',
            FAQ_13_TEXT_2: 'Wineity no reembolsará ninguna cantidad al darse de baja de sus servicios VIP.',
            FAQ_14: '¿En qué formato recibiré el bono-experiencia?',
            FAQ_14_TEXT: 'Recibirá su BONO EXPERIENCIA en formato Word o PDF. Solo tienes que imprimirlo y presentarlo en la bodega o restaurante que corresponda.',
            FAQ_14_ALERT: 'PERO RECUERDA!! ANTES TIENES QUE ACTIVARLO!!',
            FAQ_15: '¿Qué ocurre si no me gusta la experiencia realizada?',
            FAQ_15_TEXT: 'En Wineity le garantizamos la máxima satisfacción. Aunque puede que haya momentos no controlables por nosotros. Si ello ocurriera ponte en contacto con nosotros y comunícanos la mala experiencia e intentaremos poner todos nuestros medios para que no vuelva a ocurrir.',
            FAQ_16: '¿Qué conocimientos técnicos o específicos dispone el equipo de Wineity sobre el vino?',
            FAQ_16_TEXT: 'En Wineity contamos con un equipo profesional de sumellier con conocimientos específicos en el mundo del vino. Tras 15 años de experiencia en sumellier, nuestro equipo multidisciplinar podrá orientarle y ofrecerle el mejor y más personalizado servicio acorde con la experiencia que quiera vivir.',


  });


  // FIN TRADUCCION ES





  $translateProvider.translations('en', {

    //+==============================================
    // GENERALES
    // - /
    //+==============================================
    CARGANDO: 'Loading...',
    ESPERA: 'Wait',
    MI_VALOR: 'My Evaluation',
    VER_MAS: 'See More',


    //+==============================================
    // BUTTONS
    // - /
    //+==============================================
    NO_ENCONTRADO_BUSCADOR: 'Go to Search',
    AYUDA_PREGUNTAS: 'Answer Questions',
    ANADIR_CESTA: 'ADD TO BASKET',
    NO_VENTA_BUTTON: 'Not On Sale',
    LOGOUT_BUTTON: 'Close Session',
    ACTUALIZAR_DATOS_BUTTON: 'Update',
    INVITA_BUTTON: 'Send Invitations',


    //+==============================================
    // TABS
    //+==============================================
    //PRODUCTO
    COMENTARIOS: 'Comments',
    CARACTERISTICAS: 'Features',
    BODEGA_TAB: 'Winery',
    OTROS_VINOS: 'Other Wines',

    //BODEGA
    DESTACADO_TAB: 'Popular',
    EXPERIENCIAS_TAB: 'Experiences',
    VINOS_TAB: 'Wines',

    //+==============================================
    // HOME
    // - /
    //+==============================================
    ACTUALIZAR_HOME: 'Updating Wineity. Please, wait...',



    //+==============================================
    // PRODUCTO
    // - /productos/ver/<num>
    //+==============================================
    NO_ENCONTRADO: 'Product Not Found',
    NO_ENCONTRADO_TEXT: 'The product you searched for does not exist in our database or has been discontinued. We recommend you look through our search engine or discover our varied product catalog.',
    AYUDA_CRECER: 'Help Wineity Grow!',
    AYUDA_CRECER_TEXT: 'If you are interested in helping Wineity grow, help us by answering questions about the product that you have just searched and have not found.',
    NO_VENTA: 'This product is not currently on sale. Add it favourites and you will be able to access it easily later',
    HEADER_PRODUCTO: 'Wine Details',
    PRECIO: 'Price',
    BOTELLAS: 'bottles',
    VALORACION: 'Evaluation',
    BODEGA: 'Winery',
    REGION: 'Region',
    TIPO: 'Type',
    EDAD: 'Age',
    DORIGEN: 'Origin',
    C_VARIEDAD: 'Variety',
    C_NCATAS: 'Tasting Notes',
    C_BARRICA: 'Casc',
    C_MARIDAJE: 'Pairing',
    C_TSERVICIO: 'Serving Temperature',
    C_PREMIOS: 'Serving Temperature',
    C_OTROS: 'Other',


    //+==============================================
    // BODEGA
    // - /bodegas/ver/<num>
    // - ALGUNAS KEYS SE UTILIZAN DE PRODUCTO
    //+==============================================
    HEADER_BODEGA: 'Details of the Winery',
    FUNDACION: 'Foundation',
    NO_VINOS: 'This winery currently does not have any wines on sale on Wineity',


    //+==============================================
    // DESCUBRE
    // - /descubre
    //+==============================================
    HEADER_DESCUBRE: 'Discover',



    //+==============================================
    // PERFIL
    // ' \'    '
    //+==============================================
    HEADER_PERFIL: 'My Wineity',
    P_ACTIVIDAD: 'ACTIVITY',
    P_FAVORITOS: 'FAVORITES',
    P_CUPONES: 'COUPONES',
    CARGA_FAVORITOS: 'Loading Favourites',
    NO_FAVORITOS: 'No Favourites',

        //+==============================================
        // LOGIN
        //+==============================================
        ESCRIBE_EMAIL: 'Enter Your E-Mail Address',
        COMPROBAR_EMAIL_TEXT: 'Please, make sure that your e-mail address is valid',
        LOGIN_REGISTRARSE: 'Register',
        OLVIDADO_PW: 'Forgot Your Password?',
        INICIANDO_SESION: 'Logging In',
        AVISO_BETA: 'Wineity is currently in a state of Closed Beta Test, and to be able to log in you will need to obtain your access data on  https://www.wineity.com',

        //+==============================================
        // MENU AJUSTES
        //+==============================================
        AJUSTES_PERSO: 'Personal Settings',
        AJUSTES_CUENTA: 'Account Settings',
        INVITA_AMIGOS: 'Invite Your Friends',
        LINK_FAQ: 'F.A.Q.',
        LINK_LEGAL: 'Legal Notice',
        LINK_SATISFACCION: 'Satisfaction Guarantee',
        INFO_PROBLEMA: 'Report a Problem',

            //+==============================================
            // AJUSTES DE CUENTA
            //+==============================================
            CUENTA_IDIOMAS: 'LANGUAGES',
            CUENTA_IDIOMAS_TEXT: 'Choose Your Language',
            CUENTA_REDES: 'SOCIAL NETWORKS',
            CUENTA_REDES_TEXT: 'Share your Wineity experience in social networks',
            PUBLICAR_FB: 'Publish on Facebook',
            PUBLICAR_FB_TEXT: 'Share your Favorites and Ratings on Facebook',
            PUBLICAR_TW: 'Publish on Twitter',
            PUBLICAR_TW_TEXT: 'Share your Favourites and Ratings Twitter',

            //+==============================================
            // AJUSTES PERSONALES
            //+==============================================
            PERSO_DATOS_PERSO: 'PERSONAL DATA',
            PERSO_DATOS_PERSO_TEXT: 'Fill in your data to improve your experience at Wineity',

            //PLACEHOLDERS
            PERSO_DATOS_PH_NOMBRE: 'Your Name',
            PERSO_DATOS_PH_APELLIDOS: 'Your Surname',

            PERSO_DATOS_ENVIO: 'SHIPPING INFORMATION',

            //PLACEHOLDERS
            PERSO_DATOS_PH_VIA: 'Street',
            PERSO_DATOS_PH_PISO: 'Number, door, floor etc.',
            PERSO_DATOS_PH_CP: 'Postal Code',

            PERSO_DATOS_ENVIO_TEXT: 'Default address where you want to receive your orders',
            PERSO_SELECT_PAIS: 'Choose a Country',
            PERSO_SELECT_COMUNIDAD: 'Select a Community',
            PERSO_TARGETAS_ALERT: 'For security reasons, your Paypal or credit card details are not shown, nor let it modify sensitive information through the app. If you want to modify your bank details, go to https://www.wineity.com with your computer',

            //+==============================================
            // INIVITA AMIGOS
            //+==============================================
            HEADER_INVITA: 'Invite a Friend',
            EMAIL_AMIGO_PH: 'Email',


            //+==============================================
            // F.A.Q.
            //+==============================================
            HEADER_FAQ: 'Frequently Asked Questions',
            FAQ_1: 'What is Wineity?',
            FAQ_1_TEXT: 'Wineity is the mobile application of reference for any wine experience whether it is based on the tasting, the route, stay or the purchase of wine or another service that offers any winery worldwide.',
            FAQ_2: 'What does Wineity offer?',
            FAQ_2_TEXT: 'Wineity provides services that certain wineries or regions may offer: wine sales, bonuses to enjoy tastings, tours, stays, tours, books-everything to obtain a pleasant experience and enjoy the world of wine.',
            FAQ_3: 'Are authentic products sold in Wineity?',
            FAQ_3_TEXT: 'All products sold by Wineity are authentic, and have passed our quality control.',
            FAQ_4: 'Are the products that are sold in Wineity,marked with the CE label?',
            FAQ_4_TEXT: 'Yes, everything we sell is Wineity is in accordance with current legislation. Please contact us if you have any questions.',
            FAQ_5: 'What should I do to become a member of Wineity or the "Wineity VIP Club"?',
            FAQ_5_TEXT: 'To be a member of Wineity you must register by clicking here http://www.Wineity.com/registro/ introducing an email and a password. As a registered member, you must fill in your personal profile, including your tastes and preferences in the world of wine. You can becomea VIP member by registering on the Wineity VIP Club. By paying a monthly / annual fee, you will receive  wine samples selected by our sommeliers, receive bids, bonuses, tasting routes, winery tours, stays, guided tours or books, first, before the rest of our, non-VIP members. Wine samples will be a box of 3 bottles. Each of a different type of wine or a different winery.',
            FAQ_5_TEXT_2: 'You must register in order to purchase any of our products.',
            FAQ_6: 'How do I hire the services/products?',
            FAQ_6_TEXT: 'In order to contract our services/products, you have to go to the wine section or the bonus offers sections. Choose a desired product and click "Add to basket". When you wish to finalize your order, click "HIRE", and you will be redirectioned to the secure payment page.',
            FAQ_7: 'What are the available payment methods?',
            FAQ_7_TEXT: 'You can buy at Wineity using the following forms of payment: credit card (Mastercard and Visa), Paypal, and wire transfer. If you wish to make payment by a wire transfer, please use the following data:',
            FAQ_7_TEXT_2: 'Account number: 0081-0435-41-0001303740',
            FAQ_8: 'What is the after-purchase process?',
            FAQ_8_TEXT: 'Once you have purchased a product at Wineity, wine in this case, you will receive a tracking number to be able to follow your order. If what you have bought is a bonus offer, when you want to use it,you must follow the instructions to activate your bonus. If you have any doubts you should contact our customer service department.',
            FAQ_8_TEXT_2: 'If you have any questions, please contact us at info@wineity.com',
            FAQ_9: 'What is the satisfaction guarantee?',
            FAQ_9_TEXT: 'Our goal is to achieve the maximum satisfaction level of our customers. We can guarantee you 100% of quality in our services.',
            FAQ_9_LINK: 'Link to satisfaction guarantee',
            FAQ_10: 'May I purchase in Wineity if I do not reside in Spain?',
            FAQ_10_TEXT: 'You may shop at Wineity even if you do not reside in Spain. We have a multilingual team that can advise you if you do not speak Spanish. ',
            FAQ_10_TEXT_2: 'If what they are buying is wine and your delivery address is within the European Community, there will be no customs or duties added to the cost. If the delivery address is outside of the European Community, we will inform you of the procedure to follow for and which will entail the delivery costs.',
            FAQ_11: 'In what languages can I communicate with you?',
            FAQ_11_TEXT: 'We speak the following languages: spanish, catalan, english, german and french.',
            FAQ_12: 'How do you guarantee the protection of data?',
            FAQ_12_TEXT: 'Wineity is aware of the importance given to the users responsible for personal data treatment. Therefore, Wineity meets all legal data protection standards that are applicable and provides security mechanisms and procedures for the management of user data. Wineity meets the guidelines of the Organic Law 15/1999 of 13 December on the Protection of Personal Data, Royal Decree 1720/2007 of 21 December approving the Regulation implementing the Law and other regulations is approved force at the time, and seeks to ensure proper use and handling of personal user data.',
            FAQ_13: 'How can I delete my profile from Wineity or "Wineity VIP Club"?',
            FAQ_13_TEXT: 'If you want to delete your account, you can do so in the "my account" section. If you wish to unsubscribe and opt out from receiving special offers and other information from Wineity please contact us by sending an email to info@wineity.com',
            FAQ_13_TEXT_2: 'Wineity will not refund any amount if removed from our VIP services.',
            FAQ_14: 'In what format will I receive the bonus-experience?',
            FAQ_14_TEXT: 'You will receive your bonus experience in Word or PDF format. Simply print it out and present it at the corresponding winery or a restaurant.',
            FAQ_14_ALERT: 'BUT REMEMBER! BEFORE YOU HAVE TO ACTIVATE IT!',
            FAQ_15: 'What if I do not like the experience carried out?',
            FAQ_15_TEXT: 'Wineity guarantees you the highest level of satisfaction. Although there may be times that are out of our control. If this happens please contact us and please inform us the bad experience and we will try to put all our means so that it does not happen again.',
            FAQ_16: 'What technical expertise or specific knowledge does the Wineity team have?',
            FAQ_16_TEXT: 'Wineity is a professional team of sumelliers with specific knowledge in the world of wine. After 15 years of experience in sumellier, our multidisciplinary team can guide you and provide you with better and more personalized service according to the experience you want to live.',

  });

  $translateProvider.preferredLanguage('es');
});
