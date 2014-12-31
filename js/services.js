angular.module('PL.services', [])

//=================================================
// contactoEMT
// $http call
//=================================================
.factory('contactoEMT',['$http',function($http){
	return {
		getParada : function(id){
			return $http.get('http://www.emtpalma.es/EMTPalma/Front/pasoporparada.es.svr?p=' + id + '&callback=JSON_CALLBACK');
		}
	};
}])

//=================================================
// API CALLS
// http://gasparsabater.com/api/
//=================================================
.factory('API',['$http', '$rootScope',function($http, $rootScope){
	return {
		getPL : function(){
			return $http.get('http://www.emtpalma.es/EMTPalma/Front/pasoporparada.es.svr?p=' + id + '&callback=JSON_CALLBACK');
		},
		getEMT : function(v){
			return $http.get('http://gasparsabater.com/api/getEMT/'+v);
		}
	};
}])


//=================================================
// InfoItinerario
// - getInfo (nombreLinea, idLinea, isTib)
// - getLinea (nombreLinea, idLinea, isTib)
// - getParada (idParada, isTIB)
// - getIncidencias (idLinea)
//=================================================
.factory('InfoItinerario', ['EMT','TIBTREN','$rootScope', function(EMT,TIBTREN,$rootScope){
	return{
		getInfo: function(nombreLinea, idLinea, isTIB){

			if(isTIB){
				var itinerarios = TIBTREN.itinerarios;
			}else{
				var itinerarios = EMT.itinerarios;
			}

			var resultado = [];

			if(nombreLinea){
				nombreLinea.toUpperCase();

				angular.forEach(itinerarios, function(item){
					if(item.nombre.toUpperCase() === nombreLinea){
						resultado = item;
					}
				});
			}else{
				angular.forEach(itinerarios, function(item){
					//console.log(item);
					if(item.id === idLinea){
						resultado = item;
					}
				});
			}

			return resultado;

		},

		getLinea: function(nombreLinea, idLinea, isTIB){

			if(isTIB){
				var lineas = TIBTREN.lineas;
			}else{
				var lineas = EMT.lineas;
			}

			var resultado = [];

			if(nombreLinea){
				nombreLinea.toUpperCase();

				angular.forEach(lineas, function(item){
					if(item.nombre.toUpperCase() === nombreLinea){
						resultado = item;
					}
				});
			}else{
				angular.forEach(lineas, function(item){
					//console.log(item);
					if(item.id === idLinea){
						resultado = item;
					}
				});
			}

			return resultado;

		},
		getParada: function(idParada, isTIB){
			idParada = parseInt(idParada);
			var encontrado = false;

			if(isTIB){
				var paradas = TIBTREN.paradas;
			}else{
				var paradas = EMT.paradas;
			}

			angular.forEach(paradas, function(item){
				if(!encontrado){
					if(item.id === idParada){
						encontrado = item;
					}
				}
			});

			return encontrado;

		},
		getItinerarios: function(idParada){
			idParada = parseInt(idParada);
			var encontrado = false;
			var itinerarios = TIBTREN.itinerarios;
			var lineas = [];

			angular.forEach(itinerarios, function(item){
				encontrado = false;
				angular.forEach(item.paradas, function(parada){
					if(!encontrado){
						if(parada == idParada){
							encontrado = item;
							//console.log(item);
							lineas.push(item);
						}
					}

				});
			});

			return lineas;

		},
		getIncidencias: function(idLinea, full){

			idLinea = parseInt(idLinea);
			var resultado = [];
			var num_avisos = 0;

			//por cada item de incidencia, se extraen las lineas
			angular.forEach($rootScope.server.incidencias, function(item){

				var lineas = ""+item.lineas;
				lineas.toString();
				var obj = lineas.split(",");


				obj.forEach(function(entry) {
					if(idLinea === parseInt(entry)){
						if(full){
							resultado.push(item);
						}else{
							num_avisos++;
						}
						//resultado.push(item);
						//console.log(entry);


					}
				});

			});

			if(full){
				return resultado;
			}else{
				return num_avisos;
			}


		}
	};
}])

