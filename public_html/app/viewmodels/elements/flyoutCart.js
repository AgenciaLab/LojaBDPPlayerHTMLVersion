define(['durandal/app',
    'viewmodels/elements/menu'], function (app, menu) {

    var funcoes = {};

    funcoes.sairMenu = function () {
        hideLogin();
    };

    return {
        menu: menu,
        funcoes: funcoes
    };
});