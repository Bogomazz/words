app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {

            if (localStorage.token){
                config.headers['Access-Token'] = localStorage.token;
            }
            config.headers['Content-Type'] = 'application/json';

            return config;
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
