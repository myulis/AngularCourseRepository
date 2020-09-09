(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    template: <div>Hello</div>
    //templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  //.state('categories', {
  //  url: '/categories',
  //  templateUrl: 'src/templates/categories.template.html',
  //  controller: 'MainShoppingListController as mainList',
  //  resolve: {
  //    items: ['ShoppingListService', function (ShoppingListService) {
  //      return ShoppingListService.getItems();
  //    }]
  //  }
  //})

  //// Item detail
  //.state('mainList.itemDetail', {
  //  // url: '/item-detail/{itemId}',
  //  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //  controller: 'ItemDetailController as itemDetail',
  //  params: {
  //    itemId: null
  //  }
  //});

}

})();
