define(['durandal/app',
    'viewmodels/elements/header',
    'viewmodels/elements/bnRotate'
], function (app, header, bnRotate) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';        
    };

    return {
        ctor: ctor,
        header: header,
        bnRotate: bnRotate
    };
});