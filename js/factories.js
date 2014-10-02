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

angular.module('PL.factories', [])
//=================================================
// Factory EMT
// - Paradas
// - itinerarios
// - Lineas
//=================================================
.factory('EMT', function(){
	var paradas = [
	{id:615, nombre:"Sant Vicenç de Paül, 71", lat:39.59400939941406, lng:2.653588056564331, otras:["12"], clicks:0},
	{id:101, nombre:"Marquès de la Sènia, 11", lat:39.56966018676758, lng:2.6323230266571045, otras:["3","20","46"], clicks:0},
	{id:58, nombre:"Marquès de la Sènia, 12", lat:39.56969451904297, lng:2.632112979888916, otras:["3","20","46"], clicks:0},
	{id:1103, nombre:"Ctra. Sineu", lat:39.578407287597656, lng:2.7085320949554443, otras:["28"], clicks:0},
	{id:1094, nombre:"Hort municipal", lat:39.621246337890625, lng:2.671605110168457, otras:["11"], clicks:0},
	{id:14, nombre:"Club de Mar", lat:39.554420471191406, lng:2.6235098838806152, otras:["1"], clicks:0},
	{id:15, nombre:"Port de Palma (Estació Marítima)", lat:39.55234146118164, lng:2.6236839294433594, otras:["1","41"], clicks:0},
	{id:6, nombre:"Porta de Sant Antoni", lat:39.571327209472656, lng:2.656018018722534, otras:["9"], clicks:0},
	{id:1104, nombre:"Son Espanyol", lat:39.635719299316406, lng:2.642204999923706, otras:["19"], clicks:0},
	{id:1105, nombre:"Son Espanyol", lat:39.635719299316406, lng:2.6421000957489014, otras:["19"], clicks:0},
	{id:1128, nombre:"Gran Via Asima, 22", lat:39.60844421386719, lng:2.6700809001922607, otras:["34"], clicks:0},
	{id:272, nombre:"Camí Vell de Bunyola, 64", lat:39.60552215576172, lng:2.6781210899353027, otras:["10","11","34"], clicks:0},
	{id:751, nombre:"Can Valero, 12", lat:39.598533630371094, lng:2.636223077774048, otras:["6"], clicks:0},
	{id:1034, nombre:"Gran Via Asima, 38", lat:39.61083984375, lng:2.6653521060943604, otras:["34"], clicks:0},
	{id:763, nombre:"Can Valero, 5", lat:39.59809875488281, lng:2.6357600688934326, otras:["6"], clicks:0},
	{id:752, nombre:"Can Valero (Aula Balear)", lat:39.60096740722656, lng:2.6334269046783447, otras:["6"], clicks:0},
	{id:2, nombre:"Plaça d'Espanya", lat:39.57563781738281, lng:2.6544721126556396, otras:["1","6","7","8"], clicks:0},
	{id:295, nombre:"Plaça d'Espanya", lat:39.57593536376953, lng:2.6541318893432617, otras:["2","9","16","19"], clicks:0},
	{id:219, nombre:"Plaça d'Espanya", lat:39.5758171081543, lng:2.6542611122131348, otras:["3","5","41","46"], clicks:0},
	{id:598, nombre:"Plaça d'Espanya", lat:39.575782775878906, lng:2.653726100921631, otras:["1","5","8","10","24","41"], clicks:0},
	{id:455, nombre:"Plaça d'Espanya", lat:39.575618743896484, lng:2.6539130210876465, otras:["15","25","30","50"], clicks:0},
	{id:456, nombre:"Alexandre Rosselló, 5", lat:39.5718879699707, lng:2.656574010848999, otras:["1","15","19","23","25","30","41","50"], clicks:0},
	{id:865, nombre:"Camí de Gènova, 43", lat:39.57317352294922, lng:2.615968942642212, otras:["46"], clicks:0},
	{id:241, nombre:"Camí de Son Rapinya, 29", lat:39.5826530456543, lng:2.6211678981781006, otras:["7"], clicks:0},
	{id:273, nombre:"Santiago Álvarez, 8", lat:39.60531997680664, lng:2.6768290996551514, otras:["10","11","34"], clicks:0},
	{id:616, nombre:"Sant Vicenç de Paül, 39", lat:39.59362030029297, lng:2.650585889816284, otras:["12"], clicks:0},
	{id:530, nombre:"Joan Mascaró i Fornés, 95", lat:39.61003494262695, lng:2.631993055343628, otras:["16"], clicks:0},
	{id:269, nombre:"Camí de na Cerdana, 22", lat:39.608253479003906, lng:2.6789228916168213, otras:["11"], clicks:0},
	{id:505, nombre:"Joan Mascaró i Fornés, 110", lat:39.607704162597656, lng:2.6333680152893066, otras:["16"], clicks:0},
	{id:534, nombre:"Joan Mascaró i Fornés, 27", lat:39.5991096496582, lng:2.638585090637207, otras:["16"], clicks:0},
	{id:139, nombre:"Camí dels Reis, 83", lat:39.56597137451172, lng:2.6016080379486084, otras:["46"], clicks:0},
	{id:551, nombre:"Sant Vicenç de Paül, 20", lat:39.592872619628906, lng:2.6467459201812744, otras:["19","33"], clicks:0},
	{id:220, nombre:"Indústria, 8", lat:39.573646545410156, lng:2.63995099067688, otras:["7"], clicks:0},
	{id:118, nombre:"Aragó, 184", lat:39.58547592163086, lng:2.672903060913086, otras:["3","16"], clicks:0},
	{id:913, nombre:"Salvador Dalí, 54", lat:39.584468841552734, lng:2.6342709064483643, otras:["29"], clicks:0},
	{id:192, nombre:"Arquebisbe Aspàreg, 5", lat:39.575111389160156, lng:2.6650350093841553, otras:["5","24","28"], clicks:0},
	{id:163, nombre:"F. Vidal i Sureda, 74 (Residència Bonanova)", lat:39.559791564941406, lng:2.6100358963012695, otras:["46"], clicks:0},
	{id:489, nombre:"Florència, 14 (Son Xigala)", lat:39.594329833984375, lng:2.6121249198913574, otras:["7"], clicks:0},
	{id:289, nombre:"Arxiduc Lluís Salvador, 89", lat:39.5848388671875, lng:2.6574299335479736, otras:["11"], clicks:0},
	{id:240, nombre:"Camí de Son Rapinya, 35", lat:39.58591079711914, lng:2.6169700622558594, otras:["7"], clicks:0},
	{id:175, nombre:"F. Vidal i Sureda, 21 (Hotel Valparaíso)", lat:39.55561065673828, lng:2.6207571029663086, otras:["46"], clicks:0},
	{id:648, nombre:"Avinguda de Son Verí, 3", lat:39.4966926574707, lng:2.7475669384002686, otras:["23"], clicks:0},
	{id:13, nombre:"Aragó, 271", lat:39.592594146728516, lng:2.68210506439209, otras:["3","34"], clicks:0},
	{id:392, nombre:"Tomàs Rul·lan, 60 (Son Gotleu)", lat:39.576839447021484, lng:2.6738169193267822, otras:["7"], clicks:0},
	{id:485, nombre:"Llaüt, 26 (Hotel Playa Golf)", lat:39.51651382446289, lng:2.7459709644317627, otras:["15","21","25"], clicks:0},
	{id:249, nombre:"Arxiduc Lluís Salvador, 46", lat:39.5805778503418, lng:2.654994010925293, otras:["11"], clicks:0},
	{id:990, nombre:"Ramón y Cajal, 14", lat:39.575294494628906, lng:2.641711950302124, otras:["5","41"], clicks:0},
	{id:9, nombre:"Passeig Marítim, 2", lat:39.56886291503906, lng:2.6339919567108154, otras:["1","41"], clicks:0},
	{id:394, nombre:"Reis Catòlics, 25", lat:39.57206344604492, lng:2.67067289352417, otras:["7"], clicks:0},
	{id:148, nombre:"Camí dels Reis, 38", lat:39.56410598754883, lng:2.6009089946746826, otras:["46"], clicks:0},
	{id:583, nombre:"Tomás Luis de Victoria, 6", lat:39.5851936340332, lng:2.665055990219116, otras:["29"], clicks:0},
	{id:799, nombre:"Av. Alexandre Rosselló, 9", lat:39.57215881347656, lng:2.6566081047058105, otras:["6","7","12","14"], clicks:0},
	{id:81, nombre:"Joan Miró, 145", lat:39.554935455322266, lng:2.623344898223877, otras:["3","20"], clicks:0},
	{id:1107, nombre:"Camí de Gènova, 1", lat:39.57219696044922, lng:2.61946702003479, otras:["46"], clicks:0},
	{id:669, nombre:"Camí de Son Ametler, 10", lat:39.58674621582031, lng:2.7315540313720703, otras:["14"], clicks:0},
	{id:376, nombre:"Camí de Passatemps, 113 (Son Sardina)", lat:39.62171173095703, lng:2.654860019683838, otras:["12"], clicks:0},
	{id:835, nombre:"Camí de Sant Jordi, 101", lat:39.556461334228516, lng:2.775135040283203, otras:["14"], clicks:0},
	{id:665, nombre:"Camí 140, 50", lat:39.62627410888672, lng:2.6694140434265137, otras:["11"], clicks:0},
	{id:372, nombre:"Camí de Passatemps, 60", lat:39.61827087402344, lng:2.655179977416992, otras:["12"], clicks:0},
	{id:528, nombre:"Joan Mascaró i Fornés, 139", lat:39.61454391479492, lng:2.6304080486297607, otras:["16"], clicks:0},
	{id:784, nombre:"Joan Miró, 299", lat:39.552608489990234, lng:2.5983669757843018, otras:["3","20","46"], clicks:0},
	{id:439, nombre:"Camí de Can Pastilla, 37 (Edifici Endesa)", lat:39.54921340942383, lng:2.700972080230713, otras:["15","28","30"], clicks:0},
	{id:144, nombre:"Camí de la Real, 56", lat:39.6300163269043, lng:2.639414072036743, otras:["9"], clicks:0},
	{id:506, nombre:"Joan Mascaró i Fornés, 95", lat:39.61015319824219, lng:2.6320149898529053, otras:["16"], clicks:0},
	{id:531, nombre:"Joan Mascaró i Fornés, 73", lat:39.607757568359375, lng:2.6332509517669678, otras:["16"], clicks:0},
	{id:611, nombre:"Sant Vicenç de Paül, 56", lat:39.59390640258789, lng:2.65310001373291, otras:["11","12"], clicks:0},
	{id:44, nombre:"Aragó, 135", lat:39.581298828125, lng:2.666646957397461, otras:["3","16"], clicks:0},
	{id:40, nombre:"Aragó, 224", lat:39.58937454223633, lng:2.677088975906372, otras:["3"], clicks:0},
	{id:182, nombre:"Mestre Chapí, 25", lat:39.58953094482422, lng:2.6827359199523926, otras:["5","24"], clicks:0},
	{id:535, nombre:"Joan Mascaró i Fornés, 16 (Centre hospitalari)", lat:39.5974006652832, lng:2.6404340267181396, otras:["16","29"], clicks:0},
	{id:339, nombre:"Maria Antònia Salvà, 24", lat:39.59732437133789, lng:2.6167330741882324, otras:["8"], clicks:0},
	{id:221, nombre:"Indústria, 44", lat:39.57561492919922, lng:2.6373329162597656, otras:["7"], clicks:0},
	{id:266, nombre:"Santiago Álvarez, 6", lat:39.6064338684082, lng:2.6757171154022217, otras:["10","11","34"], clicks:0},
	{id:60, nombre:"Joan Miró, 16", lat:39.56684112548828, lng:2.6269819736480713, otras:["3","20","46"], clicks:0},
	{id:61, nombre:"Joan Miró, 24", lat:39.5653076171875, lng:2.6264429092407227, otras:["3","20","46"], clicks:0},
	{id:119, nombre:"Aragó, 216", lat:39.587528228759766, lng:2.6751179695129395, otras:["3","16"], clicks:0},
	{id:191, nombre:"Arquebisbe Aspàreg, 61", lat:39.57640838623047, lng:2.6679630279541016, otras:["5","24","28"], clicks:0},
	{id:136, nombre:"Camí de Gènova, 100", lat:39.573726654052734, lng:2.6136019229888916, otras:["5","46"], clicks:0},
	{id:199, nombre:"Mestre Chapí, 13", lat:39.588924407958984, lng:2.6810390949249268, otras:["5","24"], clicks:0},
	{id:233, nombre:"Camí de Raixa, 11", lat:39.591331481933594, lng:2.5946619510650635, otras:["7"], clicks:0},
	{id:242, nombre:"Camí de Son Rapinya, 5", lat:39.5797004699707, lng:2.6253879070281982, otras:["7"], clicks:0},
	{id:1003, nombre:"Amílcar, 1 (S'Arenal)", lat:39.5062370300293, lng:2.7517778873443604, otras:["25"], clicks:0},
	{id:965, nombre:"Tomàs de Villanueva Cortès, 11", lat:39.587257385253906, lng:2.662343978881836, otras:["24","29"], clicks:0},
	{id:187, nombre:"Mare de Déu de Montserrat, 32", lat:39.582454681396484, lng:2.6739308834075928, otras:["5"], clicks:0},
	{id:250, nombre:"Arxiduc Lluís Salvador, 52", lat:39.58247375488281, lng:2.656161069869995, otras:["11"], clicks:0},
	{id:229, nombre:"Camí de Son Rapinya, 48", lat:39.588356018066406, lng:2.613032102584839, otras:["7"], clicks:0},
	{id:254, nombre:"Arxiduc Lluís Salvador, 148", lat:39.58806228637695, lng:2.6595799922943115, otras:["11"], clicks:0},
	{id:393, nombre:"Reis Catòlics, 89", lat:39.57579040527344, lng:2.66902494430542, otras:["7"], clicks:0},
	{id:90, nombre:"Joan Miró, 273", lat:39.553077697753906, lng:2.606534957885742, otras:["3","20","46"], clicks:0},
	{id:111, nombre:"Alexandre Rosselló, 27", lat:39.57450485229492, lng:2.6553969383239746, otras:["3","14","16","19","41"], clicks:0},
	{id:766, nombre:"Camí de la Real, 22", lat:39.61083221435547, lng:2.6420419216156006, otras:["9"], clicks:0},
	{id:1095, nombre:"Camí Salard, 12", lat:39.58802795410156, lng:2.679982900619507, otras:["24","34"], clicks:0},
	{id:69, nombre:"Joan Miró, 270 (Hotel Nixe)", lat:39.552730560302734, lng:2.6080970764160156, otras:["3","20","46"], clicks:0},
	{id:287, nombre:"Arxiduc Lluís Salvador, 139", lat:39.588096618652344, lng:2.6594290733337402, otras:["11"], clicks:0},
	{id:214, nombre:"Mare de Déu de Montserrat, 61", lat:39.58049392700195, lng:2.6762800216674805, otras:["5"], clicks:0},
	{id:907, nombre:"Pardo Bazán, 26", lat:39.59318161010742, lng:2.6145429611206055, otras:["7"], clicks:0},
	{id:31, nombre:"Passeig Marítim, 7", lat:39.568416595458984, lng:2.6322131156921387, otras:["1","41"], clicks:0},
	{id:96, nombre:"Joan Miró, 83", lat:39.55897521972656, lng:2.6243820190429688, otras:["3","20","46"], clicks:0},
	{id:100, nombre:"Marquès de la Sènia, 37", lat:39.56830978393555, lng:2.6297099590301514, otras:["3","20","46"], clicks:0},
	{id:373, nombre:"Camí de Passatemps, 76", lat:39.619117736816406, lng:2.6551289558410645, otras:["12"], clicks:0},
	{id:503, nombre:"Joan Mascaró i Fornés, 56", lat:39.60353088378906, lng:2.6356849670410156, otras:["16"], clicks:0},
	{id:536, nombre:"Capità Vila, 34", lat:39.57224655151367, lng:2.6651759147644043, otras:["28"], clicks:0},
	{id:364, nombre:"Alfons el Magnànim, 30", lat:39.58607864379883, lng:2.653139114379883, otras:["12","20"], clicks:0},
	{id:108, nombre:"Baró de Pinopar, 14", lat:39.57634735107422, lng:2.647749900817871, otras:["3","7","15","20","25","46"], clicks:0},
	{id:955, nombre:"Camí de Son Ametler, 36", lat:39.588294982910156, lng:2.7312920093536377, otras:["14"], clicks:0},
	{id:271, nombre:"Camí de na Cerdana, 17", lat:39.60918045043945, lng:2.6781270503997803, otras:["11"], clicks:0},
	{id:610, nombre:"Sant Vicenç de Paül, 37", lat:39.593467712402344, lng:2.650365114212036, otras:["12"], clicks:0},
	{id:507, nombre:"Joan Mascaró i Fornés, 146", lat:39.61288070678711, lng:2.6312549114227295, otras:["16"], clicks:0},
	{id:165, nombre:"Camí de Gènova, 60", lat:39.57335662841797, lng:2.6159679889678955, otras:["5","46"], clicks:0},
	{id:340, nombre:"Maria Antònia Salvà, 54", lat:39.600502014160156, lng:2.6153409481048584, otras:["8"], clicks:0},
	{id:788, nombre:"Camí de Passatemps, 123 (C. Esports)", lat:39.63557052612305, lng:2.6559219360351562, otras:["12"], clicks:0},
	{id:1065, nombre:"Camí de Son Toells, 17", lat:39.5516471862793, lng:2.596522092819214, otras:["20"], clicks:0},
	{id:532, nombre:"Joan Mascaró i Fornés, 57", lat:39.60586166381836, lng:2.634298086166382, otras:["16"], clicks:0},
	{id:267, nombre:"Santiago Álvarez, 1", lat:39.605220794677734, lng:2.676712989807129, otras:["10","11","34"], clicks:0},
	{id:769, nombre:"Camí de la Real, 30", lat:39.61812210083008, lng:2.639673948287964, otras:["9"], clicks:0},
	{id:39, nombre:"Aragó, 257", lat:39.59081268310547, lng:2.6791200637817383, otras:["3","34"], clicks:0},
	{id:348, nombre:"Camí de sa Vileta, 137", lat:39.593360900878906, lng:2.619678020477295, otras:["8"], clicks:0},
	{id:470, nombre:"Camí de Can Pastilla, 46 (Edifici Endesa)", lat:39.54847717285156, lng:2.701859951019287, otras:["15","28","30"], clicks:0},
	{id:59, nombre:"Marquès de la Sènia, 40", lat:39.568199157714844, lng:2.62931489944458, otras:["3","20","46"], clicks:0},
	{id:316, nombre:"Camí Nou, 45", lat:39.60592269897461, lng:2.679202079772949, otras:["10","34"], clicks:0},
	{id:226, nombre:"Camí de Son Rapinya, 26", lat:39.58304977416992, lng:2.6210029125213623, otras:["7"], clicks:0},
	{id:64, nombre:"Joan Miró, 144", lat:39.5574836730957, lng:2.622853994369507, otras:["3","20"], clicks:0},
	{id:291, nombre:"Rosselló i Cazador, 18", lat:39.581539154052734, lng:2.654757022857666, otras:["11"], clicks:0},
	{id:381, nombre:"Camí de Passatemps, 1", lat:39.607879638671875, lng:2.655034065246582, otras:["12","34"], clicks:0},
	{id:1008, nombre:"Can Foradí, 42", lat:39.59547424316406, lng:2.6784470081329346, otras:["10"], clicks:0},
	{id:558, nombre:"Sant Vicenç de Paül, 9", lat:39.592857360839844, lng:2.6458609104156494, otras:["19","33"], clicks:0},
	{id:238, nombre:"Camí de Son Rapinya, 105", lat:39.58884811401367, lng:2.6120049953460693, otras:["7"], clicks:0},
	{id:251, nombre:"Arxiduc Lluís Salvador, 102", lat:39.58501052856445, lng:2.6577088832855225, otras:["11"], clicks:0},
	{id:230, nombre:"Camí de Son Rapinya, 74", lat:39.58940505981445, lng:2.6107089519500732, otras:["7"], clicks:0},
	{id:335, nombre:"Camí de sa Vileta, 56", lat:39.58973693847656, lng:2.624263048171997, otras:["8"], clicks:0},
	{id:186, nombre:"Pare Joan Crespí, 7", lat:39.58323669433594, lng:2.6733100414276123, otras:["5"], clicks:0},
	{id:487, nombre:"Trasimè, 2 (Hotel Hispania)", lat:39.51056671142578, lng:2.750401020050049, otras:["15","21","25"], clicks:0},
	{id:1077, nombre:"Camí de Son Toells, 33", lat:39.551788330078125, lng:2.593226909637451, otras:["20"], clicks:0},
	{id:377, nombre:"Camí de Passatemps, 73 (Son Sardina)", lat:39.61912536621094, lng:2.655035972595215, otras:["12"], clicks:0},
	{id:561, nombre:"Tomás Luis de Victoria, 11", lat:39.585304260253906, lng:2.665393114089966, otras:["29"], clicks:0},
	{id:11, nombre:"Passeig Marítim, 33", lat:39.56281280517578, lng:2.6271090507507324, otras:["1","41"], clicks:0},
	{id:91, nombre:"Joan Miró, 243 (Palau de Marivent)", lat:39.5511360168457, lng:2.610642910003662, otras:["3","20","46"], clicks:0},
	{id:623, nombre:"Arxiduc Lluís Salvador, 28", lat:39.57903289794922, lng:2.654036045074463, otras:["10","11","14","24"], clicks:0},
	{id:374, nombre:"Camí de Passatemps, 108", lat:39.62160110473633, lng:2.6549649238586426, otras:["12"], clicks:0},
	{id:201, nombre:"Camí dels Reis, 648", lat:39.61404800415039, lng:2.6752500534057617, otras:["11"], clicks:0},
	{id:416, nombre:"Tomàs Rul·lan, 2", lat:39.57143783569336, lng:2.6751930713653564, otras:["7"], clicks:0},
	{id:1058, nombre:"Camí Salard, 34", lat:39.58578872680664, lng:2.6810879707336426, otras:["24","34"], clicks:0},
	{id:504, nombre:"Joan Mascaró i Fornés, 84", lat:39.60581588745117, lng:2.6344261169433594, otras:["16"], clicks:0},
	{id:797, nombre:"Alfons el Magnànim, 94", lat:39.59485626220703, lng:2.65458607673645, otras:["12"], clicks:0},
	{id:417, nombre:"Tomàs Rul·lan, 30", lat:39.57355499267578, lng:2.675252914428711, otras:["7"], clicks:0},
	{id:500, nombre:"Joan Mascaró i Fornés, 16 (Centre hospitalari)", lat:39.59746551513672, lng:2.6404919624328613, otras:["16","29"], clicks:0},
	{id:370, nombre:"Camí de Passatemps, 10", lat:39.6107063293457, lng:2.6541919708251953, otras:["12","34"], clicks:0},
	{id:585, nombre:"Manuel Azaña, 16", lat:39.56890869140625, lng:2.664436101913452, otras:["28","29"], clicks:0},
	{id:46, nombre:"Aragó, 47", lat:39.57749557495117, lng:2.6609129905700684, otras:["3","16"], clicks:0},
	{id:508, nombre:"Joan Mascaró i Fornés, 182", lat:39.61494064331055, lng:2.630311965942383, otras:["16"], clicks:0},
	{id:529, nombre:"Joan Mascaró i Fornés, 115", lat:39.61286926269531, lng:2.63116192817688, otras:["16"], clicks:0},
	{id:268, nombre:"Camí Vell de Bunyola, 104", lat:39.606056213378906, lng:2.6786069869995117, otras:["10","11","34"], clicks:0},
	{id:331, nombre:"Francesc Martí i Mora, 74", lat:39.58405303955078, lng:2.6362409591674805, otras:["6","8"], clicks:0},
	{id:274, nombre:"José Salazar, 4", lat:39.60673904418945, lng:2.675050973892212, otras:["10","11","34"], clicks:0},
	{id:42, nombre:"Aragó, 185", lat:39.58549499511719, lng:2.672576904296875, otras:["3","16"], clicks:0},
	{id:345, nombre:"Maria Antònia Salvà, 54", lat:39.600528717041016, lng:2.6152470111846924, otras:["8"], clicks:0},
	{id:211, nombre:"Arquebisbe Aspàreg, 64", lat:39.57638931274414, lng:2.6682069301605225, otras:["5","24","28"], clicks:0},
	{id:533, nombre:"Joan Mascaró i Fornés, 43", lat:39.60335922241211, lng:2.635673999786377, otras:["16"], clicks:0},
	{id:768, nombre:"Camí de la Real, 55", lat:39.616424560546875, lng:2.6407079696655273, otras:["9"], clicks:0},
	{id:113, nombre:"Aragó, 20", lat:39.57450866699219, lng:2.6585519313812256, otras:["3","16"], clicks:0},
	{id:425, nombre:"Llaüt, 21 (Riu Palace)", lat:39.5183219909668, lng:2.7442660331726074, otras:["15","21","25"], clicks:0},
	{id:337, nombre:"Camí de sa Vileta, 130", lat:39.59353256225586, lng:2.619431972503662, otras:["8"], clicks:0},
	{id:122, nombre:"Aragó, 286", lat:39.592586517333984, lng:2.6825709342956543, otras:["3"], clicks:0},
	{id:290, nombre:"Arxiduc Lluís Salvador, 43", lat:39.58258056640625, lng:2.6560559272766113, otras:["11"], clicks:0},
	{id:63, nombre:"Joan Miró, 110", lat:39.55897521972656, lng:2.624277114868164, otras:["3","20","46"], clicks:0},
	{id:227, nombre:"Camí de Son Rapinya, 38", lat:39.585693359375, lng:2.617321014404297, otras:["7"], clicks:0},
	{id:307, nombre:"Camí Nou, 39", lat:39.605506896972656, lng:2.6792619228363037, otras:["10","34"], clicks:0},
	{id:147, nombre:"Camí dels Reis, 12", lat:39.56099319458008, lng:2.599553108215332, otras:["46"], clicks:0},
	{id:256, nombre:"Camí Vell de Bunyola, 8", lat:39.5911750793457, lng:2.6677169799804688, otras:["10"], clicks:0},
	{id:471, nombre:"Camí de Can Pastilla, 82", lat:39.53966522216797, lng:2.7129530906677246, otras:["15","28","30","31"], clicks:0},
	{id:92, nombre:"Joan Miró, 227", lat:39.55210876464844, lng:2.6135940551757812, otras:["3","20"], clicks:0},
	{id:1127, nombre:"Portopí (centre comercial)", lat:39.5538330078125, lng:2.622546911239624, otras:["1"], clicks:0},
	{id:66, nombre:"Joan Miró, 194", lat:39.551300048828125, lng:2.6190109252929688, otras:["3","20"], clicks:0},
	{id:363, nombre:"Alfons el Magnànim, 12", lat:39.58333969116211, lng:2.653326988220215, otras:["12","20"], clicks:0},
	{id:80, nombre:"Sindicat, 67", lat:39.57237243652344, lng:2.656024932861328, otras:["46"], clicks:0},
	{id:78, nombre:"Passeig d'Illetes (Hotel Bonanza)", lat:39.54106521606445, lng:2.5934300422668457, otras:["3"], clicks:0},
	{id:83, nombre:"Joan Maragall, 35", lat:39.56252670288086, lng:2.665397882461548, otras:["15","28","30"], clicks:0},
	{id:73, nombre:"Cala Nova", lat:39.55034637451172, lng:2.5985660552978516, otras:["3"], clicks:0},
	{id:51, nombre:"La Rambla", lat:39.573577880859375, lng:2.649266004562378, otras:["3","7","20","46"], clicks:0},
	{id:89, nombre:"Cala Major", lat:39.55343246459961, lng:2.6049389839172363, otras:["3","20","46"], clicks:0},
	{id:87, nombre:"Cala Nova", lat:39.55023956298828, lng:2.598602056503296, otras:["3"], clicks:0},
	{id:74, nombre:"Picasso, 30", lat:39.57390594482422, lng:2.624756097793579, otras:["29"], clicks:0},
	{id:85, nombre:"Passeig d'Illetes, 43", lat:39.53863525390625, lng:2.590941905975342, otras:["3"], clicks:0},
	{id:77, nombre:"Passeig d'Illetes, 16", lat:39.54237365722656, lng:2.5940499305725098, otras:["3"], clicks:0},
	{id:84, nombre:"Joan Maragall, 42", lat:39.56247329711914, lng:2.6660380363464355, otras:["15","28","30"], clicks:0},
	{id:76, nombre:"Passeig d'Illetes, 4", lat:39.54399490356445, lng:2.5955190658569336, otras:["3"], clicks:0},
	{id:54, nombre:"Jaume III,  22", lat:39.57243347167969, lng:2.6435670852661133, otras:["3","7","20","46"], clicks:0},
	{id:155, nombre:"Andrea Doria, 25", lat:39.57052230834961, lng:2.628709077835083, otras:["5","29","46"], clicks:0},
	{id:110, nombre:"Joan March, 7", lat:39.576805114746094, lng:2.652940034866333, otras:["3","9","16","46"], clicks:0},
	{id:124, nombre:"Verge de Lluc", lat:39.59549331665039, lng:2.6881020069122314, otras:["3"], clicks:0},
	{id:158, nombre:"Francesc Vidal i Sureda, 6", lat:39.5567626953125, lng:2.6205179691314697, otras:["46"], clicks:0},
	{id:132, nombre:"Andrea Doria, 6", lat:39.57048034667969, lng:2.6326329708099365, otras:["5","29","46"], clicks:0},
	{id:137, nombre:"Base Militar", lat:39.574012756347656, lng:2.609898090362549, otras:["5","46"], clicks:0},
	{id:120, nombre:"Son Fuster", lat:39.58932876586914, lng:2.677462100982666, otras:["3"], clicks:0},
	{id:154, nombre:"Andrea Doria, 41", lat:39.57101058959961, lng:2.6261799335479736, otras:["5","29","46"], clicks:0},
	{id:129, nombre:"La Feixina", lat:39.570213317871094, lng:2.6396310329437256, otras:["1","41"], clicks:0},
	{id:103, nombre:"Caro, 7", lat:39.57272720336914, lng:2.6395370960235596, otras:["3","5","7","20","46"], clicks:0},
	{id:128, nombre:"Passeig d'Illetes, 64", lat:39.53997039794922, lng:2.592190980911255, otras:["3"], clicks:0},
	{id:157, nombre:"Francesc Vidal i Sureda, 2", lat:39.55772399902344, lng:2.621735095977783, otras:["46"], clicks:0},
	{id:145, nombre:"Passeig d'Illetes, 9", lat:39.54309844970703, lng:2.59517502784729, otras:["3"], clicks:0},
	{id:104, nombre:"Jaume III, 21", lat:39.57234573364258, lng:2.643404006958008, otras:["2","3","7","20","46","50"], clicks:0},
	{id:125, nombre:"Antoni Maura, 8", lat:39.59689712524414, lng:2.6915080547332764, otras:["3"], clicks:0},
	{id:133, nombre:"Andrea Doria, 22", lat:39.570613861083984, lng:2.6290109157562256, otras:["5","29","46"], clicks:0},
	{id:126, nombre:"Antoni Maura, 42", lat:39.598873138427734, lng:2.6947720050811768, otras:["3"], clicks:0},
	{id:146, nombre:"Cementeri", lat:39.55820083618164, lng:2.5973799228668213, otras:["46"], clicks:0},
	{id:142, nombre:"Cementeri", lat:39.55727767944336, lng:2.596256971359253, otras:["46"], clicks:0},
	{id:109, nombre:"Passeig d'Illetes, 77", lat:39.53714370727539, lng:2.5898220539093018, otras:["3"], clicks:0},
	{id:151, nombre:"Base Militar", lat:39.57386779785156, lng:2.6103179454803467, otras:["46"], clicks:0},
	{id:224, nombre:"Dragonera, 14", lat:39.57891082763672, lng:2.628035068511963, otras:["7"], clicks:0},
	{id:213, nombre:"Indalecio Prieto, 44", lat:39.57854080200195, lng:2.672982931137085, otras:["5","24","28"], clicks:0},
	{id:212, nombre:"Indalecio Prieto, 14", lat:39.57711410522461, lng:2.6697869300842285, otras:["5","24","28"], clicks:0},
	{id:208, nombre:"Francesc Manuel de los Herreros, 2", lat:39.57343292236328, lng:2.6615500450134277, otras:["5","24"], clicks:0},
	{id:183, nombre:"Heura, 41", lat:39.58808135986328, lng:2.6792149543762207, otras:["5"], clicks:0},
	{id:207, nombre:"Nuredduna, 18", lat:39.57302474975586, lng:2.659980058670044, otras:["5","24"], clicks:0},
	{id:216, nombre:"Baladre, 2", lat:39.583370208740234, lng:2.676814079284668, otras:["5"], clicks:0},
	{id:170, nombre:"Francesc Vidal i Sureda, 115", lat:39.56050491333008, lng:2.6073429584503174, otras:["46"], clicks:0},
	{id:174, nombre:"Francesc Vidal i Sureda, 41", lat:39.55659484863281, lng:2.617655038833618, otras:["46"], clicks:0},
	{id:222, nombre:"Llibertat, 22", lat:39.57724380493164, lng:2.6342039108276367, otras:["7"], clicks:0},
	{id:166, nombre:"Francesc Vidal i Sureda", lat:39.5579948425293, lng:2.619602918624878, otras:["46"], clicks:0},
	{id:161, nombre:"Francesc Vidal i Sureda, 38", lat:39.55769729614258, lng:2.6163570880889893, otras:["46"], clicks:0},
	{id:195, nombre:"Grans magatzems", lat:39.57330322265625, lng:2.656322956085205, otras:["2","6","12","19","41","46"], clicks:0},
	{id:160, nombre:"Francesc Vidal i Sureda, 34", lat:39.55636978149414, lng:2.6180410385131836, otras:["46"], clicks:0},
	{id:193, nombre:"Francesc Manuel de los Herreros, 33", lat:39.57451248168945, lng:2.66367506980896, otras:["5","24"], clicks:0},
	{id:184, nombre:"Heura, 19", lat:39.586063385009766, lng:2.6768128871917725, otras:["5"], clicks:0},
	{id:189, nombre:"Indalecio Prieto, 27", lat:39.57799530029297, lng:2.6715760231018066, otras:["5","7","24","28"], clicks:0},
	{id:169, nombre:"Les Meravelles", lat:39.52193832397461, lng:2.7512099742889404, otras:["31"], clicks:0},
	{id:205, nombre:"Instituts", lat:39.57612228393555, lng:2.6451079845428467, otras:["1","5","6","8","41"], clicks:0},
	{id:257, nombre:"Gremi de Sabaters, 2", lat:39.59678268432617, lng:2.6714179515838623, otras:["11"], clicks:0},
	{id:245, nombre:"Barrera, 15", lat:39.57542037963867, lng:2.6330840587615967, otras:["7"], clicks:0},
	{id:283, nombre:"S'Aranjassa", lat:39.54094696044922, lng:2.775686025619507, otras:["31"], clicks:0},
	{id:234, nombre:"Hotel Son Vida", lat:39.59294509887695, lng:2.594722032546997, otras:["7"], clicks:0},
	{id:236, nombre:"Capocorb, 1", lat:39.590171813964844, lng:2.5982320308685303, otras:["7"], clicks:0},
	{id:258, nombre:"Gremi de Sabaters, 8", lat:39.59885025024414, lng:2.669625997543335, otras:["11"], clicks:0},
	{id:246, nombre:"Caro, 53", lat:39.57394790649414, lng:2.634442090988159, otras:["7"], clicks:0},
	{id:263, nombre:"Gran Via Asima, 25", lat:39.6084098815918, lng:2.6667959690093994, otras:["11","34"], clicks:0},
	{id:247, nombre:"Caro, 23", lat:39.57331466674805, lng:2.6370999813079834, otras:["7"], clicks:0},
	{id:282, nombre:"Cra. Llucmajor, 252", lat:39.54148483276367, lng:2.7727980613708496, otras:["31"], clicks:0},
	{id:248, nombre:"Carretera Militar, 203", lat:39.51070785522461, lng:2.7564499378204346, otras:["31"], clicks:0},
	{id:244, nombre:"Barrera, 35", lat:39.57720947265625, lng:2.6316308975219727, otras:["7"], clicks:0},
	{id:360, nombre:"Sindicat, 65", lat:39.5722541809082, lng:2.6556990146636963, otras:["8"], clicks:0},
	{id:351, nombre:"Son Moix", lat:39.5869255065918, lng:2.6268510818481445, otras:["6","8"], clicks:0},
	{id:297, nombre:"Eusebi Estada, 68", lat:39.58256912231445, lng:2.6610050201416016, otras:["10","24"], clicks:0},
	{id:343, nombre:"Gabriel Bestard, 7", lat:39.60364532470703, lng:2.614949941635132, otras:["8"], clicks:0},
	{id:312, nombre:"Canonge Antoni Sancho, 37", lat:39.59730529785156, lng:2.6788809299468994, otras:["10"], clicks:0},
	{id:322, nombre:"Son Oliva", lat:39.586647033691406, lng:2.663266897201538, otras:["10","24"], clicks:0},
	{id:353, nombre:"Pasqual Ribot, 81", lat:39.58211135864258, lng:2.6324079036712646, otras:["6","8"], clicks:0},
	{id:334, nombre:"Son Moix", lat:39.5870246887207, lng:2.6270248889923096, otras:["6","8"], clicks:0},
	{id:357, nombre:"Pasqual Ribot, 1", lat:39.57815170288086, lng:2.6392290592193604, otras:["6","8"], clicks:0},
	{id:356, nombre:"Pasqual Ribot, 25", lat:39.579010009765625, lng:2.6369659900665283, otras:["6","8"], clicks:0},
	{id:308, nombre:"Picasso, 50", lat:39.576072692871094, lng:2.6257450580596924, otras:["29"], clicks:0},
	{id:325, nombre:"Eusebi Estada, 45", lat:39.57918930053711, lng:2.6575279235839844, otras:["10","24"], clicks:0},
	{id:323, nombre:"Eusebi Estada, 109", lat:39.584716796875, lng:2.662450075149536, otras:["10","24"], clicks:0},
	{id:311, nombre:"Bartomeu Calatayud, 30", lat:39.59810256958008, lng:2.677222967147827, otras:["10"], clicks:0},
	{id:344, nombre:"Son Roca", lat:39.60197830200195, lng:2.6149709224700928, otras:["8"], clicks:0},
	{id:341, nombre:"Cap Enderrocat, 10", lat:39.60110092163086, lng:2.616431951522827, otras:["8"], clicks:0},
	{id:299, nombre:"Son Oliva", lat:39.58659362792969, lng:2.6634891033172607, otras:["10"], clicks:0},
	{id:298, nombre:"Eusebi Estada, 82", lat:39.58477020263672, lng:2.6626479625701904, otras:["10","24"], clicks:0},
	{id:328, nombre:"Miquel dels Sants Oliver", lat:39.5782356262207, lng:2.6435248851776123, otras:["6","8"], clicks:0},
	{id:407, nombre:"Manacor, 28", lat:39.5713996887207, lng:2.6618740558624268, otras:["7","14","18","29"], clicks:0},
	{id:888, nombre:"Avinguda d'Europa (Hotel Bahamas)", lat:39.49714279174805, lng:2.7553110122680664, otras:["23"], clicks:0},
	{id:876, nombre:"Cra. Manacor", lat:39.570533752441406, lng:2.6849300861358643, otras:["14"], clicks:0},
	{id:880, nombre:"Can Alegria", lat:39.531585693359375, lng:2.7318599224090576, otras:["23"], clicks:0},
	{id:881, nombre:"Martinet (centre escolar)", lat:39.53049087524414, lng:2.735168933868408, otras:["23","31"], clicks:0},
	{id:885, nombre:"Mar d'Aral (Hotel Lancaster)", lat:39.5205192565918, lng:2.747864007949829, otras:["23"], clicks:0},
	{id:402, nombre:"Cra. Militar 58", lat:39.53118896484375, lng:2.7663040161132812, otras:["31"], clicks:0},
	{id:884, nombre:"Mar d'Aral (Hotel Cosmopolitan)", lat:39.523460388183594, lng:2.7462949752807617, otras:["23"], clicks:0},
	{id:886, nombre:"Dragonera", lat:39.4990234375, lng:2.758316993713379, otras:["23"], clicks:0},
	{id:388, nombre:"31 de Desembre, 33", lat:39.58076858520508, lng:2.652327060699463, otras:["11","12","20"], clicks:0},
	{id:873, nombre:"Marola, 14", lat:39.59527587890625, lng:2.5915989875793457, otras:["7"], clicks:0},
	{id:403, nombre:"Manacor, 27", lat:39.57152557373047, lng:2.6595680713653564, otras:["7","14","18"], clicks:0},
	{id:892, nombre:"Cra. Militar, 231", lat:39.50786590576172, lng:2.754633903503418, otras:["21","23"], clicks:0},
	{id:401, nombre:"Manacor, 71", lat:39.57152557373047, lng:2.6646909713745117, otras:["7","14","18"], clicks:0},
	{id:386, nombre:"Cra. Valldemossa, 15", lat:39.58649444580078, lng:2.6506450176239014, otras:["12","20"], clicks:0},
	{id:390, nombre:"Joan March, 5", lat:39.57658004760742, lng:2.653080940246582, otras:["6","7","11","12","19"], clicks:0},
	{id:396, nombre:"Cra. Militar, 55", lat:39.53123474121094, lng:2.7664430141448975, otras:["31"], clicks:0},
	{id:874, nombre:"Turixant, 1", lat:39.589317321777344, lng:2.5937180519104004, otras:["7"], clicks:0},
	{id:889, nombre:"Avinguda d'Europa (Hotel Reina Isabel)", lat:39.4985466003418, lng:2.75437593460083, otras:["23"], clicks:0},
	{id:25, nombre:"Dic de l'Oest, 1", lat:39.54951477050781, lng:2.6189279556274414, otras:["1"], clicks:0},
	{id:32, nombre:"Indalecio Prieto, 48", lat:39.58047866821289, lng:2.6772119998931885, otras:["24","28"], clicks:0},
	{id:41, nombre:"Aragó, 209 (Son Fuster)", lat:39.58744812011719, lng:2.67466402053833, otras:["3","16"], clicks:0},
	{id:909, nombre:"Saridakis, 3", lat:39.552547454833984, lng:2.612346887588501, otras:["46"], clicks:0},
	{id:901, nombre:"Dragonera, 1", lat:39.50111389160156, lng:2.7586469650268555, otras:["23"], clicks:0},
	{id:17, nombre:"Museu de Sant Carles", lat:39.545326232910156, lng:2.619986057281494, otras:["1"], clicks:0},
	{id:36, nombre:"Antoni Maura, 29", lat:39.59691619873047, lng:2.691344976425171, otras:["3"], clicks:0},
	{id:37, nombre:"Verge de Lluc", lat:39.5953483581543, lng:2.6874380111694336, otras:["3"], clicks:0},
	{id:1, nombre:"Porta de Sant Antoni", lat:39.57164001464844, lng:2.6555631160736084, otras:["11","31"], clicks:0},
	{id:895, nombre:"Mar d'Aral", lat:39.525672912597656, lng:2.744180917739868, otras:["23"], clicks:0},
	{id:910, nombre:"Picasso, 62", lat:39.57866287231445, lng:2.626791000366211, otras:["29"], clicks:0},
	{id:902, nombre:"Dragonera, 2", lat:39.501121520996094, lng:2.758542060852051, otras:["23"], clicks:0},
	{id:19, nombre:"Passeig Mallorca, 38", lat:39.57499694824219, lng:2.644334077835083, otras:["1","2"], clicks:0},
	{id:3, nombre:"Comte de Sallent, 8", lat:39.57807922363281, lng:2.6509079933166504, otras:["2","3","7","15","20","41"], clicks:0},
	{id:23, nombre:"Museu de Sant Carles", lat:39.54553985595703, lng:2.620753049850464, otras:["1"], clicks:0},
	{id:43, nombre:"Can Capes", lat:39.582664489746094, lng:2.6685500144958496, otras:["3","16"], clicks:0},
	{id:16, nombre:"Dic de l'Oest, 2", lat:39.54964828491211, lng:2.618683099746704, otras:["1"], clicks:0},
	{id:20, nombre:"Passeig Mallorca, 18", lat:39.57300567626953, lng:2.642328977584839, otras:["1"], clicks:0},
	{id:4, nombre:"Biniamar, 10", lat:39.582191467285156, lng:2.680917978286743, otras:["24","28"], clicks:0},
	{id:34, nombre:"Son Bonet", lat:39.59990310668945, lng:2.6967010498046875, otras:["3"], clicks:0},
	{id:38, nombre:"Son Rutlan", lat:39.59390640258789, lng:2.6844050884246826, otras:["3"], clicks:0},
	{id:8, nombre:"Es Jonquet", lat:39.56925582885742, lng:2.6379361152648926, otras:["1","29","41","50"], clicks:0},
	{id:415, nombre:"Manacor, 138", lat:39.571197509765625, lng:2.6735639572143555, otras:["7","14"], clicks:0},
	{id:733, nombre:"Congre, 31", lat:39.53759002685547, lng:2.7084460258483887, otras:["52"], clicks:0},
	{id:934, nombre:"Jacint  Verdaguer", lat:39.58175277709961, lng:2.6624059677124023, otras:["29"], clicks:0},
	{id:497, nombre:"General Riera, 104", lat:39.58749008178711, lng:2.645922899246216, otras:["16","19","29","33"], clicks:0},
	{id:431, nombre:"Cra. Militar, 36", lat:39.53667068481445, lng:2.768321990966797, otras:["31"], clicks:0},
	{id:739, nombre:"Cra. Valldemossa", lat:39.592613220214844, lng:2.6480519771575928, otras:["12","20","29"], clicks:0},
	{id:45, nombre:"Els Hostalets", lat:39.57936096191406, lng:2.6638150215148926, otras:["3","16"], clicks:0},
	{id:398, nombre:"Son Tugores", lat:39.61079025268555, lng:2.6465039253234863, otras:["19","34"], clicks:0},
	{id:560, nombre:"Miguel Fleta, 2", lat:39.5836067199707, lng:2.6648659706115723, otras:["29"], clicks:0},
	{id:992, nombre:"Can Caimari, 22", lat:39.547908782958984, lng:2.6982429027557373, otras:["30"], clicks:0},
	{id:414, nombre:"Manacor, 90", lat:39.571224212646484, lng:2.6695709228515625, otras:["7","14"], clicks:0},
	{id:631, nombre:"Cap Enderrocat, 4", lat:39.47928237915039, lng:2.7378859519958496, otras:["23"], clicks:0},
	{id:410, nombre:"Puerto Rico", lat:39.56711196899414, lng:2.668623924255371, otras:["6","12"], clicks:0},
	{id:430, nombre:"Marbella (Apartaments Les Veles)", lat:39.52968978881836, lng:2.7312850952148438, otras:["15","21","25","31"], clicks:0},
	{id:427, nombre:"Marbella (Hotel Acapulco)", lat:39.52207946777344, lng:2.740262031555176, otras:["15","21","25"], clicks:0},
	{id:959, nombre:"Ullastre", lat:39.627357482910156, lng:2.6451730728149414, otras:["9"], clicks:0},
	{id:413, nombre:"Cra. Militar 36", lat:39.53673553466797, lng:2.7684500217437744, otras:["31"], clicks:0},
	{id:861, nombre:"Son Gibert", lat:39.5826416015625, lng:2.683432102203369, otras:["5","24","34"], clicks:0},
	{id:447, nombre:"Es Portitxol", lat:39.56190872192383, lng:2.6706860065460205, otras:["15","18","28","30"], clicks:0},
	{id:460, nombre:"Mussol, 30 (Son Xigala)", lat:39.59247970581055, lng:2.609492063522339, otras:["7"], clicks:0},
	{id:481, nombre:"Marbella, 32 (Hotel Cupido)", lat:39.525142669677734, lng:2.7367360591888428, otras:["15","21","25"], clicks:0},
	{id:496, nombre:"General Riera, 78", lat:39.585758209228516, lng:2.6462349891662598, otras:["16","19","33"], clicks:0},
	{id:468, nombre:"Cardenal Rossell, 36", lat:39.553367614746094, lng:2.693842887878418, otras:["15","18","28","30"], clicks:0},
	{id:449, nombre:"Joan Maragall, 25", lat:39.56422424316406, lng:2.661221981048584, otras:["1","15","23","29","30","31"], clicks:0},
	{id:493, nombre:"General Riera, 17", lat:39.581031799316406, lng:2.64713191986084, otras:["16","19","33"], clicks:0},
	{id:463, nombre:"Llucmajor, 56", lat:39.56010055541992, lng:2.6747450828552246, otras:["15","18","28","30"], clicks:0},
	{id:482, nombre:"Marbella, 42 (Hotel Acapulco)", lat:39.52192687988281, lng:2.740273952484131, otras:["15","21","25"], clicks:0},
	{id:443, nombre:"La Gruta", lat:39.557212829589844, lng:2.6857120990753174, otras:["15","18","28","30"], clicks:0},
	{id:498, nombre:"General Riera, 120", lat:39.5894889831543, lng:2.645807981491089, otras:["16","19","29","33"], clicks:0},
	{id:494, nombre:"General Riera, 30", lat:39.581077575683594, lng:2.6474111080169678, otras:["2","16","19","33"], clicks:0},
	{id:457, nombre:"Escola Graduada", lat:39.56951904296875, lng:2.656912088394165, otras:["1","15","19","23","25","30","31","41"], clicks:0},
	{id:490, nombre:"Cartago (Platja)", lat:39.50432586669922, lng:2.7517149448394775, otras:["21","23"], clicks:0},
	{id:586, nombre:"Pi i Margall, 12", lat:39.572265625, lng:2.6662709712982178, otras:["28","29"], clicks:0},
	{id:542, nombre:"General Riera, 35", lat:39.582984924316406, lng:2.6465280055999756, otras:["16","19","33"], clicks:0},
	{id:538, nombre:"General Riera, 113", lat:39.59206008911133, lng:2.6442229747772217, otras:["16","19","29","33"], clicks:0},
	{id:526, nombre:"Cra. Esporles, 43", lat:39.61943435668945, lng:2.6270499229431152, otras:["16"], clicks:0},
	{id:556, nombre:"Cra. Valldemossa, 66", lat:39.59391784667969, lng:2.647684097290039, otras:["19","20","29","33"], clicks:0},
	{id:510, nombre:"Cra. Esporles, 52", lat:39.619598388671875, lng:2.6270840167999268, otras:["16"], clicks:0},
	{id:568, nombre:"Argentina, 61", lat:39.57370376586914, lng:2.6405560970306396, otras:["41"], clicks:0},
	{id:515, nombre:"Cra. Esporles, 178", lat:39.630210876464844, lng:2.6189401149749756, otras:["16"], clicks:0},
	{id:519, nombre:"Cra. Esporles, 221", lat:39.63510513305664, lng:2.6161859035491943, otras:["16"], clicks:0},
	{id:544, nombre:"Pisa, 24 (Son Xigala)", lat:39.594852447509766, lng:2.6125071048736572, otras:["7"], clicks:0},
	{id:540, nombre:"General Riera, 77", lat:39.58803939819336, lng:2.645653009414673, otras:["16","19","29","33"], clicks:0},
	{id:511, nombre:"Cra. Esporles, 76", lat:39.621009826660156, lng:2.6264588832855225, otras:["16"], clicks:0},
	{id:569, nombre:"Argentina, 25", lat:39.57091522216797, lng:2.639604091644287, otras:["1","41"], clicks:0},
	{id:522, nombre:"Establiments", lat:39.626930236816406, lng:2.621217966079712, otras:["16"], clicks:0},
	{id:557, nombre:"Cra. Valldemossa", lat:39.593467712402344, lng:2.64762806892395, otras:["19","20","29","33"], clicks:0},
	{id:605, nombre:"Ambulatori", lat:39.508628845214844, lng:2.754573106765747, otras:["23"], clicks:0},
	{id:612, nombre:"Carles Riba, 12", lat:39.592987060546875, lng:2.6556200981140137, otras:["11"], clicks:0},
	{id:635, nombre:"Via Augusta, 11(Bellavista)", lat:39.48123550415039, lng:2.7329599857330322, otras:["23"], clicks:0},
	{id:653, nombre:"Cedre", lat:39.49107360839844, lng:2.7437150478363037, otras:["23"], clicks:0},
	{id:632, nombre:"Passeig de les Dames, 4", lat:39.47789001464844, lng:2.7320659160614014, otras:["23"], clicks:0},
	{id:639, nombre:"Ondategui, 115", lat:39.482669830322266, lng:2.7373969554901123, otras:["23"], clicks:0},
	{id:628, nombre:"Ondategui, 73", lat:39.484161376953125, lng:2.7367050647735596, otras:["23"], clicks:0},
	{id:640, nombre:"Ondategui, 69", lat:39.48424530029297, lng:2.736809015274048, otras:["23"], clicks:0},
	{id:637, nombre:"Cap Enderrocat, 4", lat:39.4792366027832, lng:2.7379438877105713, otras:["23"], clicks:0},
	{id:617, nombre:"Caracas", lat:39.56888961791992, lng:2.6672070026397705, otras:["6","12"], clicks:0},
	{id:660, nombre:"Cra. Militar", lat:39.51078796386719, lng:2.756380081176758, otras:["31"], clicks:0},
	{id:657, nombre:"Costa i Llobera", lat:39.49893569946289, lng:2.751594066619873, otras:["23"], clicks:0},
	{id:661, nombre:"Llimonera", lat:39.49102020263672, lng:2.740807056427002, otras:["23"], clicks:0},
	{id:650, nombre:"Cedre", lat:39.49108123779297, lng:2.743597984313965, otras:["23"], clicks:0},
	{id:627, nombre:"Platja Cala Blava", lat:39.48611831665039, lng:2.737349033355713, otras:["23"], clicks:0},
	{id:624, nombre:"Miramar (Hotel San Diego)", lat:39.50215530395508, lng:2.751384973526001, otras:["23"], clicks:0},
	{id:651, nombre:"Cedre", lat:39.48805618286133, lng:2.7410740852355957, otras:["23"], clicks:0},
	{id:626, nombre:"Ondategui", lat:39.486297607421875, lng:2.739511013031006, otras:["23"], clicks:0},
	{id:696, nombre:"Balneari, 7", lat:39.51798629760742, lng:2.7430570125579834, otras:["52"], clicks:0},
	{id:689, nombre:"Balneari, 2", lat:39.50791931152344, lng:2.7505741119384766, otras:["52"], clicks:0},
	{id:704, nombre:"Balneari, 14", lat:39.530799865722656, lng:2.728080987930298, otras:["52"], clicks:0},
	{id:682, nombre:"Balneari, 10", lat:39.524070739746094, lng:2.7362170219421387, otras:["52"], clicks:0},
	{id:693, nombre:"Balneari, 4", lat:39.51185989379883, lng:2.748408079147339, otras:["15","25","52"], clicks:0},
	{id:674, nombre:"Cardenal Rossell, 16", lat:39.55237579345703, lng:2.7005510330200195, otras:["18"], clicks:0},
	{id:706, nombre:"Bartomeu Riutort", lat:39.53538513183594, lng:2.719312906265259, otras:["52"], clicks:0},
	{id:762, nombre:"Aula Balear", lat:39.60051345825195, lng:2.633044958114624, otras:["6"], clicks:0},
	{id:771, nombre:"Balneari, 3", lat:39.509368896484375, lng:2.7498939037323, otras:["15","25","52"], clicks:0},
	{id:794, nombre:"Manacor, 385", lat:39.57139205932617, lng:2.7198660373687744, otras:["14"], clicks:0},
	{id:754, nombre:"Carrer Poima, 7", lat:39.593994140625, lng:2.633882999420166, otras:["6"], clicks:0},
	{id:812, nombre:"Esperanto, 6", lat:39.57181167602539, lng:2.71081805229187, otras:["14"], clicks:0},
	{id:818, nombre:"Ordi, 62", lat:39.578155517578125, lng:2.7147738933563232, otras:["14"], clicks:0},
	{id:761, nombre:"Poima, 26", lat:39.59707260131836, lng:2.630884885787964, otras:["6"], clicks:0},
	{id:780, nombre:"Mussol, 21", lat:39.592464447021484, lng:2.6075708866119385, otras:["7"], clicks:0},
	{id:753, nombre:"Carrer Poima, 17", lat:39.59561538696289, lng:2.6317780017852783, otras:["6"], clicks:0},
	{id:808, nombre:"Amadip", lat:39.588096618652344, lng:2.713253974914551, otras:["14"], clicks:0},
	{id:791, nombre:"Passatemps, 116", lat:39.622989654541016, lng:2.6547720432281494, otras:["12"], clicks:0},
	{id:817, nombre:"Margalida Monlau, 56", lat:39.577247619628906, lng:2.7131359577178955, otras:["14"], clicks:0},
	{id:805, nombre:"Cra. Manacor", lat:39.57064437866211, lng:2.702812910079956, otras:["14"], clicks:0},
	{id:813, nombre:"Manacor", lat:39.57129669189453, lng:2.657602071762085, otras:["18"], clicks:0},
	{id:796, nombre:"Caracas", lat:39.56916427612305, lng:2.6657040119171143, otras:["18"], clicks:0},
	{id:844, nombre:"Avinguda del Cid, 52", lat:39.57518768310547, lng:2.71712589263916, otras:["14","28"], clicks:0},
	{id:966, nombre:"Gabriel Maura, 19", lat:39.578067779541016, lng:2.6590240001678467, otras:["29"], clicks:0},
	{id:944, nombre:"Es Baluard", lat:39.57061004638672, lng:2.642108917236328, otras:["50"], clicks:0},
	{id:843, nombre:"Avinguda del Cid, 26", lat:39.573368072509766, lng:2.7176809310913086, otras:["14","28"], clicks:0},
	{id:825, nombre:"Manacor, 137", lat:39.57126998901367, lng:2.673506021499634, otras:["14"], clicks:0},
	{id:857, nombre:"Puig de la Mola, 21", lat:39.5866813659668, lng:2.730483055114746, otras:["14"], clicks:0},
	{id:847, nombre:"Andorra, 31", lat:39.57465362548828, lng:2.712167978286743, otras:["14"], clicks:0},
	{id:856, nombre:"S'Hostalot", lat:39.58938217163086, lng:2.7302749156951904, otras:["14"], clicks:0},
	{id:848, nombre:"Andorra", lat:39.57160186767578, lng:2.713473081588745, otras:["14"], clicks:0},
	{id:862, nombre:"Mimosa", lat:39.58357620239258, lng:2.6853840351104736, otras:["5","24","34"], clicks:0},
	{id:931, nombre:"Poble Espanyol", lat:39.57275390625, lng:2.6281731128692627, otras:["50"], clicks:0},
	{id:951, nombre:"Marbella, 61", lat:39.52377700805664, lng:2.738358974456787, otras:["15","21","25"], clicks:0},
	{id:964, nombre:"Miquel Arcas, 4", lat:39.587982177734375, lng:2.651895046234131, otras:["29"], clicks:0},
	{id:967, nombre:"Nicolau de Pacs, 3", lat:39.57405471801758, lng:2.660521984100342, otras:["29"], clicks:0},
	{id:968, nombre:"Monsenyor Palmer", lat:39.56947708129883, lng:2.634150981903076, otras:["29"], clicks:0},
	{id:828, nombre:"Ctra. Manacor Km 7", lat:39.57114791870117, lng:2.7360150814056396, otras:["14"], clicks:0},
	{id:834, nombre:"Sant Jordi", lat:39.5545768737793, lng:2.777388095855713, otras:["14"], clicks:0},
	{id:929, nombre:"Moll Vell", lat:39.56575012207031, lng:2.644007921218872, otras:["29","50"], clicks:0},
	{id:824, nombre:"Son Malferit", lat:39.57046890258789, lng:2.6802620887756348, otras:["14"], clicks:0},
	{id:833, nombre:"Carrer de Sant Jordi", lat:39.55630111694336, lng:2.775217056274414, otras:["14"], clicks:0},
	{id:548, nombre:"Centre comercial-Mercapalma", lat:39.55537414550781, lng:2.706510066986084, otras:["18","28"], clicks:0},
	{id:989, nombre:"Concha Espina, 5", lat:39.59449005126953, lng:2.6147921085357666, otras:["7"], clicks:0},
	{id:982, nombre:"Picasso, 21", lat:39.574039459228516, lng:2.6245920658111572, otras:["29"], clicks:0},
	{id:314, nombre:"Canonge Antoni Sancho, 1", lat:39.598148345947266, lng:2.680624008178711, otras:["10"], clicks:0},
	{id:127, nombre:"Alemanya, 6", lat:39.57815933227539, lng:2.6482648849487305, otras:["1","41"], clicks:0},
	{id:978, nombre:"Joan Ripoll i Trobat, 25", lat:39.58198928833008, lng:2.6278560161590576, otras:["29"], clicks:0},
	{id:135, nombre:"Andrea Doria, 62", lat:39.57200622558594, lng:2.622286081314087, otras:["5","29","46"], clicks:0},
	{id:973, nombre:"Jacint Verdaguer, 32", lat:39.580078125, lng:2.659980058670044, otras:["29"], clicks:0},
	{id:969, nombre:"Joan Maragall, 4", lat:39.56568145751953, lng:2.6573500633239746, otras:["29"], clicks:0},
	{id:683, nombre:"Balneari, 9", lat:39.522056579589844, lng:2.738550901412964, otras:["52"], clicks:0},
	{id:981, nombre:"Av. d'Alemanya, 3", lat:39.577999114990234, lng:2.648545026779175, otras:["1","3","5","7","41","46"], clicks:0},
	{id:972, nombre:"Josep Darder, 5", lat:39.578495025634766, lng:2.6637260913848877, otras:["29"], clicks:0},
	{id:676, nombre:"Balneari, 15", lat:39.532989501953125, lng:2.723849058151245, otras:["52"], clicks:0},
	{id:986, nombre:"Pl. de la Reina", lat:39.56967544555664, lng:2.6463279724121094, otras:["2","15"], clicks:0},
	{id:939, nombre:"Castell de Bellver", lat:39.56278610229492, lng:2.619180917739868, otras:["50"], clicks:0},
	{id:86, nombre:"Cra. Andratx (Hotel Maricel)", lat:39.54755401611328, lng:2.596266031265259, otras:["3"], clicks:0},
	{id:167, nombre:"Saridakis, 53", lat:39.558692932128906, lng:2.607295036315918, otras:["46"], clicks:0},
	{id:153, nombre:"Son Dureta", lat:39.571754455566406, lng:2.622683048248291, otras:["5","29","46"], clicks:0},
	{id:162, nombre:"Francesc Vidal i Sureda, 56", lat:39.55802917480469, lng:2.613339900970459, otras:["46"], clicks:0},
	{id:171, nombre:"La Bonanova", lat:39.55960464477539, lng:2.6101999282836914, otras:["46"], clicks:0},
	{id:99, nombre:"General Ricardo Ortega, 40", lat:39.56938171386719, lng:2.6625471115112305, otras:["6","12"], clicks:0},
	{id:123, nombre:"Son Rutlan", lat:39.593753814697266, lng:2.6846160888671875, otras:["3"], clicks:0},
	{id:56, nombre:"Comte de Barcelona, 24", lat:39.5736083984375, lng:2.6388449668884277, otras:["3","5","20","46"], clicks:0},
	{id:35, nombre:"Antoni Maura, 73", lat:39.59880065917969, lng:2.694387912750244, otras:["3"], clicks:0},
	{id:55, nombre:"Catalunya, 2", lat:39.5728874206543, lng:2.6411659717559814, otras:["3","20","46"], clicks:0},
	{id:112, nombre:"Passeig d'Illetes, 62", lat:39.53856658935547, lng:2.592082977294922, otras:["3"], clicks:0},
	{id:173, nombre:"Francesc Vidal i Sureda, 51", lat:39.55769729614258, lng:2.6162519454956055, otras:["46"], clicks:0},
	{id:168, nombre:"Saridakis, 54", lat:39.5590705871582, lng:2.6072471141815186, otras:["46"], clicks:0},
	{id:93, nombre:"Passeig d'Illetes, 57 (platja)", lat:39.53618621826172, lng:2.589268922805786, otras:["3"], clicks:0},
	{id:107, nombre:"La Rambla", lat:39.57328414916992, lng:2.650001049041748, otras:["3","20","46"], clicks:0},
	{id:48, nombre:"Grans magatzems", lat:39.57305908203125, lng:2.6566150188446045, otras:["7","9","10","14","16","24"], clicks:0},
	{id:27, nombre:"Club de Mar", lat:39.55466079711914, lng:2.624311923980713, otras:["1","41"], clicks:0},
	{id:196, nombre:"Cra. Militar", lat:39.527400970458984, lng:2.7641639709472656, otras:["31"], clicks:0},
	{id:261, nombre:"Cra. Militar, 161", lat:39.5133056640625, lng:2.7581160068511963, otras:["31"], clicks:0},
	{id:342, nombre:"Cap de Formentor, 10", lat:39.60346221923828, lng:2.6173160076141357, otras:["8"], clicks:0},
	{id:209, nombre:"Francesc Manuel de los Herreros, 30", lat:39.574424743652344, lng:2.6637799739837646, otras:["5","24"], clicks:0},
	{id:215, nombre:"Jeroni Boscana, 24", lat:39.58277130126953, lng:2.6749539375305176, otras:["5"], clicks:0},
	{id:203, nombre:"Passeig Mallorca, 7", lat:39.57349395751953, lng:2.6421520709991455, otras:["1","5","41"], clicks:0},
	{id:276, nombre:"Gremi de Boters, 37", lat:39.60926055908203, lng:2.671264886856079, otras:["11"], clicks:0},
	{id:194, nombre:"Francesc Manuel de los Herreros, 3", lat:39.573524475097656, lng:2.661432981491089, otras:["5","24"], clicks:0},
	{id:324, nombre:"Eusebi Estada, 93", lat:39.5828742980957, lng:2.6610729694366455, otras:["10","24"], clicks:0},
	{id:309, nombre:"Centre de Salut", lat:39.60047149658203, lng:2.680171012878418, otras:["10"], clicks:0},
	{id:296, nombre:"Eusebi Estada, 40", lat:39.579830169677734, lng:2.6584908962249756, otras:["10","24"], clicks:0},
	{id:275, nombre:"Gremi de Tintorers, 10", lat:39.6076545715332, lng:2.6734399795532227, otras:["11"], clicks:0},
	{id:243, nombre:"Dragonera, 19", lat:39.57867431640625, lng:2.628222942352295, otras:["7"], clicks:0},
	{id:177, nombre:"Francesc Vidal i Sureda, 3", lat:39.55764389038086, lng:2.6219561100006104, otras:["46"], clicks:0},
	{id:547, nombre:"Aeroport - Arribades", lat:39.547149658203125, lng:2.7292630672454834, otras:["1","21"], clicks:0},
	{id:359, nombre:"Illes Balears, 3", lat:39.57087326049805, lng:2.6176469326019287, otras:["5"], clicks:0},
	{id:509, nombre:"Cra. Esporles, 26", lat:39.6174201965332, lng:2.628575086593628, otras:["16"], clicks:0},
	{id:444, nombre:"Llucmajor, 105", lat:39.558433532714844, lng:2.6816439628601074, otras:["15","18","28","30"], clicks:0},
	{id:428, nombre:"Marbella, 51 (Hotel Cupido)", lat:39.52537536621094, lng:2.736665964126587, otras:["15","21","25"], clicks:0},
	{id:435, nombre:"Octavi August,  60 (Hotel Linda)", lat:39.53792953491211, lng:2.717219114303589, otras:["15","21","28","30","31"], clicks:0},
	{id:362, nombre:"31 de Desembre, 34", lat:39.58074951171875, lng:2.652524948120117, otras:["12","20"], clicks:0},
	{id:469, nombre:"Cardenal Rossell, 90 (Coll d'en Rabassa)", lat:39.55125045776367, lng:2.6973090171813965, otras:["15","18","28","30"], clicks:0},
	{id:406, nombre:"Manacor, 2", lat:39.57131576538086, lng:2.6586380004882812, otras:["7","14"], clicks:0},
	{id:464, nombre:"Llucmajor, 100", lat:39.559181213378906, lng:2.6782419681549072, otras:["15","18","28","30"], clicks:0},
	{id:389, nombre:"31 de Desembre, 13", lat:39.57876968383789, lng:2.6522319316864014, otras:["11","12","20"], clicks:0},
	{id:499, nombre:"General Riera, 142", lat:39.59224319458008, lng:2.6444079875946045, otras:["16","19","29","33"], clicks:0},
	{id:549, nombre:"Mussol, 7 (Son Xigala)", lat:39.5929069519043, lng:2.6101651191711426, otras:["7"], clicks:0},
	{id:452, nombre:"Gabriel Alomar  1", lat:39.57099533081055, lng:2.657043933868408, otras:["1","2","6","12","15","19","23","30","41"], clicks:0},
	{id:495, nombre:"General Riera, 54", lat:39.583858489990234, lng:2.646559000015259, otras:["16","19","33"], clicks:0},
	{id:479, nombre:"Marbella, 10 (Apartaments Les Veles)", lat:39.529239654541016, lng:2.731729030609131, otras:["15","21","25","31"], clicks:0},
	{id:385, nombre:"Miquel Arcas", lat:39.588191986083984, lng:2.6521151065826416, otras:["12","20","29"], clicks:0},
	{id:462, nombre:"Es Portitxol", lat:39.56178283691406, lng:2.670639991760254, otras:["15","18","28","30"], clicks:0},
	{id:458, nombre:"Porta del Camp", lat:39.56634521484375, lng:2.656543016433716, otras:["1","15","23","25","29","30","31","41"], clicks:0},
	{id:527, nombre:"Cra. Esporles, 25", lat:39.61775207519531, lng:2.6281421184539795, otras:["16"], clicks:0},
	{id:677, nombre:"Balneari, 14", lat:39.53072738647461, lng:2.7279999256134033, otras:["52"], clicks:0},
	{id:686, nombre:"Balneari, 6", lat:39.51599884033203, lng:2.7449610233306885, otras:["52"], clicks:0},
	{id:714, nombre:"Saridakis", lat:39.55447006225586, lng:2.6109509468078613, otras:["46"], clicks:0},
	{id:543, nombre:"General Riera, 9", lat:39.57926940917969, lng:2.6481540203094482, otras:["9","16","19"], clicks:0},
	{id:539, nombre:"General Riera, 105", lat:39.5901985168457, lng:2.6454200744628906, otras:["16","19","29","33"], clicks:0},
	{id:636, nombre:"Via Augusta, 37", lat:39.478965759277344, lng:2.734178066253662, otras:["23"], clicks:0},
	{id:690, nombre:"Balneari, 1", lat:39.504966735839844, lng:2.7517709732055664, otras:["52"], clicks:0},
	{id:694, nombre:"Balneari, 5", lat:39.51390075683594, lng:2.7467830181121826, otras:["52"], clicks:0},
	{id:746, nombre:"Son Espases, 19", lat:39.61076736450195, lng:2.644745111465454, otras:["9"], clicks:0},
	{id:687, nombre:"Balneari, 5", lat:39.513893127441406, lng:2.7466790676116943, otras:["52"], clicks:0},
	{id:514, nombre:"Establiments", lat:39.62699508666992, lng:2.621299982070923, otras:["16"], clicks:0},
	{id:518, nombre:"Es Muntant", lat:39.63697814941406, lng:2.6160829067230225, otras:["16"], clicks:0},
	{id:567, nombre:"Rotonda de Can Moreno", lat:39.616844177246094, lng:2.646204948425293, otras:["19"], clicks:0},
	{id:563, nombre:"Cra. Manacor", lat:39.571075439453125, lng:2.7430479526519775, otras:["14"], clicks:0},
	{id:621, nombre:"Centre comercial", lat:39.594200134277344, lng:2.643256902694702, otras:["16","29"], clicks:0},
	{id:572, nombre:"Parc Bit", lat:39.637413024902344, lng:2.6336069107055664, otras:["19"], clicks:0},
	{id:750, nombre:"Monestir de la Real", lat:39.60249710083008, lng:2.641490936279297, otras:["9"], clicks:0},
	{id:523, nombre:"Cra. Esporles s/n", lat:39.62413787841797, lng:2.6242051124572754, otras:["16"], clicks:0},
	{id:802, nombre:"Centre comercial", lat:39.555145263671875, lng:2.7055439949035645, otras:["18","28"], clicks:0},
	{id:729, nombre:"San Francisco de Sales, 97", lat:39.592262268066406, lng:2.6573588848114014, otras:["11"], clicks:0},
	{id:815, nombre:"Esperanto, 30", lat:39.57247543334961, lng:2.71445894241333, otras:["14"], clicks:0},
	{id:725, nombre:"Gremi de Sabaters, 20", lat:39.600215911865234, lng:2.668442964553833, otras:["11"], clicks:0},
	{id:911, nombre:"Joan Ripoll i Trobat, 32", lat:39.58163070678711, lng:2.6275670528411865, otras:["29"], clicks:0},
	{id:887, nombre:"Dragonera, 22", lat:39.49876022338867, lng:2.7581779956817627, otras:["23"], clicks:0},
	{id:950, nombre:"Marbella, 36", lat:39.52347183227539, lng:2.738593101501465, otras:["15","21","25"], clicks:0},
	{id:928, nombre:"Porta del Camp", lat:39.565425872802734, lng:2.6564550399780273, otras:["50"], clicks:0},
	{id:790, nombre:"Sa Garriga", lat:39.63583755493164, lng:2.6610240936279297, otras:["12"], clicks:0},
	{id:804, nombre:"Cra. Manacor", lat:39.57083511352539, lng:2.702601909637451, otras:["14","28"], clicks:0},
	{id:822, nombre:"Bartomeu Riutort", lat:39.53445053100586, lng:2.7212250232696533, otras:["52"], clicks:0},
	{id:830, nombre:"Cra. Manacor Km 7,8", lat:39.5682258605957, lng:2.7538740634918213, otras:["14"], clicks:0},
	{id:914, nombre:"Cementeri", lat:39.58598709106445, lng:2.640947103500366, otras:["29"], clicks:0},
	{id:898, nombre:"Can Alegria", lat:39.531639099121094, lng:2.731790065765381, otras:["23"], clicks:0},
	{id:829, nombre:"Vial de Servei", lat:39.56781005859375, lng:2.7677180767059326, otras:["14"], clicks:0},
	{id:958, nombre:"Jacint Verdaguer", lat:39.58123779296875, lng:2.6615118980407715, otras:["29"], clicks:0},
	{id:875, nombre:"Cra. Manacor", lat:39.57032775878906, lng:2.685153007507324, otras:["14"], clicks:0},
	{id:707, nombre:"Palangres", lat:39.53476333618164, lng:2.71689510345459, otras:["52"], clicks:0},
	{id:883, nombre:"Mar d'Aral", lat:39.525672912597656, lng:2.7440059185028076, otras:["23"], clicks:0},
	{id:476, nombre:"Manuela de los Herreros (Hotel el Cid)", lat:39.53542709350586, lng:2.7228500843048096, otras:["15","21","23","25","31"], clicks:0},
	{id:1015, nombre:"Son Hugo", lat:39.592681884765625, lng:2.661281108856201, otras:["24"], clicks:0},
	{id:1024, nombre:"Can Valero", lat:39.60088348388672, lng:2.6272659301757812, otras:["6"], clicks:0},
	{id:1018, nombre:"Ter, 21 (pol. Son Fuster)", lat:39.59368896484375, lng:2.6737730503082275, otras:["10","16"], clicks:0},
	{id:1033, nombre:"Gremi de Ferrers, 46", lat:39.603389739990234, lng:2.6732380390167236, otras:["10","11","34"], clicks:0},
	{id:1019, nombre:"Canonge Antoni Sancho, 44", lat:39.5966796875, lng:2.6774508953094482, otras:["10"], clicks:0},
	{id:1025, nombre:"Carrer Poima, 31", lat:39.5987548828125, lng:2.6293740272521973, otras:["6"], clicks:0},
	{id:426, nombre:"Mar Tirrena (Hotel Garonda)", lat:39.520164489746094, lng:2.742305040359497, otras:["15","21","25"], clicks:0},
	{id:1017, nombre:"Ter, 14 (pol. Son Fuster)", lat:39.59368133544922, lng:2.6738901138305664, otras:["10"], clicks:0},
	{id:1007, nombre:"Carrer Genil", lat:39.59543228149414, lng:2.6760358810424805, otras:["10"], clicks:0},
	{id:985, nombre:"Pl. Joan Carles I", lat:39.571163177490234, lng:2.646704912185669, otras:["2"], clicks:0},
	{id:993, nombre:"Sa Creu Vermella", lat:39.58281326293945, lng:2.7155470848083496, otras:["14"], clicks:0},
	{id:1004, nombre:"Avinguda del Cid", lat:39.585540771484375, lng:2.714242935180664, otras:["14"], clicks:0},
	{id:483, nombre:"Mar Tirrena (Hotel Garonda)", lat:39.519649505615234, lng:2.7427139282226562, otras:["15","21","25"], clicks:0},
	{id:1013, nombre:"Ed. Anselm Turmeda", lat:39.63745880126953, lng:2.6447250843048096, otras:["19"], clicks:0},
	{id:1063, nombre:"Noruega, 13", lat:39.55341720581055, lng:2.5950920581817627, otras:["20"], clicks:0},
	{id:1071, nombre:"Pompeu Fabra, 50", lat:39.58885955810547, lng:2.6546390056610107, otras:["29"], clicks:0},
	{id:1064, nombre:"Noruega, 1", lat:39.552574157714844, lng:2.5934560298919678, otras:["20"], clicks:0},
	{id:1072, nombre:"Pompeu Fabra, 7", lat:39.58863067626953, lng:2.6571199893951416, otras:["29"], clicks:0},
	{id:1068, nombre:"Son Oliver, 53", lat:39.55255889892578, lng:2.7738330364227295, otras:["31"], clicks:0},
	{id:300, nombre:"Cra. Militar, 22", lat:39.54122543334961, lng:2.770564079284668, otras:["31"], clicks:0},
	{id:1045, nombre:"Darwin (edifici Endesa)", lat:39.54957580566406, lng:2.7021000385284424, otras:["31"], clicks:0},
	{id:1041, nombre:"Depuradora", lat:39.546653747558594, lng:2.7682299613952637, otras:["31"], clicks:0},
	{id:1067, nombre:"Son Oliver", lat:39.55249786376953, lng:2.7738211154937744, otras:["31"], clicks:0},
	{id:897, nombre:"Martinet (centre escolar)", lat:39.53040313720703, lng:2.735227108001709, otras:["23","31"], clicks:0},
	{id:1048, nombre:"Joan Carles I", lat:39.57117462158203, lng:2.64703106880188, otras:["15","25"], clicks:0},
	{id:1040, nombre:"Depuradora", lat:39.54668045043945, lng:2.767893075942993, otras:["31"], clicks:0},
	{id:1044, nombre:"Darwin (edifici Endesa)", lat:39.54948806762695, lng:2.7019600868225098, otras:["31"], clicks:0},
	{id:1051, nombre:"Av. Alemanya, 7", lat:39.57785415649414, lng:2.6483941078186035, otras:["6","8","15","25"], clicks:0},
	{id:1043, nombre:"Darwin", lat:39.55233383178711, lng:2.702378988265991, otras:["31"], clicks:0},
	{id:440, nombre:"Cardenal Rossell, 65 (Coll d'en Rabassa)", lat:39.5515251159668, lng:2.69643497467041, otras:["15","18","28","30"], clicks:0},
	{id:1085, nombre:"Gremi de Sabaters", lat:39.60353088378906, lng:2.6655619144439697, otras:["11"], clicks:0},
	{id:1084, nombre:"Mallol, 107", lat:39.597564697265625, lng:2.681523084640503, otras:["34"], clicks:0},
	{id:1083, nombre:"Mallol", lat:39.593082427978516, lng:2.6824870109558105, otras:["34"], clicks:0},
	{id:279, nombre:"Gremi de Sabaters, 66", lat:39.607486724853516, lng:2.6621060371398926, otras:["11"], clicks:0},
	{id:1081, nombre:"Mallol, 33", lat:39.598106384277344, lng:2.6811599731445312, otras:["34"], clicks:0},
	{id:1079, nombre:"CIS de Mallorca", lat:39.56652069091797, lng:2.6859729290008545, otras:["24"], clicks:0},
	{id:1075, nombre:"Son Espases Consultes", lat:39.60711669921875, lng:2.6437270641326904, otras:["6","20","29"], clicks:0},
	{id:1093, nombre:"Alber, 64", lat:39.58230209350586, lng:2.6778790950775146, otras:["5"], clicks:0},
	{id:304, nombre:"Gran Via Asima", lat:39.6021728515625, lng:2.6722419261932373, otras:["11"], clicks:0},
	{id:1080, nombre:"Son Cladera", lat:39.60040283203125, lng:2.6806840896606445, otras:["34"], clicks:0},
	{id:1076, nombre:"Son Espases Consultes", lat:39.60695266723633, lng:2.64384388923645, otras:["33","34"], clicks:0},
	{id:545, nombre:"Son Xigala (Ambulatori)", lat:39.593017578125, lng:2.616547107696533, otras:["7"], clicks:0},
	{id:927, nombre:"Antoni Maura (Almudaina)", lat:39.56827163696289, lng:2.6462769508361816, otras:["50"], clicks:0},
	{id:896, nombre:"Sargàs", lat:39.528011322021484, lng:2.7371439933776855, otras:["23"], clicks:0},
	{id:474, nombre:"Bartomeu Riutort, 16 (Can Pastilla)", lat:39.53629684448242, lng:2.7172141075134277, otras:["15","21","28","30","31"], clicks:0},
	{id:116, nombre:"Aragó, 134", lat:39.581207275390625, lng:2.6667640209198, otras:["3","16"], clicks:0},
	{id:946, nombre:"Camí de Son Fangos", lat:39.53103256225586, lng:2.746476888656616, otras:["31"], clicks:0},
	{id:1087, nombre:"Antoni Marquès, 9", lat:39.57947540283203, lng:2.6511340141296387, otras:["20","33"], clicks:0},
	{id:607, nombre:"Camí dels Reis, 613 (Sa Indioteria)", lat:39.614253997802734, lng:2.6752259731292725, otras:["11"], clicks:0},
	{id:285, nombre:"Camí Vell de Bunyola, 7", lat:39.591209411621094, lng:2.6675660610198975, otras:["10"], clicks:0},
	{id:480, nombre:"Marbella, 22 (Apartaments Pil·larí)", lat:39.52666091918945, lng:2.734776020050049, otras:["15","21","25"], clicks:0},
	{id:29, nombre:"Passeig Marítim, 33", lat:39.562843322753906, lng:2.627737045288086, otras:["1","41"], clicks:0},
	{id:82, nombre:"Joan Miró, 166", lat:39.55430221557617, lng:2.622976064682007, otras:["3","20"], clicks:0},
	{id:159, nombre:"F. Vidal i Sureda (Hotel Valparaíso)", lat:39.555702209472656, lng:2.6204190254211426, otras:["46","50"], clicks:0},
	{id:1014, nombre:"Son Lledó", lat:39.63797378540039, lng:2.648171901702881, otras:["9","19"], clicks:0},
	{id:1049, nombre:"Poliesportiu", lat:39.55531692504883, lng:2.5971879959106445, otras:["46"], clicks:0},
	{id:863, nombre:"Baltasar Valentí", lat:39.586822509765625, lng:2.684145927429199, otras:["5","24","34"], clicks:0},
	{id:905, nombre:"Cra. de Sóller (presó)", lat:39.599815368652344, lng:2.6551198959350586, otras:["11","12"], clicks:0},
	{id:949, nombre:"Cra. Militar", lat:39.52314376831055, lng:2.7626309394836426, otras:["31"], clicks:0},
	{id:232, nombre:"Camí de Raixa", lat:39.590396881103516, lng:2.598090887069702, otras:["7"], clicks:0},
	{id:953, nombre:"Camí de Son Fangos", lat:39.53109359741211, lng:2.746464967727661, otras:["31"], clicks:0},
	{id:383, nombre:"Alfons el Magnànim, 83", lat:39.59513854980469, lng:2.6543400287628174, otras:["11","12"], clicks:0},
	{id:114, nombre:"Aragó, 44", lat:39.57682800292969, lng:2.6602060794830322, otras:["3","16"], clicks:0},
	{id:140, nombre:"Camí dels Reis, 47", lat:39.56404113769531, lng:2.600816011428833, otras:["46"], clicks:0},
	{id:225, nombre:"Camí de Son Rapinya, 4", lat:39.57965850830078, lng:2.626004934310913, otras:["7"], clicks:0},
	{id:473, nombre:"Camí de Can Pastilla, 110 (Hotel Linda)", lat:39.53742980957031, lng:2.715639114379883, otras:["15","21","28","30","31","52"], clicks:0},
	{id:418, nombre:"Tomàs Rul·lan, 42", lat:39.57534408569336, lng:2.6745340824127197, otras:["7"], clicks:0},
	{id:141, nombre:"Camí dels Reis, 19", lat:39.56147003173828, lng:2.599666118621826, otras:["46"], clicks:0},
	{id:47, nombre:"Aragó, 25", lat:39.574649810791016, lng:2.658482074737549, otras:["3","5","16","24"], clicks:0},
	{id:619, nombre:"Camí 140", lat:39.61972427368164, lng:2.672287940979004, otras:["11"], clicks:0},
	{id:838, nombre:"Cra. Manacor km 8", lat:39.568294525146484, lng:2.753814935684204, otras:["14"], clicks:0},
	{id:302, nombre:"Camí de les Meravelles", lat:39.52817916870117, lng:2.757564067840576, otras:["31"], clicks:0},
	{id:1096, nombre:"Gran Via Asima, 21", lat:39.60685348510742, lng:2.6681671142578125, otras:["11","34"], clicks:0},
	{id:1097, nombre:"Gran Via Asima, 11", lat:39.6047248840332, lng:2.670006036758423, otras:["11","34"], clicks:0},
	{id:332, nombre:"Salvador Dalí, 5", lat:39.58450698852539, lng:2.6341309547424316, otras:["6","8","29"], clicks:0},
	{id:239, nombre:"Camí de Son Rapinya, 57", lat:39.587032318115234, lng:2.615391969680786, otras:["7"], clicks:0},
	{id:67, nombre:"Joan Miró, 248 (Palau de Marivent)", lat:39.551822662353516, lng:2.6116409301757812, otras:["3","20","46"], clicks:0},
	{id:1027, nombre:"Camí dels Reis (estadi futbol)", lat:39.589298248291016, lng:2.6254639625549316, otras:["6"], clicks:0},
	{id:1102, nombre:"Escola hoteleria", lat:39.642578125, lng:2.6453630924224854, otras:["19"], clicks:0},
	{id:188, nombre:"Indalecio Prieto, 35", lat:39.579917907714844, lng:2.675839900970459, otras:["5","24","28"], clicks:0},
	{id:700, nombre:"Balneari, 11", lat:39.5260124206543, lng:2.7340800762176514, otras:["52"], clicks:0},
	{id:736, nombre:"Carles Riba, 38", lat:39.59165954589844, lng:2.6580259799957275, otras:["11"], clicks:0},
	{id:705, nombre:"Balneari, 15", lat:39.53318786621094, lng:2.723673105239868, otras:["52"], clicks:0},
	{id:713, nombre:"Illes Balears, 115", lat:39.57197570800781, lng:2.612494945526123, otras:["5"], clicks:0},
	{id:678, nombre:"Balneari, 13", lat:39.529029846191406, lng:2.7304039001464844, otras:["52"], clicks:0},
	{id:695, nombre:"Balneari, 6", lat:39.51603317260742, lng:2.745054006576538, otras:["52"], clicks:0},
	{id:732, nombre:"Setze de Juliol, 85", lat:39.60824966430664, lng:2.6614739894866943, otras:["11"], clicks:0},
	{id:709, nombre:"Congre", lat:39.53658676147461, lng:2.7104990482330322, otras:["52"], clicks:0},
	{id:738, nombre:"Cra. Valldemossa, 34", lat:39.58958053588867, lng:2.6495931148529053, otras:["12","20","29"], clicks:0},
	{id:703, nombre:"Balneari, 13", lat:39.52906799316406, lng:2.730484962463379, otras:["52"], clicks:0},
	{id:699, nombre:"Balneari, 10", lat:39.52411651611328, lng:2.7363100051879883, otras:["52"], clicks:0},
	{id:465, nombre:"Llucmajor, 144", lat:39.55833435058594, lng:2.6816680431365967, otras:["15","18","28","30"], clicks:0},
	{id:728, nombre:"San Francisco de Sales, 72", lat:39.59072494506836, lng:2.6558289527893066, otras:["11"], clicks:0},
	{id:675, nombre:"Bartomeu Riutort", lat:39.53531265258789, lng:2.719290018081665, otras:["52"], clicks:0},
	{id:477, nombre:"Manuela de los Herreros (Hotel Java)", lat:39.533363342285156, lng:2.726349115371704, otras:["15","21","23","25","31"], clicks:0},
	{id:641, nombre:"Ondategui, 52", lat:39.48601150512695, lng:2.7378029823303223, otras:["23"], clicks:0},
	{id:716, nombre:"Saridakis, 47", lat:39.5570182800293, lng:2.6080610752105713, otras:["46"], clicks:0},
	{id:821, nombre:"Avinguda del Cid, 17", lat:39.572879791259766, lng:2.717729091644287, otras:["14","28"], clicks:0},
	{id:773, nombre:"Balneari, 4", lat:39.511905670166016, lng:2.748255968093872, otras:["52"], clicks:0},
	{id:1039, nombre:"Son Oliver, 128", lat:39.55332946777344, lng:2.7760069370269775, otras:["31"], clicks:0},
	{id:1108, nombre:"Verge de Lluc (centre de salut)", lat:39.594932556152344, lng:2.683422088623047, otras:["34"], clicks:0},
	{id:409, nombre:"Cra. Militar", lat:39.52714920043945, lng:2.7639551162719727, otras:["31"], clicks:0},
	{id:871, nombre:"Turixant, 9", lat:39.59156036376953, lng:2.590701103210449, otras:["7"], clicks:0},
	{id:691, nombre:"Balneari, 1", lat:39.50608444213867, lng:2.751638889312744, otras:["15"], clicks:0},
	{id:454, nombre:"La Rambla", lat:39.57344436645508, lng:2.6498489379882812, otras:["7","15","25","50"], clicks:0},
	{id:446, nombre:"Llucmajor, 36", lat:39.560970306396484, lng:2.6729838848114014, otras:["15","18","28","30"], clicks:0},
	{id:684, nombre:"Balneari, 8", lat:39.51994323730469, lng:2.7408509254455566, otras:["52"], clicks:0},
	{id:442, nombre:"Cardenal Rossell, 1", lat:39.55549621582031, lng:2.692017078399658, otras:["15","18","28","30"], clicks:0},
	{id:434, nombre:"Tramuntana, 9", lat:39.53849792480469, lng:2.7211849689483643, otras:["15","21","28","31"], clicks:0},
	{id:731, nombre:"Gremi de Sucrers", lat:39.60797882080078, lng:2.6575379371643066, otras:["11","34"], clicks:0},
	{id:806, nombre:"Balnearis 14-15", lat:39.53211975097656, lng:2.7254459857940674, otras:["52"], clicks:0},
	{id:422, nombre:"Grans magatzems", lat:39.5734977722168, lng:2.6560769081115723, otras:["1","15","23","30"], clicks:0},
	{id:429, nombre:"Marbella (Hotel Caballero)", lat:39.5269775390625, lng:2.734541893005371, otras:["15","21","25"], clicks:0},
	{id:737, nombre:"Joan Bonet, 1", lat:39.5893440246582, lng:2.6577110290527344, otras:["11"], clicks:0},
	{id:516, nombre:"Cra. Esporles, 186", lat:39.631927490234375, lng:2.6175789833068848, otras:["16"], clicks:0},
	{id:759, nombre:"Cementeri", lat:39.58646011352539, lng:2.6395699977874756, otras:["9"], clicks:0},
	{id:698, nombre:"Balneari, 9", lat:39.52210998535156, lng:2.738632917404175, otras:["52"], clicks:0},
	{id:451, nombre:"Gabriel Alomar, 29", lat:39.568016052246094, lng:2.6574079990386963, otras:["1","6","12","15","19","23","30","31","41"], clicks:0},
	{id:702, nombre:"Balneari, 12", lat:39.527915954589844, lng:2.731851100921631, otras:["52"], clicks:0},
	{id:400, nombre:"General Ricardo Ortega, 19", lat:39.5696907043457, lng:2.659925937652588, otras:["6","12"], clicks:0},
	{id:755, nombre:"Cementeri", lat:39.586116790771484, lng:2.6395249366760254, otras:["9"], clicks:0},
	{id:524, nombre:"Cra. Esporles, 105", lat:39.622833251953125, lng:2.6253890991210938, otras:["16"], clicks:0},
	{id:688, nombre:"Balneari, 3", lat:39.50933074951172, lng:2.749788999557495, otras:["52"], clicks:0},
	{id:745, nombre:"Son Espanyol", lat:39.63119125366211, lng:2.6462600231170654, otras:["9"], clicks:0},
	{id:520, nombre:"Cra. Esporles, 203", lat:39.631656646728516, lng:2.617661952972412, otras:["16"], clicks:0},
	{id:642, nombre:"Ondategui, 37", lat:39.48609924316406, lng:2.73970890045166, otras:["23"], clicks:0},
	{id:1073, nombre:"Pompeu Fabra, 20", lat:39.58876037597656, lng:2.6581099033355713, otras:["29"], clicks:0},
	{id:814, nombre:"Son Malferit", lat:39.57025146484375, lng:2.6805078983306885, otras:["14"], clicks:0},
	{id:893, nombre:"Mar d'Aral (Hotel Lancaster)", lat:39.520591735839844, lng:2.747968912124634, otras:["23"], clicks:0},
	{id:810, nombre:"Sindicat", lat:39.57252883911133, lng:2.6564080715179443, otras:["10"], clicks:0},
	{id:976, nombre:"Cementeri", lat:39.58609390258789, lng:2.6408300399780273, otras:["29"], clicks:0},
	{id:466, nombre:"La Gruta", lat:39.55717468261719, lng:2.6852469444274902, otras:["15","18","28","30"], clicks:0},
	{id:461, nombre:"Son Tugores", lat:39.609893798828125, lng:2.647404909133911, otras:["19","34"], clicks:0},
	{id:741, nombre:"Cra. Valldemossa", lat:39.58989334106445, lng:2.649148941040039, otras:["12","20","29"], clicks:0},
	{id:727, nombre:"Bartomeu Riutort", lat:39.53449630737305, lng:2.721318006515503, otras:["52"], clicks:0},
	{id:980, nombre:"Picasso, 41", lat:39.576133728027344, lng:2.625570058822632, otras:["29"], clicks:0},
	{id:646, nombre:"Costa i Llobera, 2", lat:39.49916076660156, lng:2.7513959407806396, otras:["23"], clicks:0},
	{id:820, nombre:"Avinguda del Cid, 37", lat:39.575355529785156, lng:2.716963052749634, otras:["14","28"], clicks:0},
	{id:723, nombre:"Jacint Verdaguer, 7", lat:39.57962417602539, lng:2.6591789722442627, otras:["29"], clicks:0},
	{id:908, nombre:"Saridakis, 8", lat:39.552574157714844, lng:2.612473964691162, otras:["46"], clicks:0},
	{id:767, nombre:"Son Porro", lat:39.614261627197266, lng:2.6414530277252197, otras:["9"], clicks:0},
	{id:971, nombre:"Josep Darder, 35", lat:39.57698440551758, lng:2.667970895767212, otras:["29"], clicks:0},
	{id:223, nombre:"Llibertat, 36", lat:39.57801055908203, lng:2.6316959857940674, otras:["7"], clicks:0},
	{id:715, nombre:"Saridakis, 42", lat:39.55686950683594, lng:2.6083180904388428, otras:["46"], clicks:0},
	{id:652, nombre:"Cedre", lat:39.48800277709961, lng:2.7411210536956787, otras:["23"], clicks:0},
	{id:459, nombre:"Joan Maragall, 18", lat:39.564231872558594, lng:2.6607680320739746, otras:["1","15","23","29","30","31"], clicks:0},
	{id:1101, nombre:"Escola hoteleria", lat:39.6427116394043, lng:2.6459219455718994, otras:["9","19"], clicks:0},
	{id:1046, nombre:"Darwin", lat:39.552406311035156, lng:2.7024950981140137, otras:["31"], clicks:0},
	{id:537, nombre:"Centre comercial", lat:39.593753814697266, lng:2.643317937850952, otras:["16","29"], clicks:0},
	{id:546, nombre:"Aeroport - Sortides", lat:39.54789733886719, lng:2.7302141189575195, otras:["1","21"], clicks:0},
	{id:793, nombre:"Manacor, 303", lat:39.57127380371094, lng:2.719970941543579, otras:["14"], clicks:0},
	{id:1062, nombre:"Andreu Ferret, 1", lat:39.55502700805664, lng:2.597235918045044, otras:["20"], clicks:0},
	{id:1038, nombre:"Son Oliver, 125", lat:39.55344772338867, lng:2.7756459712982178, otras:["31"], clicks:0},
	{id:860, nombre:"Biniamar", lat:39.582149505615234, lng:2.681442975997925, otras:["5","24","28"], clicks:0},
	{id:441, nombre:"Cardenal Rossell, 23", lat:39.55291748046875, lng:2.6944730281829834, otras:["15","18","28","30"], clicks:0},
	{id:680, nombre:"Balneari, 12", lat:39.52788162231445, lng:2.731745958328247, otras:["52"], clicks:0},
	{id:79, nombre:"Passeig d'Illetes, 36", lat:39.54022979736328, lng:2.591059923171997, otras:["3"], clicks:0},
	{id:866, nombre:"Pagell, 2", lat:39.534767150878906, lng:2.7106809616088867, otras:["52"], clicks:0},
	{id:354, nombre:"Pasqual Ribot, 41", lat:39.579994201660156, lng:2.635551929473877, otras:["6","8"], clicks:0},
	{id:807, nombre:"Balnearis 14-15", lat:39.53218078613281, lng:2.7255160808563232, otras:["52"], clicks:0},
	{id:432, nombre:"Manuela de los Herreros (Hotel Java)", lat:39.53352737426758, lng:2.726372003555298, otras:["15","21","23","25","31"], clicks:0},
	{id:1070, nombre:"Pompeu Fabra, 65", lat:39.58869552612305, lng:2.6546859741210938, otras:["29"], clicks:0},
	{id:156, nombre:"Andrea Doria, 7", lat:39.57045364379883, lng:2.6319580078125, otras:["5","29","46"], clicks:0},
	{id:870, nombre:"Turixant, 29", lat:39.59544372558594, lng:2.588593006134033, otras:["7"], clicks:0},
	{id:633, nombre:"Passeig de les Dames, 20", lat:39.47859573364258, lng:2.7290990352630615, otras:["23"], clicks:0},
	{id:760, nombre:"Quatre de novembre, 2", lat:39.594669342041016, lng:2.6314220428466797, otras:["6"], clicks:0},
	{id:613, nombre:"Oliveres", lat:39.4909553527832, lng:2.7407500743865967, otras:["23"], clicks:0},
	{id:816, nombre:"Ambulatori de Son Ferriol", lat:39.5744743347168, lng:2.7139270305633545, otras:["14"], clicks:0},
	{id:433, nombre:"Manuela de los Herreros (Hotel el Cid)", lat:39.53525161743164, lng:2.723607063293457, otras:["15","21","23","25","31"], clicks:0},
	{id:656, nombre:"Costa i Llobera", lat:39.497249603271484, lng:2.7509379386901855, otras:["23"], clicks:0},
	{id:692, nombre:"Balneari, 2", lat:39.50801086425781, lng:2.7506320476531982, otras:["15","25","52"], clicks:0},
	{id:513, nombre:"Cra.Esporles s/n", lat:39.62437057495117, lng:2.624109983444214, otras:["16"], clicks:0},
	{id:730, nombre:"Salvador Espriu, 9", lat:39.593990325927734, lng:2.6559879779815674, otras:["11"], clicks:0},
	{id:365, nombre:"San Francisco de Sales, 12", lat:39.58784484863281, lng:2.6531879901885986, otras:["12","20"], clicks:0},
	{id:681, nombre:"Balneari, 11", lat:39.52596664428711, lng:2.7340219020843506, otras:["52"], clicks:0},
	{id:512, nombre:"Cra. Esporles s/n", lat:39.62284469604492, lng:2.625493049621582, otras:["16"], clicks:0},
	{id:634, nombre:"Passeig de les Dames, 36", lat:39.480552673339844, lng:2.7303929328918457, otras:["23"], clicks:0},
	{id:138, nombre:"Passeig d'Illetes (Hotel Bonanza)", lat:39.540958404541016, lng:2.5934650897979736, otras:["3"], clicks:0},
	{id:378, nombre:"Pere Sans Garau, 6", lat:39.61751174926758, lng:2.6547179222106934, otras:["12","34"], clicks:0},
	{id:748, nombre:"Cra. Valldemossa  (Rotonda Can Moreno)", lat:39.616493225097656, lng:2.6455540657043457, otras:["9"], clicks:0},
	{id:450, nombre:"Gabriel Alomar, 39", lat:39.566375732421875, lng:2.6568920612335205, otras:["1","15","19","23","30","31","41"], clicks:0},
	{id:172, nombre:"Francesc Vidal i Sureda, 75", lat:39.55796813964844, lng:2.613607883453369, otras:["46"], clicks:0},
	{id:629, nombre:"Ondategui, 110", lat:39.48260498046875, lng:2.7373390197753906, otras:["23"], clicks:0},
	{id:963, nombre:"Guillem Forteza, 20", lat:39.587562561035156, lng:2.648858070373535, otras:["29"], clicks:0},
	{id:625, nombre:"Sant Bartomeu (Hotel Reina Isabel)", lat:39.49906921386719, lng:2.7543740272521973, otras:["23"], clicks:0},
	{id:117, nombre:"Can Capes", lat:39.58269119262695, lng:2.6688640117645264, otras:["3","16"], clicks:0},
	{id:517, nombre:"Cra. Esporles, 206", lat:39.635257720947266, lng:2.616209030151367, otras:["16"], clicks:0},
	{id:673, nombre:"Cardenal Rossell, 138", lat:39.55232238769531, lng:2.7006099224090576, otras:["18"], clicks:0},
	{id:900, nombre:"Cannes, 34", lat:39.50638198852539, lng:2.753079891204834, otras:["23"], clicks:0},
	{id:361, nombre:"31 de Desembre, 16", lat:39.578651428222656, lng:2.65244197845459, otras:["12"], clicks:0},
	{id:831, nombre:"Sa Casa Blanca", lat:39.56758117675781, lng:2.756484031677246, otras:["14"], clicks:0},
	{id:618, nombre:"Son Riera", lat:39.555973052978516, lng:2.7160749435424805, otras:["18"], clicks:0},
	{id:983, nombre:"Nous Jutjats", lat:39.57024383544922, lng:2.6556038856506348, otras:["2"], clicks:0},
	{id:445, nombre:"Llucmajor, 77", lat:39.55942153930664, lng:2.6770999431610107, otras:["15","18","28","30"], clicks:0},
	{id:164, nombre:"Francesc Vidal i Sureda, 115", lat:39.56067657470703, lng:2.6071910858154297, otras:["46"], clicks:0},
	{id:492, nombre:"Comte de Sallent ,14", lat:39.57816696166992, lng:2.650628089904785, otras:["1","5","6","8","9","16","19","33","46"], clicks:0},
	{id:197, nombre:"Instituts", lat:39.57642364501953, lng:2.6456069946289062, otras:["5","6","8","41"], clicks:0},
	{id:894, nombre:"Mar d'Aral (Hotel Cosmopolitan)", lat:39.5235595703125, lng:2.7463760375976562, otras:["23"], clicks:0},
	{id:525, nombre:"Cra. Esporles, 65", lat:39.62088394165039, lng:2.6264240741729736, otras:["16"], clicks:0},
	{id:399, nombre:"Cra. Militar, 19", lat:39.54119873046875, lng:2.770646095275879, otras:["31"], clicks:0},
	{id:176, nombre:"Francesc Vidal i Sureda, 11", lat:39.55678176879883, lng:2.620621919631958, otras:["46"], clicks:0},
	{id:697, nombre:"Balneari, 8", lat:39.52000045776367, lng:2.7409210205078125, otras:["52"], clicks:0},
	{id:722, nombre:"Miquel Fleta, 1", lat:39.58366012573242, lng:2.664807081222534, otras:["29"], clicks:0},
	{id:387, nombre:"Francesc Suau, 9", lat:39.58343505859375, lng:2.651789903640747, otras:["12","20"], clicks:0},
	{id:75, nombre:"Cra. Andratx (Hotel Maricel)", lat:39.54735565185547, lng:2.595592975616455, otras:["3"], clicks:0},
	{id:975, nombre:"Guillem Forteza, 27", lat:39.58769607543945, lng:2.6488800048828125, otras:["29"], clicks:0},
	{id:647, nombre:"Costa i Llobera, 20", lat:39.49734115600586, lng:2.750901937484741, otras:["23"], clicks:0},
	{id:185, nombre:"Heura, 8", lat:39.58464431762695, lng:2.6750619411468506, otras:["5"], clicks:0},
	{id:811, nombre:"Sant Jordi", lat:39.554691314697266, lng:2.7773990631103516, otras:["14","31"], clicks:0},
	{id:740, nombre:"Cra. Valldemossa, 55", lat:39.592586517333984, lng:2.6478888988494873, otras:["12","20","29"], clicks:0},
	{id:845, nombre:"Avinguda del Cid, 70", lat:39.576778411865234, lng:2.716641902923584, otras:["14","28"], clicks:0},
	{id:566, nombre:"Aeroport (Benzinera)", lat:39.546810150146484, lng:2.7240970134735107, otras:["1","21"], clicks:0},
	{id:391, nombre:"Les Meravelles", lat:39.52187728881836, lng:2.7512800693511963, otras:["31"], clicks:0},
	{id:71, nombre:"Cala Major", lat:39.55326843261719, lng:2.604811906814575, otras:["3","20","46"], clicks:0},
	{id:819, nombre:"Avinguda del Cid, 63", lat:39.57769775390625, lng:2.7162539958953857, otras:["14","28"], clicks:0},
	{id:134, nombre:"Andrea Doria, 42", lat:39.57090377807617, lng:2.62678599357605, otras:["5","29","46"], clicks:0},
	{id:467, nombre:"Cardenal Rossell, 1", lat:39.5556755065918, lng:2.6915509700775146, otras:["15","18","28","30"], clicks:0},
	{id:408, nombre:"Manacor, 70", lat:39.571258544921875, lng:2.6663460731506348, otras:["7","14","18"], clicks:0},
	{id:395, nombre:"Manacor, 107", lat:39.57140350341797, lng:2.6694180965423584, otras:["7","14"], clicks:0},
	{id:685, nombre:"Balneari, 7", lat:39.517948150634766, lng:2.742964029312134, otras:["52"], clicks:0},
	{id:521, nombre:"Cra. Esporles s/n", lat:39.629241943359375, lng:2.6196680068969727, otras:["16"], clicks:0},
	{id:764, nombre:"Monestir de la Real", lat:39.60253143310547, lng:2.6415600776672363, otras:["9"], clicks:0},
	{id:890, nombre:"Trencadors, 27", lat:39.50225830078125, lng:2.7538509368896484, otras:["23"], clicks:0},
	{id:837, nombre:"Sa Casa Blanca", lat:39.56766128540039, lng:2.7564139366149902, otras:["14"], clicks:0},
	{id:979, nombre:"Picasso, 61", lat:39.57880783081055, lng:2.626673936843872, otras:["29"], clicks:0},
	{id:604, nombre:"Cra. Militar, 165", lat:39.51333999633789, lng:2.7580230236053467, otras:["31"], clicks:0},
	{id:1124, nombre:"Genil, 32", lat:39.59738540649414, lng:2.677436113357544, otras:["16"], clicks:0},
	{id:1123, nombre:"Guadiana, 35", lat:39.594661712646484, lng:2.6775190830230713, otras:["16"], clicks:0},
	{id:1117, nombre:"Balanguera, 21", lat:39.5791130065918, lng:2.6415181159973145, otras:["2"], clicks:0},
	{id:1116, nombre:"Parc de Sa Riera", lat:39.58156204223633, lng:2.6437408924102783, otras:["2"], clicks:0},
	{id:1122, nombre:"Ter, 2", lat:39.59149169921875, lng:2.6778829097747803, otras:["16"], clicks:0},
	{id:781, nombre:"Mussol", lat:39.59236526489258, lng:2.606837034225464, otras:["7"], clicks:0},
	{id:541, nombre:"General Riera, 63", lat:39.585750579833984, lng:2.645944118499756, otras:["16","19","33"], clicks:0},
	{id:1125, nombre:"Ter, 1", lat:39.59123611450195, lng:2.677232027053833, otras:["16"], clicks:0},
	{id:475, nombre:"Xabec, 2 (Hotel Miraflores)", lat:39.537601470947266, lng:2.720421075820923, otras:["15","21","28","30","31"], clicks:0},
	{id:562, nombre:"Cra. Manacor", lat:39.5710563659668, lng:2.743211030960083, otras:["14"], clicks:0},
	{id:1106, nombre:"Camí de Gènova, 4", lat:39.57233810424805, lng:2.6196060180664062, otras:["5","46"], clicks:0},
	{id:350, nombre:"Camí de sa Vileta, 47", lat:39.589385986328125, lng:2.624439001083374, otras:["8"], clicks:0},
	{id:371, nombre:"Camí de Passatemps, 28", lat:39.6152229309082, lng:2.654520034790039, otras:["12","34"], clicks:0},
	{id:974, nombre:"Tomàs de Villanueva Cortès, 14", lat:39.58740234375, lng:2.6623899936676025, otras:["24","29"], clicks:0},
	{id:1059, nombre:"Camí Salard, 60", lat:39.583126068115234, lng:2.6823699474334717, otras:["24","34"], clicks:0},
	{id:330, nombre:"Francesc Martí i Mora, 34", lat:39.58167266845703, lng:2.638256072998047, otras:["6","8"], clicks:0},
	{id:970, nombre:"Adrià Ferran, 36", lat:39.57558059692383, lng:2.6681180000305176, otras:["29"], clicks:0},
	{id:94, nombre:"Portopí (centre comercial)", lat:39.55412292480469, lng:2.6229300498962402, otras:["3","20","50"], clicks:0},
	{id:555, nombre:"Manuel Azaña", lat:39.568809509277344, lng:2.664552927017212, otras:["18","28","29"], clicks:0},
	{id:310, nombre:"IES Juníper Serra", lat:39.59943771362305, lng:2.6772749423980713, otras:["10"], clicks:0},
	{id:836, nombre:"Camí de Sant Jordi", lat:39.558834075927734, lng:2.770354986190796, otras:["14"], clicks:0},
	{id:718, nombre:"Camí dels Reis", lat:39.598716735839844, lng:2.640695095062256, otras:["6","9","29"], clicks:0},
	{id:281, nombre:"Camí de les Meravelles (Es Pil·larí)", lat:39.52836990356445, lng:2.7577149868011475, otras:["31"], clicks:0},
	{id:143, nombre:"Paradís (Hotel Belvedere)", lat:39.5538215637207, lng:2.59796404838562, otras:["46"], clicks:0},
	{id:786, nombre:"Can Tàpera", lat:39.55265426635742, lng:2.598565101623535, otras:["20","46"], clicks:0},
	{id:668, nombre:"Camí 140", lat:39.63111877441406, lng:2.667375087738037, otras:["11"], clicks:0},
	{id:98, nombre:"L'Aigua Dolça", lat:39.56520080566406, lng:2.627269983291626, otras:["3","20","46"], clicks:0},
	{id:102, nombre:"Plaça del Progrés", lat:39.572086334228516, lng:2.636523962020874, otras:["3","5","20","46"], clicks:0},
	{id:355, nombre:"Avinguda d'Amèrica (Hotel Taurus Park)", lat:39.51350021362305, lng:2.7519030570983887, otras:["21","23","31"], clicks:0},
	{id:1022, nombre:"Hospital Son Llàtzer", lat:39.573577880859375, lng:2.704464912414551, otras:["24"], clicks:0},
	{id:945, nombre:"Camí de Son Fangos", lat:39.5338020324707, lng:2.736656904220581, otras:["31"], clicks:0},
	{id:649, nombre:"Àlber", lat:39.495052337646484, lng:2.746026039123535, otras:["23"], clicks:0},
	{id:366, nombre:"Ses Fontanelles (Aquàrium Palma)", lat:39.53171920776367, lng:2.728437900543213, otras:["15","21","23","25","31"], clicks:0},
	{id:62, nombre:"Plaça Gomila", lat:39.56295394897461, lng:2.6255710124969482, otras:["3","20","46","50"], clicks:0},
	{id:891, nombre:"Plaça dels Nins", lat:39.505393981933594, lng:2.7540369033813477, otras:["21","23"], clicks:0},
	{id:571, nombre:"Edifici Beatriu de Pinós", lat:39.63767623901367, lng:2.64530611038208, otras:["19"], clicks:0},
	{id:747, nombre:"Camí de la Real", lat:39.620670318603516, lng:2.6387290954589844, otras:["9"], clicks:0},
	{id:379, nombre:"Camí de Passatemps", lat:39.61484146118164, lng:2.65435791015625, otras:["12","34"], clicks:0},
	{id:338, nombre:"Plaça de sa Vileta", lat:39.59474182128906, lng:2.6170029640197754, otras:["8"], clicks:0},
	{id:757, nombre:"Camí de Jesús", lat:39.578338623046875, lng:2.6469359397888184, otras:["9"], clicks:0},
	{id:57, nombre:"Plaça del Progrés", lat:39.572113037109375, lng:2.6362569332122803, otras:["3","5","20"], clicks:0},
	{id:448, nombre:"Llaüt (Hotel San Francisco)", lat:39.51701736450195, lng:2.745655059814453, otras:["15","21","25"], clicks:0},
	{id:200, nombre:"Camí 140", lat:39.628238677978516, lng:2.668658971786499, otras:["11"], clicks:0},
	{id:1002, nombre:"Camí de Jesús (Pol. Son Valentí)", lat:39.59199905395508, lng:2.633415937423706, otras:["9"], clicks:0},
	{id:53, nombre:"Plaça del Rei Joan Carles I", lat:39.571563720703125, lng:2.646981954574585, otras:["3","7","20","46"], clicks:0},
	{id:424, nombre:"Llaüt (Hotel Neptuno)", lat:39.515010833740234, lng:2.747303009033203, otras:["15","21","25"], clicks:0},
	{id:1029, nombre:"Camí dels Reis, 123", lat:39.59233856201172, lng:2.632517099380493, otras:["6"], clicks:0},
	{id:1090, nombre:"Cala Nova", lat:39.55031204223633, lng:2.598741054534912, otras:["20"], clicks:0},
	{id:1006, nombre:"Av. de Mèxic (Parc de Kristian Krekovic)", lat:39.566261291503906, lng:2.6651699542999268, otras:["6","12"], clicks:0},
	{id:346, nombre:"Maria Antònia Salvà, 31", lat:39.597206115722656, lng:2.616558074951172, otras:["8"], clicks:0},
	{id:743, nombre:"Camí de la Real (Ca ses Monges)", lat:39.62779998779297, lng:2.639518976211548, otras:["9"], clicks:0},
	{id:106, nombre:"Plaça del Mercat (Audiència)", lat:39.57146072387695, lng:2.6498589515686035, otras:["3","7","15","20","25","46","50"], clicks:0},
	{id:775, nombre:"Camí de Passatemps", lat:39.63472366333008, lng:2.6558680534362793, otras:["12"], clicks:0},
	{id:131, nombre:"Plaça del Progrés", lat:39.57193374633789, lng:2.6359550952911377, otras:["46"], clicks:0},
	{id:664, nombre:"Plaça de la Quartera", lat:39.57042694091797, lng:2.6533679962158203, otras:["2"], clicks:0},
	{id:333, nombre:"Policlínica Miramar", lat:39.583702087402344, lng:2.630326986312866, otras:["6","8"], clicks:0},
	{id:49, nombre:"Grans magatzems", lat:39.573123931884766, lng:2.6571500301361084, otras:["3","5"], clicks:0},
	{id:840, nombre:"Cra. Manacor km 7", lat:39.57122039794922, lng:2.735909938812256, otras:["14"], clicks:0},
	{id:765, nombre:"Camí de la Real", lat:39.60845947265625, lng:2.641611099243164, otras:["9"], clicks:0},
	{id:30, nombre:"Auditòrium", lat:39.56735610961914, lng:2.630250930786133, otras:["1","41"], clicks:0},
	{id:502, nombre:"Joan Mascaró i Fornés", lat:39.599124908447266, lng:2.6386890411376953, otras:["16"], clicks:0},
	{id:1060, nombre:"Camí dels Reis (Son Berga)", lat:39.56788635253906, lng:2.603179931640625, otras:["46"], clicks:0},
	{id:228, nombre:"Camí de Son Rapinya, 46", lat:39.58723068237305, lng:2.6151459217071533, otras:["7"], clicks:0},
	{id:994, nombre:"Uruguai (Velòdrom)", lat:39.58726501464844, lng:2.6437230110168457, otras:["29"], clicks:0},
	{id:347, nombre:"Plaça de sa Vileta", lat:39.5946044921875, lng:2.616969108581543, otras:["8"], clicks:0},
	{id:925, nombre:"Passeig Marítim (Can Barberà)", lat:39.5574836730957, lng:2.6257519721984863, otras:["41"], clicks:0},
	{id:262, nombre:"Poliesportiu Prínceps d'Espanya", lat:39.60885238647461, lng:2.6642661094665527, otras:["11"], clicks:0},
	{id:921, nombre:"Passeig Marítim (Can Barberà)", lat:39.55728530883789, lng:2.625904083251953, otras:["41"], clicks:0},
	{id:26, nombre:"Port de Palma (Estació Marítima)", lat:39.55315017700195, lng:2.6261589527130127, otras:["1"], clicks:0},
	{id:795, nombre:"Camí dels Reis (Sa Indioteria)", lat:39.61145782470703, lng:2.676788091659546, otras:["11"], clicks:0},
	{id:453, nombre:"Plaça de la Reina (Catedral)", lat:39.568965911865234, lng:2.6465649604797363, otras:["25"], clicks:0},
	{id:654, nombre:"Àlber", lat:39.495033264160156, lng:2.746095895767212, otras:["23"], clicks:0},
	{id:95, nombre:"Joan Miró, 121", lat:39.55733108520508, lng:2.623051881790161, otras:["3","20"], clicks:0},
	{id:329, nombre:"Plaça de Barcelona", lat:39.57974624633789, lng:2.639488935470581, otras:["6","8"], clicks:0},
	{id:18, nombre:"Escola de Nàutica", lat:39.54536819458008, lng:2.623711109161377, otras:["1"], clicks:0},
	{id:872, nombre:"Almadrà", lat:39.58852767944336, lng:2.5967509746551514, otras:["7"], clicks:0},
	{id:952, nombre:"Es Pil·larí", lat:39.52920150756836, lng:2.7556169033050537, otras:["31"], clicks:0},
	{id:367, nombre:"La Porciúncula", lat:39.51816940307617, lng:2.74943208694458, otras:["23","31"], clicks:0},
	{id:948, nombre:"Cra. Militar", lat:39.52329635620117, lng:2.762769937515259, otras:["31"], clicks:0},
	{id:217, nombre:"Avinguda d'Amèrica (Hotel Taurus Park)", lat:39.513553619384766, lng:2.751636028289795, otras:["23","31"], clicks:0},
	{id:758, nombre:"Camí de Jesús (Psiquiàtric)", lat:39.58293914794922, lng:2.642988920211792, otras:["9"], clicks:0},
	{id:313, nombre:"Avinguda d'Amèrica (Hotel Géminis)", lat:39.51042175292969, lng:2.754683017730713, otras:["21","23","31"], clicks:0},
	{id:380, nombre:"Camí de Passatemps", lat:39.60948181152344, lng:2.6544549465179443, otras:["12","34"], clicks:0},
	{id:270, nombre:"Camí dels Reis, 678", lat:39.611419677734375, lng:2.6766839027404785, otras:["11"], clicks:0},
	{id:792, nombre:"Camí de Passatemps", lat:39.628841400146484, lng:2.6559081077575684, otras:["12"], clicks:0},
	{id:65, nombre:"Portopí (centre comercial)", lat:39.55201721191406, lng:2.621009111404419, otras:["3","20"], clicks:0},
	{id:280, nombre:"Camí de les Meravelles (Es Pil·larí)", lat:39.52614974975586, lng:2.7561750411987305, otras:["31"], clicks:0},
	{id:115, nombre:"Els Hostalets", lat:39.578853607177734, lng:2.6633400917053223, otras:["3","16"], clicks:0},
	{id:423, nombre:"Llaüt (Golf Fantasia)", lat:39.51311492919922, lng:2.748810052871704, otras:["15","21","25"], clicks:0},
	{id:787, nombre:"Joan Miró, 320", lat:39.552452087402344, lng:2.6024301052093506, otras:["3","20","46"], clicks:0},
	{id:1028, nombre:"Camí dels Reis (estadi futbol)", lat:39.58921813964844, lng:2.625535011291504, otras:["6"], clicks:0},
	{id:384, nombre:"Ses Fontanelles (Aquàrium Palma)", lat:39.531227111816406, lng:2.7291040420532227, otras:["15","21","23","25","31"], clicks:0},
	{id:776, nombre:"Camí de Passatemps", lat:39.63471603393555, lng:2.6557860374450684, otras:["12"], clicks:0},
	{id:742, nombre:"Camí de Passatemps", lat:39.62882995605469, lng:2.655803918838501, otras:["12"], clicks:0},
	{id:397, nombre:"Camí de les Meravelles", lat:39.526241302490234, lng:2.756186008453369, otras:["31"], clicks:0},
	{id:52, nombre:"Plaça del Mercat (Audiència)", lat:39.57155227661133, lng:2.649519920349121, otras:["3","7","15","20","46"], clicks:0},
	{id:237, nombre:"Camí de Son Vida, 109", lat:39.59020233154297, lng:2.606942892074585, otras:["7"], clicks:0},
	{id:977, nombre:"Policlínica", lat:39.58308029174805, lng:2.630319118499756, otras:["29"], clicks:0},
	{id:906, nombre:"Uruguai (Velòdrom)", lat:39.58735275268555, lng:2.643083095550537, otras:["29"], clicks:0},
	{id:10, nombre:"Auditòrium", lat:39.56640625, lng:2.628894090652466, otras:["1","41"], clicks:0},
	{id:645, nombre:"Camí 140", lat:39.62273025512695, lng:2.6708409786224365, otras:["11"], clicks:0},
	{id:369, nombre:"Camí de Passatemps", lat:39.60832977294922, lng:2.65500807762146, otras:["12","34"], clicks:0},
	{id:735, nombre:"Camí dels Reis", lat:39.60785675048828, lng:2.656780958175659, otras:["11","34"], clicks:0},
	{id:670, nombre:"Camí 140", lat:39.616268157958984, lng:2.6739931106567383, otras:["11"], clicks:0},
	{id:352, nombre:"Policlínica Miramar", lat:39.58356475830078, lng:2.630258083343506, otras:["6","8"], clicks:0},
	{id:882, nombre:"Sargàs", lat:39.52815246582031, lng:2.7368409633636475, otras:["23"], clicks:0},
	{id:259, nombre:"Avinguda d'Amèrica (Hotel Géminis)", lat:39.510189056396484, lng:2.754939079284668, otras:["23","31"], clicks:0},
	{id:1012, nombre:"Son Lledó", lat:39.639286041259766, lng:2.648247003555298, otras:["9","19"], clicks:0},
	{id:708, nombre:"Camí dels Reis (Polígon de Can Valero)", lat:39.59531784057617, lng:2.636286973953247, otras:["9"], clicks:0},
	{id:486, nombre:"Llaüt, 38 (Mega Park)", lat:39.514102935791016, lng:2.747864007949829, otras:["15","21","25"], clicks:0},
	{id:643, nombre:"Camí 140  33", lat:39.619606018066406, lng:2.67226505279541, otras:["11"], clicks:0},
	{id:1061, nombre:"Camí dels Reis (Son Berga)", lat:39.56795120239258, lng:2.6033430099487305, otras:["46"], clicks:0},
	{id:849, nombre:"Hospital Son Llàtzer", lat:39.57328414916992, lng:2.702510118484497, otras:["14","28"], clicks:0},
	{id:438, nombre:"Camí de Can Pastilla", lat:39.5413818359375, lng:2.710642099380493, otras:["15","28","30","31"], clicks:0},
	{id:922, nombre:"Passeig Marítim (L'Aigua Dolça)", lat:39.56492614746094, lng:2.6285760402679443, otras:["41"], clicks:0},
	{id:198, nombre:"Plaça del Fortí", lat:39.576316833496094, lng:2.643721103668213, otras:["5","41"], clicks:0},
	{id:679, nombre:"Club Nàutic Sant Antoni", lat:39.53438949584961, lng:2.714266061782837, otras:["52"], clicks:0},
	{id:202, nombre:"La Porciúncula", lat:39.51823425292969, lng:2.7492570877075195, otras:["23","31"], clicks:0},
	{id:666, nombre:"Camí 140", lat:39.61636734008789, lng:2.674027919769287, otras:["11"], clicks:0},
	{id:662, nombre:"Plaça de Cort", lat:39.569427490234375, lng:2.6501948833465576, otras:["2"], clicks:0},
	{id:368, nombre:"Cra. de Sóller (Son Pacs)", lat:39.60506057739258, lng:2.6551411151885986, otras:["11","12"], clicks:0},
	{id:553, nombre:"Manuel Azaña", lat:39.565185546875, lng:2.6628360748291016, otras:["18","28","29"], clicks:0},
	{id:943, nombre:"Auditòrium", lat:39.56731033325195, lng:2.630204916000366, otras:["50"], clicks:0},
	{id:947, nombre:"Es Pil·larí", lat:39.52925491333008, lng:2.755023956298828, otras:["31"], clicks:0},
	{id:149, nombre:"Camí dels Reis, 60", lat:39.5659294128418, lng:2.601677894592285, otras:["46"], clicks:0},
	{id:1026, nombre:"Camí dels Reis, 201", lat:39.592437744140625, lng:2.6324470043182373, otras:["6"], clicks:0},
	{id:655, nombre:"Avinguda de Son Verí", lat:39.496585845947266, lng:2.7475669384002686, otras:["23"], clicks:0},
	{id:190, nombre:"Plaça de Miquel Dolç", lat:39.576995849609375, lng:2.6688098907470703, otras:["5","7","24","28","29"], clicks:0},
	{id:832, nombre:"Camí de Sant Jordi", lat:39.55810546875, lng:2.771393060684204, otras:["14"], clicks:0},
	{id:663, nombre:"Plaça d'en Coll", lat:39.57062911987305, lng:2.6520519256591797, otras:["2"], clicks:0},
	{id:7, nombre:"Plaça de la Reina", lat:39.568973541259766, lng:2.6461920738220215, otras:["15"], clicks:0},
	{id:954, nombre:"Camí de Son Fangos", lat:39.534019470214844, lng:2.736715078353882, otras:["31"], clicks:0},
	{id:749, nombre:"Camí de la Real (Secar)", lat:39.608314514160156, lng:2.641495943069458, otras:["9"], clicks:0},
	{id:903, nombre:"Trencadors (Hotel Bahía)", lat:39.501285552978516, lng:2.753575086593628, otras:["23"], clicks:0},
	{id:846, nombre:"Plató", lat:39.576377868652344, lng:2.713697910308838, otras:["14"], clicks:0},
	{id:671, nombre:"Camí 140", lat:39.62622833251953, lng:2.669343948364258, otras:["11"], clicks:0},
	{id:608, nombre:"Camí 140", lat:39.62831115722656, lng:2.6687049865722656, otras:["11"], clicks:0},
	{id:286, nombre:"Camí de Can Peixet", lat:39.54153060913086, lng:2.7730770111083984, otras:["31"], clicks:0},
	{id:1050, nombre:"Poliesportiu", lat:39.555477142333984, lng:2.597187042236328, otras:["46"], clicks:0},
	{id:28, nombre:"Can Barberà", lat:39.55911636352539, lng:2.626720905303955, otras:["1","41"], clicks:0},
	{id:770, nombre:"Camí de la Real  (Can Rave)", lat:39.62449645996094, lng:2.6381609439849854, otras:["9"], clicks:0},
	{id:644, nombre:"Camí 140", lat:39.62273025512695, lng:2.670922040939331, otras:["11"], clicks:0},
	{id:630, nombre:"Mare de Déu de Begonya, 126", lat:39.482112884521484, lng:2.739201068878174, otras:["23"], clicks:0},
	{id:121, nombre:"Aragó, 256", lat:39.59127426147461, lng:2.6802709102630615, otras:["3"], clicks:0},
	{id:609, nombre:"Avinguda de Mèxic", lat:39.568084716796875, lng:2.6690850257873535, otras:["6","12"], clicks:0},
	{id:554, nombre:"Manuel Azaña", lat:39.56513977050781, lng:2.6629750728607178, otras:["18","28","29"], clicks:0},
	{id:358, nombre:"Plaça del Fortí", lat:39.5760383605957, lng:2.643338918685913, otras:["2","6","8"], clicks:0},
	{id:841, nombre:"Camí de sa Síquia", lat:39.565582275390625, lng:2.77496600151062, otras:["14"], clicks:0},
	{id:1009, nombre:"Cala Estància", lat:39.54121780395508, lng:2.7106659412384033, otras:["15","28","30","31"], clicks:0},
	{id:97, nombre:"Plaça Gomila", lat:39.56295394897461, lng:2.625699043273926, otras:["3","20","46"], clicks:0},
	{id:785, nombre:"Can Tàpera", lat:39.5523681640625, lng:2.6024069786071777, otras:["46"], clicks:0},
	{id:719, nombre:"Camí dels Reis", lat:39.598636627197266, lng:2.640939950942993, otras:["6","9","29"], clicks:0},
	{id:1066, nombre:"Polígon Son Rossinyol", lat:39.602203369140625, lng:2.6552600860595703, otras:["11","12"], clicks:0},
	{id:349, nombre:"Camí de sa Vileta, 115", lat:39.592384338378906, lng:2.621500015258789, otras:["8"], clicks:0},
	{id:260, nombre:"Emília Sureda, 35", lat:39.589351654052734, lng:2.657536029815674, otras:["11"], clicks:0},
	{id:1021, nombre:"Son Llàtzer (consultes externes)", lat:39.57187271118164, lng:2.703087091445923, otras:["24"], clicks:0},
	{id:942, nombre:"Estació Marítima", lat:39.55305480957031, lng:2.6263461112976074, otras:["50"], clicks:0},
	{id:315, nombre:"Camí Nou s/n", lat:39.601348876953125, lng:2.6806089878082275, otras:["10","34"], clicks:0},
	{id:827, nombre:"Camí de Sant Jordi", lat:39.561553955078125, lng:2.765597105026245, otras:["14"], clicks:0},
	{id:920, nombre:"Rotonda de Portopí", lat:39.55063247680664, lng:2.6192240715026855, otras:["41"], clicks:0},
	{id:756, nombre:"Camí de Jesús (Psiquiàtric)", lat:39.5826301574707, lng:2.6429319381713867, otras:["9"], clicks:0},
	{id:382, nombre:"Cra. de Sóller (Son Pacs)", lat:39.60478973388672, lng:2.654850959777832, otras:["11","12"], clicks:0},
	{id:105, nombre:"Plaça del Rei Joan Carles I", lat:39.571407318115234, lng:2.647296905517578, otras:["3","7","20","46"], clicks:0},
	{id:1001, nombre:"Camí de Jesús (Pol. Son Valentí)", lat:39.592044830322266, lng:2.6335790157318115, otras:["9"], clicks:0},
	{id:701, nombre:"Camí dels Reis (Polígon de Can Valero)", lat:39.59518814086914, lng:2.636322021484375, otras:["9"], clicks:0},
	{id:1005, nombre:"Pérez Galdós (Mercat de Llevant)", lat:39.56562423706055, lng:2.6628329753875732, otras:["6","12"], clicks:0},
	{id:924, nombre:"Passeig Marítim (L'Aigua Dolça)", lat:39.56528854370117, lng:2.628411054611206, otras:["41"], clicks:0},
	{id:231, nombre:"Camí de Son Rapinya (Son Quint)", lat:39.590328216552734, lng:2.6070001125335693, otras:["7"], clicks:0},
	{id:744, nombre:"Camí de la Real", lat:39.631935119628906, lng:2.6418750286102295, otras:["9"], clicks:0},
	{id:130, nombre:"Camí Vell de Sineu", lat:39.57881546020508, lng:2.7166810035705566, otras:["14"], clicks:0},
	{id:12, nombre:"Can Barberà", lat:39.55937957763672, lng:2.626497983932495, otras:["1","41"], clicks:0},
	{id:904, nombre:"Cra. de Sóller (presó)", lat:39.59748077392578, lng:2.6545259952545166, otras:["11","12"], clicks:0},
	{id:997, nombre:"Sant Joan de Déu (Hospital)", lat:39.547489166259766, lng:2.699176073074341, otras:["30"], clicks:0},
	{id:484, nombre:"Llaüt (Riu Palace)", lat:39.51826858520508, lng:2.744184970855713, otras:["15","21","25"], clicks:0},
	{id:1074, nombre:"Son Espases Hospitalització", lat:39.6072998046875, lng:2.6453559398651123, otras:["6","20","29","33"], clicks:0},
	{id:1133, nombre:"Son Llinàs", lat:39.577423095703125, lng:2.7037389278411865, otras:["28"], clicks:0},
	{id:210, nombre:"Arquebisbe Aspàreg, 8", lat:39.57504653930664, lng:2.6651980876922607, otras:["5","24","28"], clicks:0},
	{id:437, nombre:"Camí de Can Pastilla, 55", lat:39.53858184814453, lng:2.714517116546631, otras:["15","21","28","30","31"], clicks:0},
	{id:488, nombre:"Trasimè, 24 (Hotel Playa  Arenal)", lat:39.508262634277344, lng:2.751642942428589, otras:["15","21","25"], clicks:0},
	{id:50, nombre:"Via Roma (Clínica Rotger)", lat:39.57517623901367, lng:2.6477088928222656, otras:["3","7","15","20","46"], clicks:0},
	{id:912, nombre:"Policlínica", lat:39.58296203613281, lng:2.6304359436035156, otras:["29"], clicks:0},
	{id:622, nombre:"Parc aquàtic", lat:39.49630355834961, lng:2.7589309215545654, otras:["23"], clicks:0},
	{id:1082, nombre:"Baltasar Valentí, 25", lat:39.59098434448242, lng:2.682765007019043, otras:["34"], clicks:0},
	{id:717, nombre:"Saridakis (Fundació Miró)", lat:39.554344177246094, lng:2.6109859943389893, otras:["46","50"], clicks:0},
	{id:638, nombre:"Mare de Déu de Begonya, 120", lat:39.48215103149414, lng:2.7394449710845947, otras:["23"], clicks:0},
	{id:336, nombre:"Camí de sa Vileta, 84", lat:39.59172058105469, lng:2.6225171089172363, otras:["8"], clicks:0},
	{id:412, nombre:"Pérez Galdós, 17", lat:39.56655502319336, lng:2.6601860523223877, otras:["6","12"], clicks:0},
	{id:1078, nombre:"Plaça d'Espanya", lat:39.57603454589844, lng:2.6540160179138184, otras:["10","11","12","24"], clicks:0},
	{id:404, nombre:"Plaça d'Espanya", lat:39.5752067565918, lng:2.6552069187164307, otras:["14","15","23","30"], clicks:0},
	{id:559, nombre:"Eusebi Estada, 1 (Estació tren de Sóller)", lat:39.57685470581055, lng:2.654197931289673, otras:["14","23","30","33"], clicks:0},
	{id:1135, nombre:"Àrea Serveis Aeroport", lat:39.54325485229492, lng:2.717150926589966, otras:["1"], clicks:0},
	{id:1136, nombre:"Àrea Serveis Aeroport", lat:39.543758392333984, lng:2.716870069503784, otras:["1"], clicks:0},
	{id:1137, nombre:"Cases Noves, 40", lat:0, lng:0, otras:["9"], clicks:0},
	{id:1138, nombre:"Josep Antoni de Cabanyes, 38", lat:0, lng:0, otras:["6"], clicks:0}
	];

	var itinerarios = [

		{id: '11', nombre: 'AEROPORT', destino:"PALMA-PORT", indeterminado: '1',
			primero: '06:00', ultimo: '01:45', frecuencia: '13',
			primeroSab: '06:00', ultimoSab: '01:45', frecuenciaSab: '13',
			primeroFest: '06:00', ultimoFest: '01:45', frecuenciaFest: '13',
			paradas: [547,566,449,450,451,452,422,2,492,127,19,20,569,8,9,10,11,12,14,15,16,17,18]},

		{id: '12', nombre: "PALMA-PORT", destino:'AEROPORT', indeterminado: '0',
			primero: '05:30', ultimo: '02:00', frecuencia: '13',
			primeroSab: '05:30', ultimoSab: '02:00', frecuenciaSab: '13',
			primeroFest: '05:30', ultimoFest: '02:00', frecuenciaFest: '13',
			paradas: [18,23,25,1127,26,27,28,29,30,31,129,203,205,981,598,456,457,458,459,546,547]},

		{id: '21', nombre: 'CENTRE HISTORIC', destino: 'CENTRE HISTORIC', indeterminado: '0',
			primero: '07:00', ultimo: '21:30', frecuencia: '30',
			primeroSab: '07:00', ultimoSab: '21:00', frecuenciaSab: '30',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [452,195,295,3,494,1116,1117,358,19,104,985,986,662,663,664,983]},

		{id: '31', nombre: "PONT D'INCA", destino: 'SES ILLETES', indeterminado: '0',
			primero: '05:45', ultimo: '00:40', frecuencia: '9',
			primeroSab: '05:45', ultimoSab: '00:35', frecuenciaSab: '10',
			primeroFest: '06:50', ultimoFest: '00:35', frecuenciaFest: '10',
			paradas: [34,35,36,37,38,13,39,40,41,42,43,44,45,46,47,49,219,3,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,82,65,66,67,69,71,787,73,75,76,77,78,79,85,93]},

		{id: '32', nombre: 'SES ILLETES', destino: "PONT D'INCA", indeterminado: '0',
			primero: '06:40', ultimo: '00:45', frecuencia: '9',
			primeroSab: '06:50', ultimoSab: '00:35', frecuenciaSab: '10',
			primeroFest: '06:50', ultimoFest: '00:35', frecuenciaFest: '10',
			paradas: [93,109,112,128,138,145,86,87,784,89,90,91,92,94,81,95,96,97,98,100,101,102,103,104,105,106,107,108,981,110,111,113,114,115,116,117,118,119,120,121,122,123,124,125,126,34]},

		{id: '51', nombre: 'RAFAL NOU', destino: 'SON DURETA', indeterminado: '0',
			primero: '06:00', ultimo: '23:00', frecuencia: '11',
			primeroSab: '06:00', ultimoSab: '23:00', frecuenciaSab: '18',
			primeroFest: '06:05', ultimoFest: '23:00', frecuenciaFest: '25',
			paradas: [860,861,862,863,182,199,183,184,185,186,187,189,190,191,192,193,194,47,49,219,492,197,198,990,56,57,132,133,134,135,1106,165,136,137,713]},

		{id: '52', nombre: 'SON DURETA', destino: 'RAFAL NOU', indeterminado: '0',
			primero: '06:10', ultimo: '23:00', frecuencia: '11',
			primeroSab: '06:10', ultimoSab: '23:00', frecuenciaSab: '18',
			primeroFest: '06:45', ultimoFest: '23:00', frecuenciaFest: '25',
			paradas: [713,359,153,154,155,156,102,103,203,205,981,598,207,208,209,210,211,212,213,214,215,216,1093,860]},

		{id: '61', nombre: 'POLIGON DE LLEVANT', destino: 'C.VALERO-S.ESPASES', indeterminado: '0',
			primero: '06:20', ultimo: '21:00', frecuencia: '32',
			primeroSab: '07:15', ultimoSab: '14:00', frecuenciaSab: '45',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [1005,412,451,452,195,2,492,197,328,329,330,331,332,333,334,1028,1029,760,761,1138,1024,1025,762,763,719,1074,1075]},

		{id: '62', nombre: 'C.VALERO-S.ESPASES', destino: 'POLIGON DE LLEVANT', indeterminado: '0',
			primero: '06:55', ultimo: '20:45', frecuencia: '32',
			primeroSab: '07:15', ultimoSab: '14:00', frecuenciaSab: '45',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [1075,718,751,752,1138,1024,1025,753,754,1026,1027,351,352,353,354,356,357,358,205,1051,390,799,400,99,617,410,609,1006,1005]},

		{id: '71', nombre: 'SON GOTLEU', destino: 'SON XIGALA', indeterminado: '1',
			primero: '06:00', ultimo: '23:30', frecuencia: '9',
			primeroSab: '06:00', ultimoSab: '23:00', frecuenciaSab: '19',
			primeroFest: '06:20', ultimoFest: '23:00', frecuenciaFest: '30',
			paradas: [392,189,190,393,394,395,401,403,48,2,3,50,51,52,53,54,220,221,222,223,224,225,226,227,228,229,230,231,780,549,489,907,545]},

		{id: '72', nombre: 'SON XIGALA', destino: 'SON GOTLEU', indeterminado: '0',
			primero: '06:20', ultimo: '23:30', frecuencia: '9',
			primeroSab: '06:20', ultimoSab: '23:30', frecuenciaSab: '19',
			primeroFest: '07:00', ultimoFest: '23:00', frecuenciaFest: '30',
			paradas: [545,989,544,460,781,237,238,239,240,241,242,243,244,245,246,247,103,104,105,106,454,108,981,390,799,406,407,408,414,415,416,417,418,392]},

		{id: '73', nombre: 'SON GOTLEU', destino: 'SON VIDA', indeterminado: '1',
			primero: '06:40', ultimo: '21:15', frecuencia: '60',
			primeroSab: '06:35', ultimoSab: '20:50', frecuenciaSab: '60',
			primeroFest: '06:50', ultimoFest: '20:45', frecuenciaFest: '60',
			paradas: [392,189,190,393,394,395,401,403,48,2,3,50,51,52,53,54,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234]},

		{id: '74', nombre: 'SON VIDA', destino: 'SON GOTLEU', indeterminado: '0',
			primero: '07:35', ultimo: '22:00', frecuencia: '60',
			primeroSab: '07:25', ultimoSab: '21:38', frecuenciaSab: '60',
			primeroFest: '07:30', ultimoFest: '21:30', frecuenciaFest: '60',
			paradas: [234,873,870,871,874,872,236,237,238,239,240,241,242,243,244,245,246,247,103,104,105,106,454,108,981,390,799,406,407,408,414,415,416,417,418,392]},

		{id: '81', nombre: 'SINDICAT', destino: 'SON ROCA', indeterminado: '0',
			primero: '06:05', ultimo: '23:30', frecuencia: '8',
			primeroSab: '06:00', ultimoSab: '22:30', frecuenciaSab: '12',
			primeroFest: '06:00', ultimoFest: '22:30', frecuenciaFest: '20',
			paradas: [360,2,492,197,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344]},

		{id: '82', nombre: 'SON ROCA', destino: 'SINDICAT', indeterminado: '0',
			primero: '05:40', ultimo: '23:00', frecuencia: '8',
			primeroSab: '05:40', ultimoSab: '22:00', frecuenciaSab: '12',
			primeroFest: '05:40', ultimoFest: '22:00', frecuenciaFest: '20',
			paradas: [344,345,346,347,348,349,350,351,352,353,354,356,357,358,205,1051,598,360]},

		{id: '91', nombre: 'PORTA SANT ANTONI', destino: 'SON ESPANYOL', indeterminado: '0',
			primero: '07:30', ultimo: '20:30', frecuencia: '60',
			primeroSab: '07:30', ultimoSab: '20:30', frecuenciaSab: '60',
			primeroFest: '07:30', ultimoFest: '20:30', frecuenciaFest: '60',
			paradas: [6,48,295,492,757,758,759,1001,701,719,764,765,766,767,768,769,747,770,743,144,744,745]},

		{id: '92', nombre: 'SON ESPANYOL', destino: 'PORTA SANT ANTONI', indeterminado: '0',
			primero: '07:05', ultimo: '21:00', frecuencia: '60',
			primeroSab: '07:05', ultimoSab: '21:00', frecuenciaSab: '60',
			primeroFest: '07:05', ultimoFest: '21:00', frecuenciaFest: '60',
			paradas: [745,959,1137,748,746,749,750,718,708,1002,755,756,543,110,6]},

		{id: '101', nombre: 'SINDICAT', destino: 'SON CASTELLO', indeterminado: '0',
			primero: '06:00', ultimo: '23:00', frecuencia: '15',
			primeroSab: '06:00', ultimoSab: '22:05', frecuenciaSab: '22',
			primeroFest: '07:00', ultimoFest: '22:00', frecuenciaFest: '30',
			paradas: [810,48,1078,623,296,297,298,299,256,1017,1007,1008,312,314,315,316,272,273,274,1033]},

		{id: '102', nombre: 'SON CASTELLO', destino: 'SINDICAT', indeterminado: '0',
			primero: '05:30', ultimo: '23:00', frecuencia: '15',
			primeroSab: '06:05', ultimoSab: '22:10', frecuenciaSab: '22',
			primeroFest: '07:00', ultimoFest: '22:00', frecuenciaFest: '30',
			paradas: [1033,266,267,268,307,309,310,311,1019,1018,285,322,323,324,325,598,810]},

		{id: '111', nombre: 'SINDICAT', destino: 'SA INDIOTERIA', indeterminado: '0',
			primero: '06:35', ultimo: '21:00', frecuencia: '30',
			primeroSab: '06:35', ultimoSab: '21:00', frecuenciaSab: '80',
			primeroFest: '06:35', ultimoFest: '21:00', frecuenciaFest: '80',
			paradas: [1,1078,623,249,250,251,254,260,728,729,730,905,1066,368,731,732,262,263,1096,1097,1033,266,267,268,269,795,607,666,619,1094,644,665,608,668]},

		{id: '112', nombre: 'SA INDIOTERIA', destino: 'SINDICAT', indeterminado: '0',
			primero: '07:05', ultimo: '21:45', frecuencia: '30',
			primeroSab: '07:10', ultimoSab: '21:40', frecuenciaSab: '80',
			primeroFest: '07:10', ultimoFest: '21:40', frecuenciaFest: '80',
			paradas: [668,200,671,645,643,670,201,270,271,272,273,274,275,276,1096,1097,304,257,258,725,1085,279,735,382,904,383,611,612,736,737,287,289,290,291,388,389,390,1]},

		{id: '121', nombre: 'POLÍGON LLEVANT', destino: 'sSARDINA-saGARRIGA', indeterminado: '0',
			primero: '06:30', ultimo: '23:05', frecuencia: '20',
			primeroSab: '06:30', ultimoSab: '23:10', frecuenciaSab: '25',
			primeroFest: '07:00', ultimoFest: '23:00', frecuenciaFest: '35',
			paradas: [1006,1005,412,451,452,195,1078,361,362,363,364,365,385,738,739,610,611,797,905,1066,368,369,370,371,372,373,374,791,792,775,790]},

		{id: '122', nombre: 'sSARDINA-saGARRIGA', destino: 'POLÍGON LLEVANT', indeterminado: '0',
			primero: '06:30', ultimo: '23:05', frecuencia: '20',
			primeroSab: '06:30', ultimoSab: '23:10', frecuenciaSab: '25',
			primeroFest: '06:30', ultimoFest: '23:00', frecuenciaFest: '35',
			paradas: [790,776,742,788,376,377,378,379,380,381,382,904,383,615,616,740,741,386,387,388,389,390,799,400,99,617,410,609,1006]},

		{id: '141', nombre: 'PALMA', destino: 'S.FERRIOL-S.JORDI', indeterminado: '1',
			primero: '06:50', ultimo: '23:20', frecuencia: '20',
			primeroSab: '06:50', ultimoSab: '23:20', frecuenciaSab: '20',
			primeroFest: '07:00', ultimoFest: '22:00', frecuenciaFest: '30',
			paradas: [559,111,799,406,407,408,414,415,814,875,849,805,812,815,816,817,818,819,820,821,793,828,563,830,831,829,841,832,833,834,811]},

		{id: '142', nombre: 'S.FERRIOL-S.JORDI', destino: 'PALMA', indeterminado: '0',
			primero: '06:25', ultimo: '22:25', frecuencia: '20',
			primeroSab: '06:25', ultimoSab: '22:25', frecuenciaSab: '20',
			primeroFest: '07:00', ultimoFest: '22:05', frecuenciaFest: '30',
			paradas: [811,835,836,827,837,838,562,840,794,843,844,845,846,847,848,804,849,876,824,825,395,401,403,48,404,623,559]},

		{id: '143', nombre: 'PALMA', destino: 'S.FERRIOL-HOSTALOT', indeterminado: '1',
			primero: '06:50', ultimo: '20:40', frecuencia: '60',
			primeroSab: '06:50', ultimoSab: '20:40', frecuenciaSab: '60',
			primeroFest: '08:30', ultimoFest: '20:30', frecuenciaFest: '60',
			paradas: [559,111,799,406,407,408,414,415,814,875,812,815,816,817,818,808,1004,993,130,669,955,856]},

		{id: '144', nombre: 'S.FERRIOL-HOSTALOT', destino: 'PALMA', indeterminado: '0',
			primero: '07:25', ultimo: '21:30', frecuencia: '60',
			primeroSab: '07:25', ultimoSab: '21:30', frecuenciaSab: '60',
			primeroFest: '07:50', ultimoFest: '19:55', frecuenciaFest: '60',
			paradas: [856,857,794,843,844,845,846,847,848,804,849,876,824,825,395,401,403,48,404,623,559]},

		{id: '151', nombre: 'PLAÇA REINA', destino: 'PLATJA DE PALMA', indeterminado: '0',
			primero: '06:05', ultimo: '01:20', frecuencia: '10',
			primeroSab: '06:05', ultimoSab: '01:20', frecuenciaSab: '10',
			primeroFest: '06:05', ultimoFest: '01:20', frecuenciaFest: '10',
			paradas: [7,1048,106,454,108,1051,455,456,457,458,459,84,462,463,464,465,466,467,468,469,470,1009,471,473,474,475,476,477,384,479,480,481,950,482,483,484,485,486,487,488,691]},

		{id: '152', nombre: 'PLATJA DE PALMA', destino: 'PLAÇA REINA', indeterminado: '0',
			primero: '05:50', ultimo: '01:20', frecuencia: '10',
			primeroSab: '05:50', ultimoSab: '01:20', frecuenciaSab: '10',
			primeroFest: '05:50', ultimoFest: '01:20', frecuenciaFest: '10',
			paradas: [691,692,771,693,423,424,448,425,426,427,951,428,429,430,366,432,433,434,435,437,438,439,440,441,442,443,444,445,446,447,83,449,450,451,452,422,404,3,50,52,986,7]},

		{id: '161', nombre: 'SON FUSTER', destino:'ESTABLIMENTS', indeterminado: '0',
			primero: '06:30', ultimo: '00:00', frecuencia: '15',
			primeroSab: '06:30', ultimoSab: '00:00', frecuenciaSab: '15',
			primeroFest: '07:15', ultimoFest: '21:15', frecuenciaFest: '30',
			paradas: [1124,1018,1125,41,42,43,44,45,46,47,48,295,492,494,495,496,497,498,499,621,500,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518]},

		{id: '162', nombre: 'ESTABLIMENTS', destino:'SON FUSTER', indeterminado: '0',
			primero: '06:23', ultimo: '23:15', frecuencia: '15',
			primeroSab: '06:23', ultimoSab: '23:15', frecuenciaSab: '15',
			primeroFest: '07:30', ultimoFest: '21:30', frecuenciaFest: '30',
			paradas: [1124,1123,1122,119,118,117,116,115,114,113,111,110,543,493,542,541,540,539,538,537,535,534,533,532,531,530,529,528,527,526,525,524,523,522,521,520,519,518]},

		{id: '181', nombre: 'CARRER MANACOR', destino: 'SON RIERA', indeterminado: '0',
			primero: '07:00', ultimo: '20:00', frecuencia: '60',
			primeroSab: '07:00', ultimoSab: '20:00', frecuenciaSab: '60',
			primeroFest: '07:00', ultimoFest: '13:00', frecuenciaFest: '60',
			paradas: [813,407,408,796,553,462,463,464,465,466,467,468,469,673,548,618]},

		{id: '182', nombre: 'SON RIERA', destino: 'CARRER MANACOR', indeterminado: '0',
			primero: '06:30', ultimo: '20:30', frecuencia: '60',
			primeroSab: '06:30', ultimoSab: '20:30', frecuenciaSab: '60',
			primeroFest: '06:30', ultimoFest: '13:30', frecuenciaFest: '60',
			paradas: [618,802,674,440,441,442,443,444,445,446,447,554,555,401,403,813]},

		{id: '191', nombre: 'PORTA DEL CAMP', destino: 'U.I.B.-PARC BIT', indeterminado: '0',
			primero: '07:00', ultimo: '21:10', frecuencia: '25',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [452,195,295,492,494,495,496,497,498,499,551,556,461,567,1012,1101,571,1104,572]},

		{id: '192', nombre: 'U.I.B.-PARC BIT', destino: 'PORTA DEL CAMP', indeterminado: '0',
			primero: '07:40', ultimo: '21:50', frecuencia: '60',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [572,1105,1013,1102,1014,398,557,558,538,539,540,541,542,493,543,390,111,456,457,450,451,452]},

		{id: '201', nombre: 'SANT AGUSTI', destino: 'SON ESPASES', indeterminado: '0',
			primero: '06:35', ultimo: '22:00', frecuencia: '22',
			primeroSab: '06:40', ultimoSab: '22:15', frecuenciaSab: '35',
			primeroFest: '06:45', ultimoFest: '21:55', frecuenciaFest: '35',
			paradas: [1090,784,89,90,91,92,94,81,95,96,97,98,100,101,102,103,104,105,106,107,108,1087,362,363,364,365,385,738,739,556,1074,1075]},

		{id: '202', nombre: 'SON ESPASES', destino: 'SANT AGUSTI', indeterminado: '0',
			primero: '06:30', ultimo: '22:10', frecuencia: '22',
			primeroSab: '07:30', ultimoSab: '22:30', frecuenciaSab: '35',
			primeroFest: '07:30', ultimoFest: '22:15', frecuenciaFest: '35',
			paradas: [1075,557,740,741,386,387,389,3,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,82,65,66,67,69,71,787,786,1062,1063,1064,1077,1065,1090]},

		{id: '211', nombre: 'AEROPORT', destino: "cPASTILLA-S'ARENAL", indeterminado: '1',
			primero: '07:00', ultimo: '00:30', frecuencia: '22',
			primeroSab: '07:00', ultimoSab: '00:30', frecuenciaSab: '22',
			primeroFest: '07:00', ultimoFest: '00:30', frecuenciaFest: '22',
			paradas: [547,566,473,474,475,476,477,384,479,480,481,950,482,483,484,485,486,487,488,490]},

		{id: '212', nombre: "cPASTILLA-S'ARENAL", destino: 'AEROPORT', indeterminado: '0',
			primero: '06:30', ultimo: '01:00', frecuencia: '22',
			primeroSab: '06:30', ultimoSab: '01:00', frecuenciaSab: '22',
			primeroFest: '06:30', ultimoFest: '01:00', frecuenciaFest: '22',
			paradas: [490,891,892,313,355,423,424,448,425,426,427,951,428,429,430,366,432,433,434,435,437,546,547]},

		{id: '231', nombre: 'PALMA', destino: 'CALA BLAVA', indeterminado: '1',
			primero: '06:50', ultimo: '20:50', frecuencia: '120',
			primeroSab: '06:50', ultimoSab: '20:50', frecuenciaSab: '120',
			primeroFest: '06:50', ultimoFest: '20:50', frecuenciaFest: '120',
			paradas: [559,456,457,458,459,476,477,384,880,881,882,883,884,885,202,217,259,605,900,490,624,646,647,648,649,650,661,651,626,627,628,629,630,631,632,633,634,635]},

		{id: '232', nombre: 'CALA BLAVA', destino: 'PALMA', indeterminado: '0',
			primero: '07:50', ultimo: '19:50', frecuencia: '120',
			primeroSab: '07:50', ultimoSab: '19:50', frecuenciaSab: '120',
			primeroFest: '07:50', ultimoFest: '19:50', frecuenciaFest: '120',
			paradas: [635,636,637,638,639,640,641,642,652,613,653,654,655,656,657,903,890,891,892,313,355,367,893,894,895,896,897,898,366,432,433,449,450,451,452,422,404,559]},

		{id: '233', nombre: 'PALMA', destino: 'PARC AQUATIC', indeterminado: '1',
			primero: '06:00', ultimo: '21:05', frecuencia: '25',
			primeroSab: '06:00', ultimoSab: '21:05', frecuenciaSab: '25',
			primeroFest: '06:00', ultimoFest: '21:05', frecuenciaFest: '25',
			paradas: [559,456,457,458,459,476,477,384,880,881,882,883,884,885,202,217,259,605,900,490,624,625,886,901,622]},

		{id: '234', nombre: 'PARC AQUATIC', destino: 'PALMA', indeterminado: '0',
			primero: '06:45', ultimo: '20:15', frecuencia: '25',
			primeroSab: '06:45', ultimoSab: '20:15', frecuenciaSab: '25',
			primeroFest: '06:45', ultimoFest: '20:15', frecuenciaFest: '25',
			paradas: [622,902,887,888,889,903,890,891,892,313,355,367,893,894,895,896,897,898,366,432,433,449,450,451,452,422,404,559]},

		{id: '241', nombre: 'RAFAL-SON LLATZER', destino: 'P.ESPANYA-SON HUGO', indeterminado: '0',
			primero: '07:00', ultimo: '22:10', frecuencia: '33',
			primeroSab: '07:50', ultimoSab: '13:50', frecuenciaSab: '30',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [1022,1079,861,862,863,182,199,1095,1058,1059,4,188,189,190,191,192,193,194,47,48,1078,623,296,297,298,974,1015]},

		{id: '242', nombre: 'P.ESPANYA-SON HUGO', destino: 'RAFAL-SON LLATZER', indeterminado: '0',
			primero: '06:50', ultimo: '21:00', frecuencia: '33',
			primeroSab: '07:00', ultimoSab: '13:00', frecuenciaSab: '30',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [1015,965,322,323,324,325,598,207,208,209,210,211,212,213,32,860,861,862,863,182,199,1095,1058,1059,1079,1021,1022]},

		{id: '251', nombre: 'PALMA EXPRES', destino: 'platjaPALMA EXPRES', indeterminado: '0',
			primero: '06:30', ultimo: '00:55', frecuencia: '10',
			primeroSab: '06:30', ultimoSab: '00:55', frecuenciaSab: '10',
			primeroFest: '06:30', ultimoFest: '00:55', frecuenciaFest: '13',
			paradas: [453,1048,106,454,108,1051,455,456,457,458,476,477,384,479,480,481,950,482,483,484,485,486,487,488,1003]},

		{id: '252', nombre: 'platjaPALMA EXPRES', destino: 'PALMA EXPRES', indeterminado: '0',
			primero: '07:05', ultimo: '00:30', frecuencia: '10',
			primeroSab: '07:05', ultimoSab: '00:30', frecuenciaSab: '10',
			primeroFest: '07:05', ultimoFest: '00:30', frecuenciaFest: '13',
			paradas: [1003,692,771,693,423,424,448,425,426,427,951,428,429,430,366,432,433,453]},

		{id: '281', nombre: 'RAFAL-CPAS-LLATZER', destino: 'RAFAL-CPAS-LLATZER', indeterminado: '0',
			primero: '07:30', ultimo: '20:30', frecuencia: '60',
			primeroSab: '07:30', ultimoSab: '20:30', frecuenciaSab: '60',
			primeroFest: '07:30', ultimoFest: '20:30', frecuenciaFest: '60',
			paradas: [849,4,188,189,190,191,192,536,585,553,84,462,463,464,465,466,467,468,469,470,1009,471,473,474,475,548,843,844,845,804]},

		{id: '282', nombre: 'CPAS-RAFAL-LLATZER', destino: 'CPAS-RAFAL-LLATZER', indeterminado: '0',
			primero: '07:00', ultimo: '20:00', frecuencia: '60',
			primeroSab: '07:00', ultimoSab: '20:00', frecuenciaSab: '60',
			primeroFest: '07:00', ultimoFest: '20:00', frecuenciaFest: '60',
			paradas: [849,1133,1103,819,820,821,802,434,435,437,438,439,440,441,442,443,444,445,446,447,83,554,555,586,210,211,212,213,32,860]},

		{id: '291', nombre: 'S.ESPASES-S.OLIVA', destino: 'S.ESPASES-S.OLIVA', indeterminado: '0',
			primero: '06:00', ultimo: '22:20', frecuencia: '34',
			primeroSab: '06:17', ultimoSab: '22:40', frecuenciaSab: '34',
			primeroFest: '06:17', ultimoFest: '22:40', frecuenciaFest: '34',
			paradas: [929,8,132,133,134,135,153,74,308,910,911,912,913,914,994,963,738,739,556,1074,1075,557,740,741,964,1070,1072,965,583,722,958,723,966,967,407,585,553,449,458]},

		{id: '292', nombre: 'sESPASES-sARMADANS', destino: 'sESPASES-sARMADANS', indeterminado: '0',
			primero: '05:50', ultimo: '22:10', frecuencia: '34',
			primeroSab: '06:00', ultimoSab: '22:20', frecuenciaSab: '34',
			primeroFest: '06:00', ultimoFest: '22:20', frecuenciaFest: '34',
			paradas: [929,969,459,554,555,586,970,190,971,972,973,934,560,561,974,1073,1071,385,975,497,498,499,621,500,719,1074,1075,718,535,537,538,539,540,906,976,332,977,978,979,980,982,135,153,154,155,156,968]},

		{id: '301', nombre: 'PALMA', destino: 'CAN PASTILLA', indeterminado: '1',
			primero: '07:40', ultimo: '22:00', frecuencia: '20',
			primeroSab: '07:30', ultimoSab: '22:05', frecuenciaSab: '35',
			primeroFest: '07:35', ultimoFest: '22:10', frecuenciaFest: '35',
			paradas: [559,455,456,457,458,459,84,462,463,464,465,466,467,468,469,992,997,470,1009,471,473,474,475]},

		{id: '302', nombre: 'CAN PASTILLA', destino: 'PALMA', indeterminado: '0',
			primero: '07:00', ultimo: '21:45', frecuencia: '20',
			primeroSab: '07:00', ultimoSab: '21:30', frecuenciaSab: '35',
			primeroFest: '07:00', ultimoFest: '21:35', frecuenciaFest: '35',
			paradas: [475,435,437,438,992,997,439,440,441,442,443,444,445,446,447,83,449,450,451,452,422,404,559]},

		{id: '311', nombre: 'PORTA SANT ANTONI', destino: 'SANT JORDI', indeterminado: '0',
			primero: '07:10', ultimo: '21:10', frecuencia: '60',
			primeroSab: '07:10', ultimoSab: '20:10', frecuenciaSab: '120',
			primeroFest: '08:10', ultimoFest: '20:10', frecuenciaFest: '120',
			paradas: [1,457,458,459,1043,1009,471,473,474,475,476,477,384,479,897,945,946,947,302,397,169,202,217,259,248,261,948,196,396,413,399,282,283,286,1041,1067,1039,811]},

		{id: '312', nombre: 'SANT JORDI', destino: 'PORTA SANT ANTONI', indeterminado: '0',
			primero: '06:55', ultimo: '20:10', frecuencia: '60',
			primeroSab: '07:10', ultimoSab: '21:10', frecuenciaSab: '120',
			primeroFest: '07:10', ultimoFest: '21:10', frecuenciaFest: '120',
			paradas: [811,1038,1068,1040,282,283,286,300,431,402,409,949,604,660,313,355,367,391,280,281,952,953,954,881,430,366,432,433,434,435,437,438,1045,1046,449,450,451,1]},

		{id: '331', nombre: 'EUSEBI ESTADA', destino: 'SON ESPASES', indeterminado: '0',
			primero: '07:00', ultimo: '22:10', frecuencia: '16',
			primeroSab: '07:00', ultimoSab: '21:40', frecuenciaSab: '25',
			primeroFest: '07:00', ultimoFest: '21:40', frecuenciaFest: '25',
			paradas: [559,492,494,495,496,497,498,499,551,556,1074,1076]},

		{id: '332', nombre: 'SON ESPASES', destino: 'EUSEBI ESTADA', indeterminado: '1',
			primero: '07:20', ultimo: '22:15', frecuencia: '16',
			primeroSab: '07:20', ultimoSab: '22:10', frecuenciaSab: '25',
			primeroFest: '07:20', ultimoFest: '22:10', frecuenciaFest: '25',
			paradas: [1076,557,558,538,539,540,541,542,493,1087,559]},

		{id: '341', nombre: 'SON ESPASES', destino: 'ES RAFAL', indeterminado: '1',
			primero: '08:05', ultimo: '22:10', frecuencia: '70',
			primeroSab: '08:05', ultimoSab: '22:10', frecuenciaSab: '70',
			primeroFest: '08:05', ultimoFest: '22:10', frecuenciaFest: '70',
			paradas: [1076,461,378,379,380,381,731,263,1096,1097,1033,266,267,268,307,1080,1081,1108,13,39,1095,1058,1059,861]},

		{id: '342', nombre: 'ES RAFAL', destino: 'SON ESPASES', indeterminado: '0',
			primero: '07:30', ultimo: '21:30', frecuencia: '70',
			primeroSab: '07:30', ultimoSab: '21:30', frecuenciaSab: '70',
			primeroFest: '07:30', ultimoFest: '21:30', frecuenciaFest: '70',
			paradas: [861,862,863,1082,1108,1083,1084,315,316,272,273,274,1128,1034,735,369,370,371,378,398,1076]},

		{id: '411', nombre: 'PORTA DES CAMP', destino: 'ROTONDA DE PORTOPI', indeterminado: '0',
			primero: '23:45', ultimo: '06:00', frecuencia: '25',
			primeroSab: '23:45', ultimoSab: '06:00', frecuenciaSab: '25',
			primeroFest: '23:45', ultimoFest: '06:00', frecuenciaFest: '25',
			paradas: [458,450,451,452,195,219,3,127,197,198,990,568,569,8,9,10,924,11,12,925,15,920]},

		{id: '412', nombre: 'ROTONDA DE PORTOPI', destino: 'PORTA DES CAMP', indeterminado: '0',
			primero: '00:10', ultimo: '06:25', frecuencia: '25',
			primeroSab: '00:10', ultimoSab: '06:25', frecuenciaSab: '25',
			primeroFest: '00:10', ultimoFest: '06:25', frecuenciaFest: '25',
			paradas: [920,27,921,28,29,922,30,31,129,203,205,981,598,111,456,457,458]},

		{id: '461', nombre: 'PALMA per TERRENO', destino: 'GENOVA per TERRENO', indeterminado: '0',
			primero: '06:50', ultimo: '23:40', frecuencia: '22',
			primeroSab: '06:50', ultimoSab: '23:40', frecuenciaSab: '28',
			primeroFest: '07:00', ultimoFest: '22:36', frecuenciaFest: '36',
			paradas: [80,195,219,492,50,51,52,53,54,55,56,131,58,59,60,61,62,63,157,166,158,159,160,161,162,163,164,167,716,717,909,67,69,71,787,786,143]},

		{id: '462', nombre: 'GENOVA per TERRENO', destino: 'PALMA per TERRENO', indeterminado: '0',
			primero: '06:24', ultimo: '23:05', frecuencia: '22',
			primeroSab: '06:20', ultimoSab: '23:05', frecuenciaSab: '28',
			primeroFest: '06:24', ultimoFest: '23:12', frecuenciaFest: '36',
			paradas: [143,1050,146,147,148,149,1061,151,865,1107,153,154,155,156,102,103,104,105,106,107,108,981,110,80]},

		{id: '463', nombre: 'PALMA per S.DURETA', destino: 'GENOVA per sDURETA', indeterminado: '0',
			primero: '06:30', ultimo: '23:10', frecuencia: '22',
			primeroSab: '06:30', ultimoSab: '23:10', frecuenciaSab: '28',
			primeroFest: '07:18', ultimoFest: '23:30', frecuenciaFest: '36',
			paradas: [80,195,219,492,50,51,52,53,54,55,56,131,132,133,134,135,1106,165,136,137,1060,139,140,141,142,1049,143]},

		{id: '464', nombre: 'GENOVA per sDURETA', destino: 'PALMA per S.DURETA', indeterminado: '0',
			primero: '06:36', ultimo: '23:45', frecuencia: '22',
			primeroSab: '06:36', ultimoSab: '23:45', frecuenciaSab: '28',
			primeroFest: '06:42', ultimoFest: '22:54', frecuenciaFest: '36',
			paradas: [143,785,784,89,90,91,908,714,715,168,170,171,172,173,174,175,176,177,96,97,98,100,101,102,103,104,105,106,107,108,981,110,80]},

		{id: '501', nombre: 'ALMUDAINA', destino: 'ALMUDAINA', indeterminado: '0',
			primero: '09:30', ultimo: '19:00', frecuencia: '20',
			primeroSab: '09:30', ultimoSab: '19:00', frecuenciaSab: '20',
			primeroFest: '09:30', ultimoFest: '19:00', frecuenciaFest: '20',
			paradas: [927,106,454,455,456,928,8,931,939,62,159,717,94,943,944,104,929]},

		{id: '521', nombre: 'CAN PASTILLA', destino: "S'ARENAL", indeterminado: '0',
			primero: '0', ultimo: '0', frecuencia: '0',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [473,675,822,676,806,677,678,680,681,682,683,684,685,686,687,773,688,689,690]},

		{id: '522', nombre: "S'ARENAL", destino: 'CAN PASTILLA', indeterminado: '0',
			primero: '0', ultimo: '0', frecuencia: '0',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [690,692,771,693,694,695,696,697,698,699,700,702,703,704,807,705,727,706,707,679,866,709,733]}


	];

	var lineas = [
	{id: '0', nombre: '--'},
	{id: '1', nombre: 'Aeroport - Ciutat - Port', color: '#44743F', itinerarios: [ {i: ['11','12']}]},
	{id: '2', nombre: 'Circumval·lació Centre Històric', color: '#B78DBA', itinerarios: [ {i: ['21','21']}]},
	{id: '3', nombre: 'Es pont d\'Inca - Illetes', color: '#F45BA4', itinerarios: [ {i: ['31','32']}]},
	{id: '4', nombre: '--'},
	{id: '5', nombre: 'Es Rafal Nou - Son Dureta', color: '#72C0D8', itinerarios: [ {i: ['51','52']}]},
	{id: '6', nombre: 'Polígon de Llevant - Son Espases', color: '#4F6D5E', itinerarios: [ {i: ['61','62']} ]},
	{id: '7', nombre: 'Son Rapinya - Son Gotleu', color: '#499C75', itinerarios: [ {i: ['71','72'], n:'Son Xigala'}, {i: ['73','74'], n:'Son Vida'}]},
	{id: '8', nombre: 'Son Roca', color: '#4E43B1', itinerarios: [ {i: ['81','82']}]},
	{id: '9', nombre: 'Son Espanyol', color: '#AB478F', itinerarios: [ {i: ['91','92']}]},
	{id: '10', nombre: 'Son Cladera - Sa Indioteria', color: '#623E5A', itinerarios: [ {i: ['101','102']} ]},
	{id: '11', nombre: 'Sa Indioteria', color: '#F3DB78', itinerarios: [ {i: ['111','112']} ]},
	{id: '12', nombre: 'Son Sardina - Polígon de Llevant', color: '#F1B543', itinerarios: [ {i: ['121','122']} ]},
	{id: '13', nombre: '--'},
	{id: '14', nombre: 'Son Ferriol', color: '#6173C7', itinerarios: [ {i: ['141','142'], n:'Son Ferriol/Sant Jordi'}, {i:['143','144'], n:"S'Hostalot"} ]},
	{id: '15', nombre: 'Platja de Palma - Plaça de la Reina', color: '#2474CC', itinerarios: [ {i: ['151','152']} ]},
	{id: '16', nombre: 'Establiments - Son Fuster', color: '#5496AF', itinerarios: [{i: ['161','162']} ]},
	{id: '17', nombre: '--'},
	{id: '18', nombre: 'Son Riera', color: '#716240', itinerarios: [ {i: ['181','182']}]},
	{id: '19', nombre: 'Universitat', color: '#5EA532', itinerarios: [ {i: ['191','192']}]},
	{id: '20', nombre: 'Sant Agustí - Son Espases', color: '#de544e', itinerarios: [ {i: ['201','202']}]},
	{id: '21', nombre: 'S\'Arenal - Aeroport', color: '#6c0007', itinerarios: [ {i: ['211','212']} ]},
	{id: '22', nombre: '--'},
	{id: '23', nombre: 'Palma - S\'Arenal - Cala Blava IB-29', color: '#B39633', itinerarios: [ {i: ['231','232'], n:'Cala Blava'}, {i:['233','234'], n:'Parc Aquàtic'}  ]},
	{id: '24', nombre: 'Son Llàtzet - SonHugo', color: '#605677', itinerarios: [ {i: ['241','242']} ]},
	{id: '25', nombre: 'Platja de Palma per autopista', color: '#666666', itinerarios: [ {i: ['251','252']}]},
	{id: '26', nombre: '--'},
	{id: '27', nombre: '--'},
	{id: '28', nombre: 'Son Llàtzer circular', color: '#E9A0C8', itinerarios: [ {i:['281'], n:'Circular Esquerra'}, {i:['282'], n:'Circular Dreta'} ]},
	{id: '29', nombre: 'Circular Son Espases', color: '#C4A695', itinerarios: [ {i:['291'], n:'Circular Dreta'}, {i:['292'], n:'Circular Esquerra'}]},
	{id: '30', nombre: 'Sant Joan de Déu', color: '#A04541', itinerarios: [ {i: ['301','302']} ]},
	{id: '31', nombre: 'Palma - S\'aranjassa - Sant Jordi', color: '#d3dd7d', itinerarios: [ {i: ['311','312']} ]},
	{id: '32', nombre: '--'},
	{id: '33', nombre: 'Son Espases', color: '#687981', itinerarios: [ {i: ['331','332']} ]},
	{id: '34', nombre: 'Son Espases - Es Rafal', color: '#969691', itinerarios: [ {i: ['341','342']} ]},
	{id: '35', nombre: '--'},
	{id: '36', nombre: '--'},
	{id: '37', nombre: '--'},
	{id: '38', nombre: '--'},
	{id: '39', nombre: '--'},
	{id: '40', nombre: '--'},
	{id: '41', nombre: 'Bus de Nit', color: '#F58E49', itinerarios: [ {i: ['411','412']}]},
	{id: '42', nombre: '--'},
	{id: '43', nombre: '--'},
	{id: '44', nombre: '--'},
	{id: '45', nombre: '--'},
	{id: '46', nombre: 'Gènova - Sant agustí', color: '#EEAA60', itinerarios: [ {i: ['461','462'], n:'Gènova pel Terreno'}, {i:['463','464'], n:'Gènova per Son Dureta'} ]},
	{id: '47', nombre: '--'},
	{id: '48', nombre: '--'},
	{id: '49', nombre: '--'},
	{id: '50', nombre: 'Bus Turístic', color: '#E84F4A', itinerarios: [ {i: ['501']}]},
	{id: '51', nombre: '--'},
	{id: '52', nombre: 'Tren Turístic', color: '#D04742', itinerarios: [ {i: ['521','522']} ]},
	];
/*
	var paradas = {};
	var itinerarios = {};
	var lineas = {};

	*/
	return{
		paradas: paradas,
		itinerarios: itinerarios,
		lineas: lineas
	};
})

