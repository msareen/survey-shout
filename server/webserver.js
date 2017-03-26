(function () {

    function runWebServer() {
        var express = require('express');
        var path = require('path');
        var port = process.env.npm_package_config_webServicePort || 8000;

        var app = express();

        var staticPath = path.join(__dirname, '../client');
        console.log('hosting files at ' + staticPath);
        app.use('/', express.static(staticPath));
        app.use((req,res) => {
            console.log('redirecting...');
            res.redirect('/');
        });

        app.listen(port, function () {
            console.log('Example app listening on port ' + port);
        });
    }

    module.exports = {
        run : runWebServer
    };

})();
