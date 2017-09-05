app.controller('HeaderController',['$scope', '$http', '$location', 'auth',
    function HeaderController($scope, $http, $location, auth) {
        $scope.init = () => {
            auth.getAccount()
                .then(account => {
                    auth.setAccount(account);
                    $scope.login = account.login;
                })
                .catch(error => $location.path('/auth'));
        };

    }]).directive('header', function () {
        return {
            templateUrl: '/app/components/header/header.view.html'
        }
});