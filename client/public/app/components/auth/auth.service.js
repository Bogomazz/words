app.factory('$auth', function() {
    let instance = {};
    let authAccount;

    instance.setAccount = (account) => authAccount = account;

    instance.getAccount = () => authAccount;

    instance.isAuthorized = () => !!authAccount;

    return instance;
});