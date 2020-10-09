(function () {
'use strict';

angular.module('MenuApp')
    .controller('ItemsDetailController', ItemsDetailController);


    ItemsDetailController.$inject = ['items'];
    function ItemsDetailController(items) {
        var itemsDetail = this;
        itemsDetail.items = [];
        itemsDetail.items = items.data.menu_items;

        
    }

})();
