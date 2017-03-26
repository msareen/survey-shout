define(
    ['angular',
    'angular-route'],
    function (angular) {

        var app = angular.module("webapp", ["ngRoute"]);

        app.config(function ($routeProvider, $locationProvider,
            $controllerProvider, $compileProvider, $filterProvider, $provide) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });


            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.service = $provide.service;
            app.factory = $provide.factory;

            $routeProvider.when("/", addRoute('home/home.html', './home/home.controller', 'HomeController'));
            $routeProvider.otherwise('/');


        });

        function addRoute(templateUrl, controllerPath, controllerName) {
            console.log('addroute execute');
            return {
                templateUrl: templateUrl,
                resolve: {
                    load: function ($rootScope, $q) {
                        var defered = $q.defer();
                        require([controllerPath], function () {
                            defered.resolve();
                            $rootScope.$apply();
                        });
                        return defered.promise;
                    }
                },
                controller: controllerName
            };
        }

        angular.element(document).ready(function () {
            angular.bootstrap(document, ['webapp']);
        });

        return app;

    });
