﻿define(['durandal/app'], function (app) {

    var variables = {};
    var funcoes = {};

    variables.marcas = [
        'img/marcas/marca1.png',
        'img/marcas/marca2.png',
        'img/marcas/marca3.png',
        'img/marcas/marca4.png',
        'img/marcas/marca5.png',
        'img/marcas/marca6.png',
        'img/marcas/marca7.png',
        'img/marcas/marca8.png',
        'img/marcas/marca9.png',
        'img/marcas/marca10.png',
        'img/marcas/marca11.png',
        'img/marcas/marca12.png'
    ];
    
    funcoes.mouseOver = function(id) {
        $('#minhaBox' + id).addClass("animated tada");
    };
    
    funcoes.mouseLeave = function(id) {
        $('#minhaBox' + id).removeClass("animated tada");
    };
    
    funcoes.sairMenuMarcas = function() {
        fecharMenuMarcas();
    };

    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        this.marcas = [
            'img/marcas/marca1.png',
            'img/marcas/marca2.png',
            'img/marcas/marca3.png',
            'img/marcas/marca4.png',
            'img/marcas/marca5.png',
            'img/marcas/marca6.png',
            'img/marcas/marca7.png',
            'img/marcas/marca8.png',
            'img/marcas/marca9.png',
            'img/marcas/marca10.png',
            'img/marcas/marca11.png',
            'img/marcas/marca12.png'
        ];
    };

    return {
        variables: variables,
        funcoes: funcoes
    };
});