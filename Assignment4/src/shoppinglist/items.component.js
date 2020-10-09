(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});

})();
