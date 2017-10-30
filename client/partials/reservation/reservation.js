
angular.module('hotel.reservation') 
    .controller('ReservationController', ReservationController);

    ReservationController.$inject = []; 
    function ReservationController () 
    {
        var vm = this;
        vm.state ='create';
        vm.changeState = changeState;
        
        function changeState(etat)
        {
            vm.state = etat;
            console.log('cava');
        }
    }