define(['durandal/app',
    'viewmodels/elements/menu',
    'viewmodels/elements/marcas',
    'viewmodels/elements/flyoutCart'
], function (app, menu, marcas, flyoutCart) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
    };

    return {
        menu: menu,
        marcas: marcas,
        flyoutCart: flyoutCart
    };
});