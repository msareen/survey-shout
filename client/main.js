require.config({
    paths: {
        "angular": "./external/angular/angular",
        "angular-route" : "./external/angular-route/angular-route",
        "jquery" : "./external/jquery/jquery",
        "domready": "./external/domready/ready",
        "app" : "./app"
    },
    shim : {
        "angular" : {
            deps : ["jquery"],
            exports : 'angular'
        },
        "angular-route" : {
            deps : ["angular"]
        },
        "app" : {
            deps: ['angular'],
            exports : 'app'
        }
    },
    deps : ["./app"]
});


