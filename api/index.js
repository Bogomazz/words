const Server                    = require('dominion');
const Config                    = use('config');


// Server.addComponent(use('components/tracking'));
// Server.addComponent(use('components/logging'));
// Server.addComponent(use('components/authorize'));
// Server.addComponent(use('components/notifications'));
// Server.addComponent(use('components/media'));
// Server.addComponent(use('components/permissions'));

Server.addComponent(use('components/cors'));
Server.addComponent(use('components/accounts'));
Server.addComponent(use('components/sessions'));

Server.start(Config);