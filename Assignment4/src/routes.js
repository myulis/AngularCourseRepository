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
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/categories.template.html',
      controller: 'MainShoppingListController as mainList',
      resolve: {
          categories: ['MenuDataService',
              function (MenuDataService) {
                  return MenuDataService.getAllCategories();
              }]
      }
  })

  // Item list within a category page
  .state('items', {
      url: '/items/{categoryId}',
      templateUrl: 'src/shoppinglist/templates/items.template.html',
      controller: 'ItemsDetailController as itemsDetail',
      resolve: {
          items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryId);
                      //.then(function (response) {
                      //    response.data;
                      //    console.log('Response data: ', response.data);
                      //});
              }]
      }
  });
}

})();
