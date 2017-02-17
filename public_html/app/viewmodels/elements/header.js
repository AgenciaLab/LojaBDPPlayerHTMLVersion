define(['durandal/app',
    'viewmodels/elements/menu',
    'viewmodels/elements/flyoutCart'
], function (app, menu, flyoutCart) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
    };

    return {
        menu: menu,
        flyoutCart: flyoutCart
    };
});