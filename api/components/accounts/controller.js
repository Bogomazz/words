const Factories                 = use('core/factories');
const Errors                    = use('core/errors');


const AccountsFactory           = Factories('Accounts');

const AccountsController = {

    path: AccountsFactory.__model__.name,

    permissions: {},

    GET : [
        // accounts/23
        function (accountsId) {
            return AccountsFactory.get({id: accountsId});
        }
    ],

    POST : [
        // register
        function () {
        // @path: register
            let password = this.request.body.password;
            delete this.request.body.password;
            return AccountsFactory.new(this.request.body)
                .then(account=> {
                    account.createPasswordHash(password);
                    this.response.status = this.response.statuses._201_Created;
                    return account.save();
                });
        }
    ],

    PUT : [
        // accounts/23
        function (accountsId) {
            return AccountsFactory.get({id: accountsId})
                .then((account)=> {
                    account.populate(this.request.body);

                    if(this.request.body.password) {
                        account.createPasswordHash(this.request.body.password);
                    }
                    return account.save();
                });
        }
    ],

    DELETE : [
        // accounts/1
        function (accountsId) {

            return AccountsFactory.get({id: accountsId})
                .then((account) => {
                    return account.remove();
                })
                .then((result) => {
                    if(result.affectedRows){
                        this.response.status = this.response.statuses._204_NoContent;
                    }
                });
        }
     ]
};


module.exports = AccountsController;