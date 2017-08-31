app.controller("AuthController", function($scope, $http) {
    let REGISTER_URL = config.apiBase + 'register';
    let LOGIN_URL = config.apiBase + 'login';

    $scope.userData = {
        login: '',
        password: ''
    };

    $scope.login = () => {
        $http.post(LOGIN_URL, JSON.stringify($scope.userData), {headers: queryHeaders})
            .then(data => {
                console.log(data);
            });
    };

    $scope.register = () => {
        $http.post(REGISTER_URL, $scope.userData)
            .success(data => {
                console.log(data);
            })
            .error(err => {

            });
    };
});