//=================================================
// FavTop
// - incrementar (idParada)
// - recientes (ultima)
// - checkFavorito (idParada)
// - ToggleFavorito (idParada)
//=================================================
.factory('FavTop', function($rootScope){
	return{
		incrementar: function(idParada, object, nombreParada){

			var clean = true;
			var resultado = object;
			//console.log("-----------------------------");
			//console.log(object);
			angular.forEach(resultado, function(item){
				if(item.id === idParada){
					//console.log("si: "+item.parada);
					item.clicks++;
					//console.log(item.clicks);
					clean = false;
				}else{
					//console.log("no"+item.parada);
				}
			});

			if(clean === true){
				//console.log("Añadido: "+idParada);
				resultado.push({id: idParada, clicks: 1, nombre: nombreParada});
			}
			//console.log("-----------------------------");
			return resultado;
		},
		recientes: function(ultima, recientes){

			//Break if corrupt
			if(!ultima.nombre){return recientes;}

			angular.forEach(recientes, function(item){
				if(item.id === ultima.id){
					recientes.splice(recientes.indexOf(item),1);
				}
			});

			//inserta ultima parada en el inicio del objeto
			recientes.splice(0, 0, ultima);


			//elimina la ultima si la cadena es mayor a 10
			if(recientes.length > 10){ recientes.splice(10, 1); }

			return recientes;
		},
		checkFavorito: function(idParada){
			var fav = false;

			angular.forEach($rootScope.favoritos, function(item){
				if(fav === false){
					if(item.id === idParada){
						fav = true;
					}
				}
			});

			return fav;
		},
		toggleFavorito: function(parada, favoritos){
			var encontrado = false;

			angular.forEach(favoritos, function(item){
				if(item.id === parada.id){ encontrado = item; }
			});

			if(encontrado === false){
				//inserta la parada en favoritos
				//console.log(parada);
				favoritos.push(parada);
			}else{
				favoritos.splice(favoritos.indexOf(encontrado), 1);
			}

			return favoritos;
			//console.log(favoritos);
		}
	};
})


//=================================================
// El Tiempo
// $http call
//=================================================
.factory('elTiempo',['$http', '$rootScope', 'localstorage', function($http, $rootScope, localstorage){
	return {
		getTiempo : function(){

			var elTiempo = localstorage.getObject('elTiempo');

			function getApiWeather(pos){
				if(pos === false){
					console.log("Llamando api con coordenadas de Palma");
					var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=39.573793&lon=2.6406497&cnt=4&mode=json&units=metric';
				}else{
					console.log("Llamando api con coordenadas "+pos.coords.latitude+", "+pos.coords.longitude);
					var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+pos.coords.latitude+'&lon='+pos.coords.longitude+'&cnt=4&mode=json&units=metric';
				}

				$http({method: 'GET', url: url}).
				success(function(data) {

					var elTiempo = {
						date_download: Date.now(),
						list: data.list
					};

					localstorage.setObject('elTiempo', elTiempo);
					$rootScope.tiempo = elTiempo;

				}).error(function(data, status, headers, config) {

					//console.log("error con api tiempo");

				});

			}

			function getOpenweather(){
				//console.log("get Weather");
				navigator.geolocation.getCurrentPosition(function(pos) {
					getApiWeather(pos);
				}, function(error) {
					getApiWeather(false);
				},{maximumAge: 30000, timeout:7000});
			}


			if(elTiempo.date_download){
				//console.log("localstorage");
				if((Date.now() - elTiempo.date_download) > (3 * 60 * 60 * 1000)){
					//console.log("localstorage pero old");
					getOpenweather();
				}else{
					//console.log("localstorage menos de 3h");
					$rootScope.tiempo = elTiempo;
				}
			}else{
				//console.log("sin localstorage");
				getOpenweather();
			}

			return false;
		}
	};
}])


//=================================================
// Google Maps
// - getLocation
//=================================================
.factory('gMaps', function($rootScope, $q){
	return{
		getLocation: function(){
			var pos = false;
			var deferred = $q.defer();

			navigator.geolocation.getCurrentPosition(function(pos) {
				deferred.resolve(pos);
			}, function(error) {
				deferred.reject(error);
			},{maximumAge: 900000, timeout:5000, enableHighAccuracy: true}); //age, milisenconds

			return deferred.promise;
		}
	};
})

