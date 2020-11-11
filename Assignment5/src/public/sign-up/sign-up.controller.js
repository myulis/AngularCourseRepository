(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService','RegisteredService'];
    function SignUpController(MenuService, RegisteredService) {
        var $ctrl = this;

        $ctrl.user = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            favorite: ""
        };
        $ctrl.display = false;
        $ctrl.displayError = false;

        $ctrl.dishInfo = function () {
            MenuService.getItem($ctrl.user.favorite).then(function (response) {
                //console.log("Response: ", response);
                $ctrl.displayError = false;
                $ctrl.display = true;
                $ctrl.dishShortName = response.short_name;
                $ctrl.dishName = response.name;
                $ctrl.dishDescription = response.description;
                RegisteredService.saveUser($ctrl.user, $ctrl.dishName, $ctrl.dishDescription);
                return response;
                
            }).catch(function (error) {
                $ctrl.displayError = true;
                $ctrl.display = false;
                return error;
            });
        }
    }


})();