//=================================================
// Factory TIBBUS
// - Paradas
// - itinerarios
// - Lineas
//=================================================
.factory('TIBBUS', function(){
	var paradas = [
		//{id:5000, nombre:"", lat:, lng:, otras:["100"], isTIB: true},
		{id:5006, nombre:"Ma-1 PK24", lat:39.5546, lng:2.398895, otras:["100", "102"], isTIB: true},
		{id:5007, nombre:"Ma-1 PK24", lat:39.555397, lng:2.399226, otras:["100", "102"], isTIB: true},
		{id:5008, nombre:"Ma-1 PK25", lat:39.54903, lng:2.395741, otras:["100", "102"], isTIB: true},
		{id:5009, nombre:"Ma-1 PK25", lat:39.54904, lng:2.395968, otras:["100", "102"], isTIB: true},
		{id:5011, nombre:"sa Llonja", lat:39.545563, lng:2.390162, otras:["100", "102"], isTIB: true},
		{id:5012, nombre:"Club Vela", lat:39.548332, lng:2.385585, otras:["100", "102"], isTIB: true},
		{id:5013, nombre:"Av. Sant Elm", lat:39.577736, lng: 2.389191, otras:["100"], isTIB: true},
		{id:5014, nombre:"Av. Jaume I", lat:39.57808, lng: 2.354449, otras:["100"], isTIB: true},
		{id:5015, nombre:"Av. Jaume I", lat:39.578007, lng: 2.354334, otras:["100"], isTIB: true},
		{id:5016, nombre:"Plaça de na Caragola", lat:39.579765, lng: 2.350404, otras:["100"], isTIB: true},
		{id:5017, nombre:"Plaça de Mossèn Sebastià Grau", lat:39.58299, lng: 2.349354, otras:["100"], isTIB: true},
		{id:5018, nombre:"Av. Sant Elm", lat:39.577633, lng: 2.389213, otras:["100"], isTIB: true},
		{id:5027, nombre:"s'Aluet", lat:39.546196, lng:2.39102, otras:["100", "102"], isTIB: true},
		{id:5029, nombre:"Cementeri", lat:39.580315, lng: 2.3791, otras:["100"], isTIB: true},
	];

	var itinerarios = [
		{id: '1001', nombre: 'Sant Elm', destino: 'Port d\'Andratx',
			primero: '0', ultimo: '0', frecuencia: '0',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [5017,5016,5015,5029,5018,5006,5008,5027,5012,5011]},

		{id: '1002', nombre: 'Port d\'Andratx', destino: 'Sant Elm',
			primero: '0', ultimo: '0', frecuencia: '0',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [5011,5009,5007,5013,5029,5014,5016,5017]}
	];

	var lineas = [
		{id: '100', nombre: 'Sant Elm - Port d\'Andratx', itinerarios: [ {i: ['1001','1002']}]}
	];

	return{
		paradas: paradas,
		itinerarios: itinerarios,
		lineas: lineas
	};
})

