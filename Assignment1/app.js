(function () {
'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.List = "list comma separated dishes you usually have for lunch";
        $scope.ItemListCount = 0;
        $scope.Message = "";

        $scope.RespHowMuch = function () {
            var TotalItems = CalculateTotalItems($scope.List);
            $scope.ItemListCount = TotalItems;
            var MessageAux = MessageSelector(TotalItems);
            $scope.Message = MessageAux;
        }

        function CalculateTotalItems(string) {

            var ItemCount = 0;
            var Words = "";
            var length = 0;

            string = string.trim();
            Words = string.split(",");
            length = Words.length;

            if (Words == "")
                length = Length - 1;
                        
            for (var i = 0; i < length; i++) {
                ItemCount = ItemCount +1;
            }
            return ItemCount;
        }

        function MessageSelector(int) {
            var m = "";
            if (int <= 3)
                m = "Enjoy!";

            else
                m = "Too much!";

            return m;
        }
    }

})();
