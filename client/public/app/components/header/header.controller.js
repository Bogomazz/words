app.controller('HeaderController', function HeaderController($scope, $http, $auth) {
    const CURRENT_USER_URL = config.apiBase + 'accounts/me';

    $scope.login = 'ragnar';

}).directive('header', function () {
    return {
        templateUrl: '/app/components/header/header.view.html'
    }
});