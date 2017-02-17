define(['durandal/app'], function (app) {
    var ctor = function () {
        this.displayName = 'Welcome to the Durandal Starter Kit!';
        this.categorias = [
            'MARCAS',
            'VESTUÁRIO',
            'EQUIPAMENTOS',
            'COLECIONÁVEIS',
            'GAMES & FILMES',
            'LIVRARIA',
            'COMUNIDADE',
            'HOT SALE!'
        ];
    };

    return ctor;
});