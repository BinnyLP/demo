define(function() {

    "use strict";
    require.config(
            {
                "shim": {
                    "angular": {
                        "deps": ["jquery"],
                        "exports": "angular"
                    },
                    "angularAnimate": {
                        "deps": ["angular"]
                    },
                    "angularResource": {
                        "deps": ["angular"]
                    },
                    "angularRoute": {
                        "deps": ["angular"]
                    },
                    
                    "angularMgcreaStrapCommon": {
                        "deps": ["angular"]
                    },
                    "select": {
                        "deps": ["angular"]
                    },
                    "angular-ui-select2": {
                        "deps": ["jquery", "select2", "angular"]
                    },
                    "textAngular": {
                        "deps": ["textAngularRangy", "textAngularSanitize"]
                    },
                    "bootstrap": {
                        "deps": ["jquery"]
                    }
                },
                "paths": {
                    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
                    "angular": "foundation/vendor/angular",
                    "angularAnimate": "foundation/vendor/angular-animate",
                    "angularResource": "foundation/vendor/angular-resource",
                    "angularRoute": "foundation/vendor/angular-route",
                    "angularUiRouter": "foundation/vendor/angular-ui-router",
                    "select2": "foundation/vendor/select2",
                    "angular-ui-select2": "foundation/vendor/angular-ui-select2",
                    "angularMgcreaStrapCommon": 'foundation/vendor/angular-mgcrea-strap',
                    "textAngular": "foundation/vendor/textAngular.min",
                    "textAngularRangy": "foundation/vendor/textAngular-rangy.min",
                    "textAngularSanitize": "foundation/vendor/textAngular-sanitize.min"
                }
            }

    );
});
