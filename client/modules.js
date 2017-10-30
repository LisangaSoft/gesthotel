
angular.module('hotel.reservation', []); 
angular.module('hotel.client', []); 

angular.module('hotel', ['hotel.reservation','hotel.client', 'ngRoute']);