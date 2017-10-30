
angular.module('hotel.client') 
    .controller('ClientController', ClientController);

    ClientController.$inject = ['clientService']; 

    function ClientController (clientService) 
    {
        var vm = this;
        vm.state ='create';
        vm.changeState = changeState;
        vm.afficher=afficher;

        function changeState(etat)
        {
            vm.state = etat;
            console.log('cava');
        }
        function afficher(){
            //clientService.afficher().response.data;

        }


     
    }