(function () {
    "use strict";

    angular.module('public')
        .service('RegisteredService', RegisteredService);

    RegisteredService.$inject = [];
    function RegisteredService () {
        var service = this;

        service.saveUser = function (user, dishName, dishDescription) {
            service.firstName = user.firstName;
            service.lastName = user.lastName;
            service.email = user.email;
            service.phone = user.phone;
            service.favorite = user.favorite;
            service.dishName = dishName;
            service.dishDescription = dishDescription;
            //console.log("Usuario guardado: ",user);
        };

        service.getUser = function () {
            var user = {
                firstName: service.firstName,
                lastName: service.lastName,
                email: service.email,
                phone: service.phone,
                favorite: service.favorite,
                dishName: service.dishName,
                dishDescription: service.dishDescription
            };
            return user;
        };


    }

})();