//=================================================
// Factory TIBTREN
// - Paradas
// - itinerarios
// - Lineas
//=================================================
.factory('TIBTREN', function(){
	var paradas = [
		{id:301, nombre:"Estació Intermodal", lat:39.57668, lng: 2.654753, otras:["M1","M2","T1","T2","T3"], isTIB: true},
		{id:302, nombre:"Jacint Verdaguer", lat:39.58032, lng:2.660273, otras:["M1","M2","T1","T2","T3"], isTIB: true},
		{id:303, nombre:"Son Costa/Son Fortesa", lat:39.584072, lng:2.665686, otras:["M1","M2","T1","T2","T3"], isTIB: true},
		{id:204, nombre:"Son Fuster", lat:39.59031, lng:2.674708, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:205, nombre:"Verge de Lluc", lat:39.596725, lng:2.686405, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:206, nombre:"Pont d'Inca", lat:39.598095, lng:2.691736, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:207, nombre:"Pont d'Inca Nou", lat:39.604477, lng:2.701453, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:208, nombre:"Polígon de Marratxí", lat:39.615536, lng:2.716893, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:209, nombre:"Marratxí", lat:39.62573, lng:2.725684, otras:["M2","T1","T2","T3"], isTIB: true},
		{id:210, nombre:"Es Caülls/ Festival Park", lat:39.632, lng:2.736499, otras:["T1","T2","T3"], isTIB: true},
		{id:211, nombre:"Santa Maria", lat:39.653206, lng:2.774241, otras:["T1","T2","T3"], isTIB: true},
		{id:212, nombre:"Consell/Alaró", lat:39.677387, lng:2.808254, otras:["T1","T2","T3"], isTIB: true},
		{id:213, nombre:"Binissalem", lat:39.69263, lng:2.841443, otras:["T1","T2","T3"], isTIB: true},
		{id:214, nombre:"Lloseta", lat:39.71623, lng:2.869052, otras:["T1","T2","T3"], isTIB: true},
		{id:215, nombre:"Inca", lat:39.71811, lng:2.905883, otras:["T1","T2","T3"], isTIB: true},
		{id:216, nombre:"Enllaç", lat:39.690754, lng:2.951291, otras:["T2","T3"], isTIB: true},
		{id:217, nombre:"Llubí", lat:39.711308, lng:2.993881, otras:["T2"], isTIB: true},
		{id:218, nombre:"Muro", lat:39.734325, lng:3.032301, otras:["T2"], isTIB: true},
		{id:219, nombre:"Sa Pobla", lat:39.766197, lng:3.029001, otras:["T2","T3"], isTIB: true},
		{id:220, nombre:"Sineu", lat:39.643585, lng:3.014528, otras:["T3"], isTIB: true},
		{id:222, nombre:"Petra", lat:39.617798, lng:3.110147, otras:["T3"], isTIB: true},
		{id:223, nombre:"Manacor", lat:39.570545, lng:3.202879, otras:["T3"], isTIB: true},
		{id:304, nombre:"Son Fuster Vell", lat:39.595455, lng:2.671543, otras:["M1"], isTIB: true},
		{id:305, nombre:"Son Castelló", lat:39.602608, lng:2.672195, otras:["M1"], isTIB: true},
		{id:306, nombre:"Gran Via Asima", lat:39.606476, lng:2.66863, otras:["M1"], isTIB: true},
		{id:307, nombre:"Camí dels Reis", lat:39.61027, lng:2.665381, otras:["M1"], isTIB: true},
		{id:308, nombre:"Son Sardina", lat:39.620686, lng:2.661261, otras:["M1"], isTIB: true},
		{id:309, nombre:"UIB", lat:39.63461, lng:2.647983, otras:["M1"], isTIB: true}
	];

	var itinerarios = [
		{id: 'T11', nombre: 'Palma', destino:"Inca", indeterminado: '1', color: '#005192',
			primero: '06:50', ultimo: '20:50', frecuencia: '60',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [301,302,303,204,205,206,207,208,209,210,211,212,213,214,215]},

		{id: 'T12', nombre: 'Inca', destino:"Palma", indeterminado: '1', color: '#005192',
			primero: '06:37', ultimo: '21:37', frecuencia: '60',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [215,214,213,212,211,210,209,208,207,206,205,204,303,302,301]},

		{id: 'T21', nombre: 'Palma', destino:"Sa Pobla", indeterminado: '1', color: '#005192',
			primero: '05:35', ultimo: '21:35', frecuencia: '60',
			primeroSab: '06:40', ultimoSab: '21:40', frecuenciaSab: '60',
			primeroFest: '06:40', ultimoFest: '21:40', frecuenciaFest: '60',
			paradas: [301,302,303,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219]},

		{id: 'T22', nombre: 'Sa Pobla', destino:"Palma", indeterminado: '1', color: '#005192',
			primero: '06:56', ultimo: '21:56', frecuencia: '60',
			primeroSab: '08:07', ultimoSab: '22:07', frecuenciaSab: '60',
			primeroFest: '08:07', ultimoFest: '22:07', frecuenciaFest: '60',
			paradas: [219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,303,302,301]},

		{id: 'T31', nombre: 'Palma', destino:"Manacor", indeterminado: '1', color: '#005192',
			primero: '06:15', ultimo: '22:15', frecuencia: '60',
			primeroSab: '06:10', ultimoSab: '22:10', frecuenciaSab: '60',
			primeroFest: '06:10', ultimoFest: '22:10', frecuenciaFest: '60',
			paradas: [301,302,303,204,205,206,207,208,209,210,211,212,213,214,215,216,220,222,223]},

		{id: 'T32', nombre: 'Manacor', destino:"Palma", indeterminado: '1', color: '#005192',
			primero: '06:23', ultimo: '22:23', frecuencia: '60',
			primeroSab: '06:24', ultimoSab: '22:24', frecuenciaSab: '60',
			primeroFest: '06:24', ultimoFest: '22:24', frecuenciaFest: '60',
			paradas: [223,222,220,216,215,214,213,212,211,210,209,208,207,206,205,204,303,302,301]},

		{id: 'M11', nombre: 'Palma', destino:"UIB", indeterminado: '1', color: '#fd0',
			primero: '06:00', ultimo: '01:45', frecuencia: '13',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [301,302,303,304,305,306,307,308,309]},

		{id: 'M12', nombre: 'UIB', destino:"Palma", indeterminado: '1', color: '#fd0',
			primero: '06:00', ultimo: '01:45', frecuencia: '13',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [309,308,307,306,305,304,303,302,301]},

		{id: 'M21', nombre: 'Palma', destino:"Marratxí", indeterminado: '1', color: '#fd0',
			primero: '06:00', ultimo: '22:00', frecuencia: '30',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [301,302,303,204,205,206,207,208,209]},

		{id: 'M22', nombre: 'Marratxí', destino:"Palma", indeterminado: '1', color: '#fd0',
			primero: '06:20', ultimo: '22:20', frecuencia: '30',
			primeroSab: '0', ultimoSab: '0', frecuenciaSab: '0',
			primeroFest: '0', ultimoFest: '0', frecuenciaFest: '0',
			paradas: [209,208,207,206,205,204,303,302,301]}
	];

	var lineas = [
		{id: 'T1', nombre: 'Palma - Inca', color: '#005192', itinerarios: [ {i: ['T11','T12']}]},
		{id: 'T2', nombre: 'Palma - Sa Pobla', color: '#005192', itinerarios: [ {i: ['T21','T22']}]},
		{id: 'T3', nombre: 'Palma - Manacor', color: '#005192', itinerarios: [ {i: ['T31','T32']}]},
		{id: 'M1', nombre: 'Palma - UIB', color: '#fd0', itinerarios: [ {i: ['M11','M12']}]},
		{id: 'M2', nombre: 'Palma - Marratxí', color: '#fd0', itinerarios: [ {i: ['M21','M22']}]}
	];

	return{
		paradas: paradas,
		itinerarios: itinerarios,
		lineas: lineas
	};
})


