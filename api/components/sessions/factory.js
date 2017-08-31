const Property                  = use('core/property');
const Config                    = use('config');

const SessionsRepository        = require('./repository');
const Tools                     = require('./tools');


const statuses = {
    ACTIVE: "ACTIVE",
    LONG_ACTIVE: "LONG_ACTIVE",
    CLOSED: "CLOSED"
};
const closeTypes = {
    LOG_OUT: "LOG_OUT",
    AFTER_VALIDATION: "AFTER_VALIDATION",
    FULL_LOG_OUT: "FULL_LOG_OUT",
    ON_SCHEDULE: "ON_SCHEDULE"
};


const SessionsDefinition = {

    name: 'Sessions',

    repository: SessionsRepository,

    properties: {
        id: Property.id(),
        accounts_id: Property.model("Accounts"),
        creation_time: Property.number(),
        token: Property.string()
    },

    factory: {
        statuses,

        closeTypes,

        create: function (account) {
            let session = new this.__model__({accounts_id: account.id});
            session.creation_time = new Date();

            session.token = Tools.sha256(session.creation_time + session.accounts_id);
            return Promise.resolve(Object.freeze(session));
        }
    },

    instance: {}
};


module.exports = SessionsDefinition;