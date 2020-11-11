(function () {
    "use strict";

    angular.module('public')
        .controller('RegisteredController', RegisteredController);

    RegisteredController.$inject = ['registeredInfo','ApiPath'];
    function RegisteredController(registeredInfo, ApiPath) {
        var $ctrl = this;
        $ctrl.user = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            favorite: "",
            dishName: "",
            dishDescription: ""
        };
        $ctrl.basePath = ApiPath;
        //console.log("Ruta fotos",ApiPath);
        $ctrl.displayResult = false;
        //console.log("Display results: ", $ctrl.displayResult);
        $ctrl.displayError = false;
        //console.log("Display error: ", $ctrl.displayError);

        //console.log("Información de usuario 2: ", registeredInfo);
        if (registeredInfo.firstName !== undefined) {
            //console.log("Usuario existe: ", registeredInfo.firstName);
            $ctrl.user = registeredInfo;
            $ctrl.displayResult = true;
            $ctrl.displayError = false;
            //console.log("Display results: ", $ctrl.displayResult);
            //console.log("Display error: ", $ctrl.displayError);

        }
        else {
            $ctrl.displayResult = false;
            $ctrl.displayError = true;
            //console.log("Display error: ", $ctrl.displayError);
            //console.log("Usuario no existe: ", registeredInfo.firstName);

        }
        //console.log("Nombre de usuario: ", $ctrl.user.firstName);


    }


})();