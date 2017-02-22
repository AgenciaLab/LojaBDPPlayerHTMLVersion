define(['durandal/app',
    'viewmodels/elements/header',
    'viewmodels/elements/bnRotate'
], function (app, header, bnRotate) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        
        this.BannerHome = [
            'img/banners/bannerHome1.png',
            'img/banners/bannerHome2.png',
            'img/banners/bannerHome3.png'
        ];
        
    };

    return {
        ctor: ctor,
        header: header,
        bnRotate: bnRotate
    };
});