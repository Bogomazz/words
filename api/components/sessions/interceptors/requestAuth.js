const Errors                    = use('core/errors');
const Factories                 = use('core/factories');


function requestInterceptorAuthentication() {
    const SessionsFactory = Factories("Sessions");
    const AccountsFactory = Factories("Accounts");

    return new Promise((resolve, reject) => {
        let token = this.request.headers["access-token"];
        if(!token){
            resolve();
            return;
        }

        SessionsFactory.get({token: token}).then(session => {

            AccountsFactory.get({id: session.accounts_id})
                .then(account => {
                        this.request.session = {
                            token,
                            account,
                        };
                        resolve();
                })
                .catch(e => e instanceof Errors.NotFound? resolve() : reject(e));
        })
        .catch(e => {
            reject(e);
        });
    });
}

module.exports = requestInterceptorAuthentication;