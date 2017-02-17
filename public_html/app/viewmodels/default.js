define(['durandal/app',
    'viewmodels/elements/header'
], function (app, header) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
    };

    return {
        ctor: ctor,
        header: header
    };
});