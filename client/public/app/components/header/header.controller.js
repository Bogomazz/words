app.controller('HeaderController', function HeaderController($scope, $http) {
    const CURRENT_USER_URL = config.apiBase + 'accounts/me';
    $scope.init = () => {
        $http.get(CURRENT_USER_URL)
            .success(data => {

            })
            .error(data => {

            })
    }
}).directive('header', function () {
    return {
        templateUrl: '/app/components/header/header.view.html'
    }
});