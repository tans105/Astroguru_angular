/**
 * Created by Tan$ on 11/13/2016.
 */
app.controller('HoroscopeCtrl', function ($scope, $mdDialog, $http) {
    console.log("Horoscope controller reporting on duty");

    $scope.zodiacPopover = function (code) {
        var zodiacContent = null;
        var zodiacName = null;
        $http.get('resources/horoscopeContent.json').success(function (data) {

            var zodiacData=[];
            angular.forEach(data, function(item){
                zodiacData.push(item);
            })

            $mdDialog.show({
                locals: {code: code, zodiacName: zodiacData[code-1].name, zodiacContent: zodiacData[code-1].content},
                controller: DialogController,
                templateUrl: 'templates/ZodiacTemplate.tmpl.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                hasBackdrop: true,
                escapeToClose: true,
                focusOnOpen: false,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
        });



    }
    function DialogController($scope, $mdDialog, code, zodiacName, zodiacContent) {
        console.log("Code  " + code);
        console.log("Name " + zodiacName);
        console.log("Content " + zodiacContent);
        $scope.code = code;
        $scope.content=zodiacContent;
        $scope.name=zodiacName;
        $scope.getLike=0;
        $scope.getDislike=0;
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.addLike = function () {
            $scope.getLike++;
        };
        $scope.addDislike = function (answer) {
            $scope.getDislike++;
        };
    }
});