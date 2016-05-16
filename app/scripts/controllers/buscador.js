'use strict';
app.controller("BuscadorCtrl", ["$scope","$http", function ($scope,$http) {
  var self = this;
  
  this.ingredientesObj = {};
  $scope.ingredientes = [];
  $scope.ingredientesSeleccionados = [];
  this.recetas = {};
  $scope.resultados = [];
   
  //Calculo de las recetas que coinciden con los ingredientes seleccionados
  $scope.$watchCollection("ingredientesSeleccionados", function( newValue, oldValue ) {
    //alert("El array ha cambiado "+newValue+" "+oldValue);
    $scope.resultados = [];
    if ($scope.ingredientesSeleccionados.length > 0){
      var seleccionados = [];
      $scope.ingredientesSeleccionados.forEach(function(ingrediente){
        seleccionados.push(self.ingredientesObj[ingrediente]);
      });
      
      var listaRecetas = seleccionados.shift().filter(function(v) {
        return seleccionados.every(function(a) {
          return a.indexOf(v) !== -1;
        });
      });
      angular.forEach(listaRecetas, function(receta){
        $scope.resultados.push(self.recetas[receta]);
      });
    }
  });

  
  //Cargamos los datos.
  $http.get("/data/buscador.json").then(function(res){
    self.ingredientesObj = res.data.ingredientes;
    angular.forEach(self.ingredientesObj, function(value, key){    
      if (key != ""){
        $scope.ingredientes.push(key);
      }
    });
    self.recetas = res.data.recetas;    
  });
  
  //Cuando seleccionamos un ingrediente
  $scope.seleccionIngrediente = function(ingrediente){
    var index = $scope.ingredientesSeleccionados.indexOf(ingrediente);
    if (index > -1) {
      $scope.ingredientesSeleccionados.splice(index, 1);
    }else{
      $scope.ingredientesSeleccionados.push(ingrediente);
    }
    
    
  }
  
  $scope.seleccionado = function(ingrediente){
    var index = $scope.ingredientesSeleccionados.indexOf(ingrediente);
    if (index > -1) {
      return "btn-success";
    }else{
      return "btn-danger";
    }
    
  };
}]);