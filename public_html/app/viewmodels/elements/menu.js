define(['durandal/app'], function (app) {    
    var variables = {};    
    var funcoes = {};
    
    variables.categorias = [
            'MARCAS',
            'VESTUÁRIO',
            'EQUIPAMENTOS',
            'COLECIONÁVEIS',
            'GAMES & FILMES',
            'LIVRARIA',
            'COMUNIDADE',
            'HOT SALE!'
        ];
    
    funcoes.sairMenu = function() {
        closeMenu();
    };

    return {
        variables:variables,
        funcoes: funcoes
    };
});