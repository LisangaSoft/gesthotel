angular.module('clientSerMod', [])
    .factory('clientService', ['$http', function ($http) {
       var vm=this;
       vm.afficher=afficher;

         function afficher() {
            var url = 'http://localhost:3001/employer'
            return $http.get(url)
                .then(function (response) {
                    console.log('la reponse :'+response.data);
                });
        };

    

        
    }]);
