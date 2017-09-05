app.controller("AuthController", function($scope, $http, $location, $auth) {
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
            .then(resp => {
                $auth.setAccount(resp.data.account);
                $location.path('/');
            },
            err => {
                console.error(err);
                $scope.$broadcast('error', {
                    title: 'Auth error',
                    description: 'Login or password is incorrect.'
                });
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