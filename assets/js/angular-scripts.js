var app = angular.module('concursoDasAguas', []);
app.controller('concursoDasAguas', function ($scope) {

  $scope.cadastro = [];

  $scope.cadastrarPessoa = () => {

    $scope.cadastro.push({ 
      nome: $scope.cadastro.nome, 
      foto: $scope.cadastro.foto, 
      local: $scope.cadastro.local, 
      data: $scope.cadastro.data, 
    });


    $scope.cadastro.nome = '';
    $scope.cadastro.foto = '';
    $scope.cadastro.local = '';
    $scope.cadastro.data = '';
    $scope.cadastro.termos = false;

  };

  $scope.removerPessoa = $index => {
    $scope.cadastro.splice($index, 1);
  };

});