.filter('colorLinea', function(){
	return function(text){

		var colores = {
		1: "#44743F",
		2: "#B78DBA",
		3: "#F45BA4",
		4:"-",
		5: "#72C0D8",
		6: "#4F6D5E",
		7: "#499C75",
		8: "#4E43B1",
		9: "#AB478F",
		10: "#623E5A",
		11: "#F3DB78",
		12: "#F1B543",
		13:"-",
		14: "#6173C7",
		15: "#2474CC",
		16: "#5496AF",
		17:"-",
		18: "#716240",
		19: "#5EA532",
		20: "#de544e",
		21: "#6c0007",
		22:"-",
		23: "#B39633",
		24: "#605677",
		25: "#666666",
		26:"-",
		27:"-",
		28: "#E9A0C8",
		29: "#C4A695",
		30: "#A04541",
		31: "#d3dd7d",
		32:"-",
		33: "#687981",
		34: "#969691",
		35:"-",
		36:"-",
		37:"-",
		38:"-",
		39:"-",
		40:"-",
		41: "#F58E49",
		42:"-",
		43:"-",
		44:"-",
		45:"-",
		46: "#EEAA60",
		47:"-",
		48:"-",
		49:"-",
		50: "#E84F4A",
		51:"-",
		52: "#D04742",
	};

		return colores[parseInt(text)];
	}
})

