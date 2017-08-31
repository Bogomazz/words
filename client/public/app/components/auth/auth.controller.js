app.controller("AuthController", function($scope, $http) {
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
                console.log(data);
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