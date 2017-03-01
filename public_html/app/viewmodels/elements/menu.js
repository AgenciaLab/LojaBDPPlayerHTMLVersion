define(['durandal/app'], function (app) {    
    var variables = {};    
    var funcoes = {};
    
    variables.categorias = [
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
    
    funcoes.entraMenu = function() {
        entraMenu();
    };
    
    funcoes.openMarcas = function() {
        console.log("aqui");
        openMenuMarcas();  
    };

    return {
        variables:variables,
        funcoes: funcoes
    };
});