//=================================================
// Publicidad
// - getTipo (tipoPublicidad)
//=================================================
.factory('Publicidad', function($rootScope){
	return{
		getTipo: function(tipoPublicidad){

			var resultado = [];
			var encontrado = false;

			angular.forEach($rootScope.server.promocion, function(item){

				if(!encontrado){
					if(item.tipo == tipoPublicidad){
						if(tipoPublicidad === "home"){
							resultado = item;
							encontrado = true;
						}
					}
				}

			});

			if(!encontrado){
				return false;
			}else{
				return resultado;
			}

		},
		getParada: function(idParada){

			var resultado = [];
			var encontrado = false;

			angular.forEach($rootScope.server.promocion, function(item){

				var lineas = ""+item.idParada;
				lineas.toString();
				var obj = lineas.split(",");

				obj.forEach(function(entry) {

					if(entry == idParada){
						resultado.push(item);
						console.log("publicidad encontrada para parada: ",entry);
					}

				});

			});

			return resultado;
		},
		getId: function(idPublicidad){

			var resultado = [];
			var encontrado = false;

			angular.forEach($rootScope.server.promocion, function(item){


				if(!encontrado){
					if(item.id == idPublicidad){
						resultado = item;
						encontrado = true;
					}
				}

			});

			return resultado;
		}
	};
})

//=================================================
// localstorage
// - set
// - get
// - setObject
// - getObject
//=================================================
.factory('localstorage', ['$window', function($window) {
	return {
		set: function(key, value) {
			$window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
			angular.forEach(value, function(item){
				delete item.$$hashKey;
			});
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
			return JSON.parse($window.localStorage[key] || '{}');
		}
	};
}])


//=================================================
// DB
// - init
// - query
// - fetchAll
// - fetch
//=================================================
.factory('DB', function($rootScope, $q, DB_CONFIG) {
	var self = this;
	self.db = null;

	self.init = function() {

		if($rootScope.platform == "pc"){
			self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);
		}else{
			self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name, bgType: 1 });
		}

		/*
		var query = 'DROP TABLE emt';
		self.query(query);
		*/

		angular.forEach(DB_CONFIG.tables, function(table) {
			var columns = [];

			angular.forEach(table.columns, function(column) {
				columns.push(column.name + ' ' + column.type);
			});

			var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
			self.query(query);

			console.log('+ App: Table ' + table.name + ' initialized');
		});

	};

	self.query = function(query, bindings) {
		bindings = typeof bindings !== 'undefined' ? bindings : [];
		var deferred = $q.defer();

		self.db.transaction(function(transaction) {
			transaction.executeSql(query, bindings, function(transaction, result) {
				deferred.resolve(result);
			}, function(transaction, error) {
				deferred.reject(error);
			});
		});

		return deferred.promise;
	};

	self.fetchAll = function(result) {
		var output = [];

		for (var i = 0; i < result.rows.length; i++) {
			output.push(result.rows.item(i));
		}

		return output;
	};

	self.fetch = function(result) {
		return result.rows.item(0);
	};

	return self;
})


