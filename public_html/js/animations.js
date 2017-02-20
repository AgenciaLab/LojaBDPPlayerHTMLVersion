function openMenu() {

    var altura = $(".hdr_AreaLogo").height() + $("#bannerHome").height();

    $(".mnu_Area").css('display', 'block');
    $(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
        duration: 400,
        specialEasing: {
            width: 'linear'
        }
    });

    $(".mnu_Links").animate({
        width: "100%"
    }, {
        duration: 400,
        specialEasing: {
            width: 'linear'
        }
    });
}
;

function openMenuMarcas() {

    var altura = $(".hdr_AreaLogo").height() + $("#bannerHome").height();

    $(".mnu_Area").css('display', 'block');
    $(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
        duration: 0,
        specialEasing: {
            width: 'linear'
        }
    });

    $(".mnu_Links").animate({
        width: "100%"
    }, {
        duration: 0,
        specialEasing: {
            width: 'linear'
        }
    });
}
;

function closeMenu() {
    $(".mnu_Area").animate({
        width: "0%"
    }, {
        duration: 400,
        specialEasing: {
            width: 'linear'
        }
    });
    ;
}
;

function showLogin()
{
    if ($(".fly_Area").css('display') === 'none')
    {
        $(".AreaBotaoLogin").css('background', '#252525');
        $(".fly_Area").css('display', 'block');
    } else
    {
        $(".AreaBotaoLogin").css('background', 'none');
        $(".fly_Area").css('display', 'none');
    }

}

function showBan3(e)
{
    if (e == 'm') {
        jQuery("#showingFem").css('display', 'none');
        jQuery("#showingMasc").css('display', 'block');

        jQuery("#ban3Masculino").css('background-color', '#fff02a');
        jQuery("#ban3Feminino").css('background-color', '#5c5c5c');
    } else {
        jQuery("#showingMasc").css('display', 'none');
        jQuery("#showingFem").css('display', 'block');

        jQuery("#ban3Feminino").css('background-color', '#fff02a');
        jQuery("#ban3Masculino").css('background-color', '#5c5c5c');
    }
}

function openSearch() {

    var altura = $("#bannerHome").height() / 4;


    if ($("#mrc_Marcas").css('display') === 'none')
    {
        jQuery("#mrc_Marcas").css('display', 'block');
        jQuery(".mrc_Area").css("height", altura);

        openMenuMarcas();

        var left = jQuery(".mnu_Area").width();

        jQuery(".mrc_Container").css("left", left);

        jQuery(".mnu_AreaCategoria").first().css("background", "#fff02a");
        jQuery(".mnu_AreaCategoria").first().css("margin-top", "2px");
        jQuery(".mnu_AreaCategoria").first().css("padding-right", "2px");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#1d1607");
    } else {
        jQuery("#mrc_Marcas").css('display', 'none');
        jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
        jQuery(".mnu_AreaCategoria").first().css("background", "#070003");

        closeMenu();
    }
}

jQuery(window).resize(function () {

    var altura = $(".hdr_AreaLogo").height() + $("#bannerHome").height();

    if ($(".mnu_Area").css('display') === "block")
    {
        $(".mnu_Area").css('display', 'block');
        $(".mnu_Area").animate({
            height: altura
        }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });        
    }
    
    if ($("#mrc_Marcas").css('display') === "block")
    {
        var left = jQuery(".mnu_Area").width();
        var alturaMarcas = $("#bannerHome").height() / 4;
        
        jQuery(".mrc_Area").css("height", alturaMarcas);
        jQuery(".mrc_Container").css("left", left);
    }

});