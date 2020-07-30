(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var toBuy = this;


        toBuy.buyItem = function (itemIndex,item) {
            ShoppingListCheckOffService.addItem(item.name, item.quantity);
            ShoppingListCheckOffService.removeItem(itemIndex);
        }

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.message = function () {
            var message = false;
            if (toBuy.items.length == 0)
                message = true;
            return message
        }


    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

        alreadyBought.message = function () {
            var message = true;
            if (alreadyBought.items.length > 0)
                message = false;
            return message
        }
    }

    //Service factory
    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var itemsToBuy = [
            { name: 'Beer', quantity: '10 cans' },
            { name: 'Fanta', quantity: '2 bottles' },
            { name: 'Chips', quantity: '3 bags' },
            { name: 'Dark Chocolate', quantity: '5 bars' },
            { name: 'Burgers', quantity: '1 box' }
        ];
        var itemsAlreadyBought = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            itemsAlreadyBought.push(item);
            //console.log("already bought items: ", itemsAlreadyBought.length);
        };

        service.removeItem = function (itemIndex) {
            itemsToBuy.splice(itemIndex, 1);
            //console.log("To buy items: ", itemsToBuy.length);
        };

        service.getToBuyItems = function () {
            //console.log("Initial items: ",itemsToBuy.length);
            return itemsToBuy;
        };

        service.getAlreadyBoughtItems = function () {
            return itemsAlreadyBought;
        };
    }

})();