.filter('diaSiguiente', function(){
	return function(text){

		var dias = [' Dom', ' Lun', ' Mar', ' Mie', ' Jue', ' Vie', ' Sab'];

		var oneWeekAgo = new Date();
		oneWeekAgo.setDate(oneWeekAgo.getDate() + parseInt(text));
		text = dias[oneWeekAgo.getDay()];

		return text;
	};
})

.filter('tiempo', function(){
	return function(text){
		var secs = parseInt(text);
		var hours = Math.floor(secs / (60 * 60));

		var divisor_for_minutes = secs % (60 * 60);
		var minutes = Math.floor(divisor_for_minutes / 60);

		var divisor_for_seconds = divisor_for_minutes % 60;
		var seconds = Math.ceil(divisor_for_seconds);

		if(secs <= 59){
			if(secs === 1){
				text = seconds + " segundo";
			}else{
				text = seconds + " segundos";
			}

		}else{
			text = minutes + " minutos " + seconds + " seg";
		}
		return text;
	};
})

.filter('tiempoParada', function(){
	return function(text){
		if(isNaN(text)){
			text = "Sin info";
		}else{
			var secs = parseInt(text);
			//var hours = Math.floor(secs / (60 * 60));

			var divisor_for_minutes = secs % (60 * 60);
			var minutes = Math.floor(secs / (60));

			var divisor_for_seconds = divisor_for_minutes % 60;
			var seconds = Math.ceil(divisor_for_seconds);

			if(secs <= 120){

				if(secs <= 30){ text = "Llegando (~30 seg)"; }
				if((secs > 30) && (secs <= 60)){ text = "Llegando (~1:00 min)"; }
				if((secs > 60) && (secs <= 90)){ text = "Llegando (~1:30 min)"; }
				if((secs > 90) && (secs <= 120)){ text = "Llegando (~2:00 min)"; }

				if(secs === 0){ text = "En parada"; }

				/*
				if(secs === 1){
					text = seconds + " segundo";
				}else{
					if(secs === 0){
						text = "En parada";
					}else{
						text = seconds + " segundos";
					}

				}
				*/
			}else{
				text = minutes + " minutos ";// + seconds + " seg";
			}
		}
		return text;
	};
})


