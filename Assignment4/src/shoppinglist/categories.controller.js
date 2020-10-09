(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);

    //MainShoppingListController.$inject = ['MenuDataService'];
    //function MainShoppingListController(MenuDataService) {
    MainShoppingListController.$inject = ['categories'];
    function MainShoppingListController(categories) {
      var mainList = this;
      
      mainList.categories = [];
      mainList.categories = categories.data;
      //mainList.$onInit = function () {
      //   MenuDataService.getAllCategories()
      //  .then(function (result) {
      //    mainList.categories = result.data;
      //  })
      //  .catch(function (error) {
      //      console.log("There was an error fetching the categories.");
      //  });
      //};
    }

})();
