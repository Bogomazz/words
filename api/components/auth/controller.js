const Factories                 = use('core/factories');
const Errors                    = use('core/errors');

const SessionsFactory           = Factories('Sessions');
const AccountsFactory           = Factories('Accounts');


const AuthController = {

    path: 'auth',

    permissions: {},


    POST : [
        // login
        function () {
            // @path: login
            return AccountsFactory.get({login: this.request.body.login})
                .then(account => {
                    if (account.checkPassword(this.request.body.password)){
                        return account;
                    } else {
                        throw new Errors.Unauthorized();
                    }
                })
                .then(account => SessionsFactory.create(account));
        }
    ],
};


module.exports = AuthController;