//=================================================
// UpdateDB
// - updateAPI -> Inserts all data to SQL
// http://stackoverflow.com/questions/418898/sqlite-upsert-not-insert-or-replace/4330694#4330694
//=================================================
.factory('UpdateDB', function($rootScope, DB, EMTdb, localstorage){
	var self = this;
	var updateProgress = 1;

	self.EMT = function(respuesta){

		EMTdb.prepareParadas();
		updateProgress = respuesta.paradas.length + respuesta.lineas.length + respuesta.itinerarios.length;

		if(respuesta.updated !== true){
			angular.forEach(respuesta.lineas, function(item) {

				//| Update emt_lineas
				//+--------------------------------
				DB.query('INSERT OR REPLACE INTO emt_lineas (id, nombre, color, itinerarios) VALUES (?,?,?,?)',[item.id, item.nombre, item.color, item.itinerarios])
				.then(function(result){
					//console.log("Insert ok", result);
					updateProgress--;
					$rootScope.updateProgress = updateProgress;
					$rootScope.updateMatrix.unshift(item.nombre);
					//return DB.fetchAll(result);
				}, function(err){ console.log(err); });

			});

			angular.forEach(respuesta.itinerarios, function(item) {

				//| Update emt_lineas
				//+--------------------------------
				DB.query('INSERT OR REPLACE INTO emt_itinerarios (id, nombre, destino, indeterminado, primero, ultimo, frecuencia, primeroSab, ultimoSab, frecuenciaSab, primeroFest, ultimoFest, frecuenciaFest, paradas) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
					[item.id, item.nombre, item.destino, item.indeterminado, item.primero, item.ultimo, item.frecuencia, item.primeroSab, item.ultimoSab, item.frecuenciaSab, item.primeroFest, item.ultimoFest, item.frecuenciaFest, item.paradas])
				.then(function(result){
					console.log("Insert ok", result);
					updateProgress--;
					$rootScope.updateProgress = updateProgress;
					$rootScope.updateMatrix.unshift(item.nombre);
					//return DB.fetchAll(result);
				}, function(err){ console.log(err); });

			});

			angular.forEach(respuesta.paradas, function(item) {

				//| Update emt_paradas
				//+--------------------------------
				DB.query('INSERT OR REPLACE INTO emt_paradas (id, nombre, lat, lng, otras, clicks) VALUES (?,?,?,?,?,COALESCE((SELECT clicks FROM emt_paradas WHERE id = '+item.id+'), 0))',[item.id, item.nombre, item.lat, item.lng, item.otras])
				.then(function(result){
					console.log("Insert ok", result);
					updateProgress--;
					$rootScope.updateProgress = updateProgress;
					$rootScope.updateMatrix.unshift(item.nombre);
					//return DB.fetchAll(result);
					if(updateProgress == 0){
						//console.log("SYNC FINALIZADO");
						$rootScope.updateExists = false;
						EMTdb.prepareParadas();
					}
				}, function(err){ console.log(err); });


			});

			$rootScope.user.EMTv = respuesta.version;
			localstorage.setObject('user', $rootScope.user);

		}else{
			console.log("+ App: db-EMT updated");
		}

	};

	return self;
})

//=================================================
// EMTdb
// - updateAPI -> Inserts all data to SQL
// http://stackoverflow.com/questions/418898/sqlite-upsert-not-insert-or-replace/4330694#4330694
//=================================================
.factory('EMTdb', function($rootScope, DB) {
	var paradas = false, top = false, searchTop = false, wrap = false, rand = 0;
	var self = this;

	self.prepareParadas = function() {
		console.log("+ App: Buffer paradas");
		DB.query('SELECT * FROM emt_paradas').then(function(result){ paradas = DB.fetchAll(result); });
		DB.query('SELECT * FROM emt_paradas WHERE clicks >= ?', ['2']).then(function(result){
			top = DB.fetchAll(result);
			searchTop = DB.fetchAll(result);
			if(top.length <= 5){
				rand = Math.floor(Math.random() * (paradas.length - 200)) + 5;
				for (var i = (5-top.length); i >= 0; i--) {
					searchTop.push(paradas[(rand + (i*7))]);
				};
			}
			//console.log(searchTop);
			//console.log("top",top);
		});

	};

	self.getParada = function(id) {
		return DB.query('SELECT * FROM emt_paradas WHERE id = ?', [id])
		.then(function(result){
			return DB.fetch(result);
		});
	};

	self.getParadas = function() { return paradas; };
	self.getTop = function() { return top; };
	self.searchTop = function() { return searchTop; };

	self.clicks = function(id) {
		return DB.query('UPDATE emt_paradas SET clicks=clicks+1 WHERE id = ?', [id])
		.then(function(result){
			self.prepareParadas();
		});
	};

	self.resetClicks = function(id) {
		return DB.query('UPDATE emt_paradas SET clicks=0 WHERE id = ?', [id])
		.then(function(result){
			self.prepareParadas();
		});
	};

	self.getItinerarioByNombre = function(nombre){
		return DB.query('SELECT * from emt_itinerarios where destino = ?', [nombre])
		.then(function(result){
			return DB.fetch(result);
		});
	};

	self.getNearest = function(lat,lng,rad){
		var latPlus = lat + 0.0025,latMinus = lat - 0.0025;
		var lngPlus = lng + 0.0025,lngMinus = lng - 0.0025;

		return DB.query('SELECT * from emt_paradas where (lat BETWEEN '+latMinus+' AND '+latPlus+') AND (lng BETWEEN '+lngMinus+' AND '+lngPlus+')', [])
		.then(function(result){
			return DB.fetchAll(result);
		});
	};

	return self;
})

.service('shareVar', function (){
	var property = 'First';

	return {
		getProperty: function () {
			return property;
		},
		setProperty: function(value) {
			property = value;
		}
	};
});
