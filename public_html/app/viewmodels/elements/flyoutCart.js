define(['durandal/app',
    'viewmodels/elements/menu'], function (app, menu) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
    };

    return {
        menu: menu
    };
});