.filter('estimacionTIB', function($rootScope){
	return function(text){
		console.log(text);
		var today = new Date();
		var festivo, last, hora = "";
		if($rootScope.server && ($rootScope.server.es_festivo == 1)){ festivo = true; }else{ festivo = false; }

		//'#005192' t1t2t3
		//'#fd0' m1m2

		if(today.getDay() === 6){
			hora = text.primeroSab;
			horaLast = text.ultimoSab;
			frecuencia = parseInt(text.frecuenciaSab);
		}else{
			if((today.getDay() === 0) || festivo){
				hora = text.primeroFest;
				horaLast = text.ultimoFest;
				frecuencia = parseInt(text.frecuenciaFest);
			}else{
				hora = text.primero;
				horaLast = text.ultimo;
				frecuencia = parseInt(text.frecuencia);
			}
		}

		h = hora.split(":");
		d = new Date( today.getFullYear(), today.getMonth(), today.getDate(), h[0], h[1], '00'); // Hora del primer Tren

		hLast = horaLast.split(":");
		// Si la hora pertenece a la madrugada, ponemos un dia mas en  la variable 'dia'
		if (hLast[0] < "05"){ var dia = today.getDate() +1; }else{ var dia = today.getDate(); }
		dLast = new Date( today.getFullYear(), today.getMonth(), dia, hLast[0], hLast[1], '00'); // Fecha del ultmio tren

		
		//Si ahora es de madrugada, se resta un dia al primer tren, y al último tren
		if(today.getHours() < "05"){
			d.setDate(d.getDate() - 1);
			dLast.setDate(dLast.getDate() - 1);
		}

		last = 0; // <- Puntero necesario en caso de que no haya bucle
		//Cálculo del siguiente tren desde el primero hasta llegar al último
		//console.log("primero",d);
		//console.log("now",today);
		//console.log("last",dLast);

		for (i = d; ((i <= today)&&(today<=dLast)); i.setMinutes(i.getMinutes() + frecuencia)) {
			last = i;
		}

		d = new Date( today.getFullYear(), today.getMonth(), today.getDate(), h[0], h[1], '00'); //Restauramos la variable 'd' para tener el primer tren
		/* SE MODIFICA EN El BUCLE(punteros) */

		// No ha entrado en bucle porque no hay trenes a esa hora
		if (last == 0) { 
			prev = "Sin tráfico hasta las "+ hora;
		}else{
			//next = next.getHours()+":"+next.getMinutes();
			// Resta un tren para calcular la última salida
			last.setMinutes(last.getMinutes() - frecuencia);
			prev = last;
			prev = "Última salida de "+text.nombre+": " + prev.getHours()+":"+(prev.getMinutes()<10?'0':'') + prev.getMinutes();
		}
		return prev;
	};
})

