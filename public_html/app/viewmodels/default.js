define(['durandal/app',
    'viewmodels/elements/header',
    'viewmodels/elements/bnRotate',
    'viewmodels/elements/rodape'
], function (app, header, bnRotate, rodape) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';        
    };

    return {
        ctor: ctor,
        header: header,
        rodape: rodape,
        bnRotate: bnRotate
    };
});