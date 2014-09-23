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


.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  };
})

.service('shareVar', function () {
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