.filter('version', function(){
	return function(text){
			var v = 1.0;
			text = "Última actualización";
			return text;
		};
	})

.filter('htmlToPlaintext', function() {
		return function(text) {
			return String(text).replace(/<[^>]+>/gm, '');
		};
	})

.filter('sharear', function() {
		return function(text) {
			text = String(text).replace(/<[^>]+>/gm, '');
			text = text.substring(0,110) +"...";
			return text;
		};
	})

.filter('buscar', function($rootScope, EMT, TIBTREN){

	function removeAccents(value) {
		return value

		// Abreviaciones
		//============
		.replace('ctra.', 'carretera')
		.replace('cra.', 'carretera')
		.replace('av.', 'avenida')
		.replace('avinguda', 'avenida')
		.replace('pl.', 'plaza')
		.replace('pol.', 'poligono')

		.replace(/á/g, 'a').replace(/à/g, 'a')
		.replace(/é/g, 'e').replace(/è/g, 'e')
		.replace(/í/g, 'i').replace(/ì/g, 'i')
		.replace(/ó/g, 'o').replace(/ò/g, 'o')
		.replace(/ú/g, 'u').replace(/ù/g, 'u')
		.replace(/ç/g, 'c').replace(/s/g, 'c')
		.replace(/q/g, 'c').replace(/z/g, 'c')
		.replace(/v/g, 'b')
		.replace(/y/g, 'i')
		.replace(/g/g, 'j')
		.replace(/l'/g, 'l')//.replace(/ll/g, 'y')
		.replace(/:/g, '');
	}

	return function(arr, searchString){

		if(searchString !== ""){
			var result = [];

			//=================================================================
			// Funcionamiento principal del buscador
			// ------------------------
			// Comparación de cada elemento {nombre} con la searchString
			//=================================================================

			if(isNaN(searchString)){
				if(searchString.length > 0){
					searchString = searchString.toLowerCase();
					searchString = removeAccents(searchString);

					//=======
					// Inyecta EMT en resultados
					//=======
					if($rootScope.user.EMT){
						angular.forEach(EMT.paradas, function(item){

							var comparador = item.nombre.toLowerCase();
							comparador = removeAccents(comparador);

							if(comparador.indexOf(searchString) !== -1){
								// item.nombre = comparador; // <-- Para poder leer la transformación
								result.push(item);
							}
						});
					}else{

					}

					//=======
					// Inyecta TIB en resultados
					//=======
					if($rootScope.user.TIB){
						angular.forEach(TIBTREN.paradas, function(item){

							var comparador = item.nombre.toLowerCase();
							comparador = removeAccents(comparador);

							if(comparador.indexOf(searchString) !== -1){
								result.push(item);
							}
						});
					}
				}else{
					//Reset array de resultados si no quiere EMT
					// Nota: desactivado a causa de if(searchString.length > 0){
					arr = [];
					result = arr;
				}

			}else{
				searchString = parseInt(searchString, 10);
				searchString.toString();

				//=======
				// Inyecta EMT en resultados
				//=======
				if($rootScope.user.EMT){
					angular.forEach(EMT.paradas, function(item){
						if(item.id === searchString){
							result.push(item);
						}
					});
				}

				//=======
				// Inyecta TIB en resultados
				//=======
				if($rootScope.user.TIB){
					angular.forEach(TIBTREN.paradas, function(item){
						if(item.id === searchString){
							result.push(item);
						}
					});
				}
			}

			return result;

		}else{	return arr;	}

	};

});
