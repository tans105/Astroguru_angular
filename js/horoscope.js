/**
 * Created by Tan$ on 11/13/2016.
 */
app.controller('HoroscopeCtrl', function($scope,$mdDialog){
    console.log("Horoscope controller reporting on duty");

    $scope.popover=function(code){
        console.log(code);

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'templates/AriesTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose:true,
                hasBackdrop:true,
                escapeToClose:true,
                focusOnOpen:false,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })

        }
    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
});