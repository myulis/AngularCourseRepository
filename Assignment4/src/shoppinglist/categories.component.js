(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categorylist.template.html',
  bindings: {
      categories: '<',
      onAction: '&'
  }
});

})();
