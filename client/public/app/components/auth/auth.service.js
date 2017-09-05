app.factory('auth', ['$http', function($http) {
    let MY_ACCOUNT_URL = config.apiBase + 'accounts/me';

    let instance = {};
    let account;

    instance.setAccount = (newAccount) => {
        account = newAccount;
    };

    instance.getAccount = () => {
        if (account) {
            return Promise.resolve(account);
        } else if (!localStorage.getItem(config.storageTokenKey)) {
            return Promise.reject();
        } else {
            return $http.get(MY_ACCOUNT_URL)
                .then(resp => {
                    return Promise.resolve(resp.data);
                }, err => {
                    return Promise.reject(err);
                })
        }
    };

    instance.setToken = (token) => {
        localStorage.setItem(config.storageTokenKey, token);
    };

    instance.isAuthorized = () => !!account;

    return instance;
}]);