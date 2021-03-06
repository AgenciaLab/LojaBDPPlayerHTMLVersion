﻿define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Principal', moduleId: 'viewmodels/default', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});