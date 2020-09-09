(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
            });
            console.log(response);
            return response; 
        };

  
 
    }

})();
