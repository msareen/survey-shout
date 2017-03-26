(function () {

    var express = require('express');
    var mongoClient = require('../dbAccess.js');
    var $q = require('q');

    mongoClient.createConnection();

    let userRouter = express.Router();
    userRouter.route('/users')
        .get((req, res) => {
            listAllUsers()
                .then(function (result) {
                    res.json(result);
                });
        });


    function listAllUsers() {
        let defer = $q.defer();
        mongoClient.find('users', {}, function (result) {
            defer.resolve(result);
        });
        return defer.promise;
    }

    function verifyUser(username) {

    }

    function getUserInfo(userInfo) {

    }

    module.exports = userRouter;

})();
