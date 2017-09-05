app.factory('httpRequestInterceptor', function () {
    return {
        request: function (requestConfig) {

            requestConfig.headers['Access-Token'] = localStorage.getItem(config.storageTokenKey);
            requestConfig.headers['Content-Type'] = 'application/json';

            return requestConfig;
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
