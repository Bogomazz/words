app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {

            config.headers['Content-Type'] = 'application/json';

            return config;
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
