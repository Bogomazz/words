app.controller("AuthController", function($scope, $http, $location) {
    let REGISTER_URL = config.apiBase + 'register';
    let LOGIN_URL = config.apiBase + 'login';

    let login = () => {
        $http.post(LOGIN_URL, JSON.stringify($scope.userData))
            .success(data => {

            });
    };

    $scope.userData = {
        login: '',
        password: ''
    };

    $scope.login = () => {
        $http.post(LOGIN_URL, JSON.stringify($scope.userData))
            .then(data => {
                $location.path('/');
            });
    };

    $scope.register = () => {
        $http.post(REGISTER_URL, $scope.userData)
            .success( () => {
                login();
            })
            .error(err => {

            });
    };
});