(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuApiService', MenuApiService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    //Directive
    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            //bindToController: true,
            //controller: NarrowItDownController,
           // controllerAs: "narrow",
            scope: {
                found: '<',
                onRemove: '&',
                empty: '<'
            }
        };
        return ddo;
    }

    //Controller
    NarrowItDownController.$inject = ['MenuApiService'];
    function NarrowItDownController(MenuApiService) {
        var narrow = this;

        narrow.narrowFilter = "";
        narrow.resultMessage = "";
        narrow.result = true;

        narrow.getItems = function () {
            narrow.resultMessage = "";
            if (narrow.narrowFilter !== "") {
                //narrow.result = false;
                var promise = MenuApiService.getMatchedMenuItems(narrow.narrowFilter);
                promise.then(function (result) {
                    //console.log("Antes de la asignación 1");
                    narrow.foundItems = result;
                    //console.log("Despues de la asignación 1");
                    //console.log("Largo: ", narrow.foundItems.lenght);
                    if (narrow.foundItems.lenght > 0) {
                        narrow.result = true;
                        //console.log("Encontré algo");
                    }
                    else {
                        narrow.result = false;
                        //console.log("no encontré nada 2");
                    }
                }).catch(function (error) {
                    console.log("An error occur");
                });
            }
            else {
                narrow.foundItems = [];
                //narrow.resultMessage = MenuApiService.emptyMessage();
                narrow.result = false;
                console.log("no encontré nada");
            }
        }

        narrow.removeItem = function (index) {
            console.log("indice: ", index);
            return MenuApiService.removeItem(index);
        }


    }

    
    MenuApiService.$inject = ['$http', 'ApiBasePath'];
    function MenuApiService($http, ApiBasePath) {
        var service = this;

        //service.getMenuItems = function () {
        //    var response = $http({
        //        method: "GET",
        //        url: (ApiBasePath + "/menu_items.json"),
        //    });
        //    return response;
        //};

        var foundItems = [];
        var emptyMessage = "Nothing found";

        service.getMatchedMenuItems = function (searchTerm) {
            foundItems = [];

            searchTerm = searchTerm.trim().toLowerCase();
            //console.log("Funcion 2");

            var result = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            })
                .then(function (response) {
                    //console.log(response.data.menu_items.length);
                    foundItems = [];
                    for (var i = 0; i < response.data.menu_items.length; i++) {
                        if (response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
                            foundItems.push(response.data.menu_items[i]);
                        }
                    }
                    return foundItems;
                }).catch(function (error) {

                    console.log("Error while retrieving the data.");

                });
            //console.log("Forma ayudante");
            //console.log(result);
            return result;
        };

        service.removeItem = function (index) {
            foundItems.splice(index, 1);
            return foundItems;
        };

        service.emptyMessage = function () {
            return emptyMessage;
        }

    }

})();