(function() {
    var webServer = require('./webServer.js');
    var expressServer = require('./expressServer.js');

    webServer.run();
    expressServer.run();

})();

