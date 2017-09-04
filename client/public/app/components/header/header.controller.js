app.controller('HeaderController', function HeaderController($scope) {
    $scope.username = 'RAGNAR';
}).directive('header', function () {
    return {
        templateUrl: '/app/components/header/header.view.html'
    }
});