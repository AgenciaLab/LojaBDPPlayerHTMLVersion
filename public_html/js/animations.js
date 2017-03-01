$(function() {
   $(".mnu_Area").on( "mouseleave", function() {
       alert("aqui");
   });
});

function openMenuCategoria() {

    var altura = $(".hdr_AreaLogo").height() + $("#bannerHome").height();
    $(".mnu_Area").css('display', 'block');
    $(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
        duration: 200,
        specialEasing: {
            width: 'linear'
        }
    });
    $(".mnu_Links").animate({
        width: "100%"
    }, {
        duration: 200,
        specialEasing: {
            width: 'linear'
        }
    });

    $('#overlay-back').fadeIn(500);
    setTimeout(
            $(".mnu_AreaCategoria").addClass("categoriaSlide")
            , 400);

    setTimeout(
            function () {
                $(".mnu_Link").css("display", "block");
                $(".mnu_Links").animate({marginLeft: "20%"});
            }
    , 400);

}
;



function escureATela() {
    $('#overlay-back').fadeIn(500);
}

function clareiaATela() {
    $('#overlay-back').fadeOut(500);
}

function mouseLeaveCategorias() {
}
;
function changeMenuIcon() {

    if ($("#mrc_Marcas").css('display') === "block")
    {
        $("#imgSearch").attr("src", "img/btnSearchHover.png");
        $("#areaMenu").css("background", "#fff02a");
        $(".hdr_AreaButton input").css("display", "block");
        $('#overlay-back').fadeIn(500);
    } else
    {
        $("#imgSearch").attr("src", "img/btnSearch.png");
        $("#areaMenu").css("background", "none");
        $(".hdr_AreaButton input").css("display", "none");
        $('#overlay-back').fadeOut(500);
    }

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

    $('#overlay-back').fadeIn(0);
    setTimeout(
            $(".mnu_AreaCategoria").addClass("categoriaSlide")
            , 0);

    setTimeout(
            function () {
                $(".mnu_Link").css("display", "block");
                $(".mnu_Links").animate({marginLeft: "20%"});
            }
    , 0);


}
;
function closeMenu() {

    jQuery(".mnu_AreaCategoria").removeClass("categoriaSlide");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
    $(".mnu_Area").animate({
        width: "0%"
    }, {
        duration: 400,
        specialEasing: {
            width: 'linear'
        }
    });

    $(".mnu_Area").css('display', 'none');
    $(".mnu_Link").css("display", "none");
    $(".mnu_Links").animate({marginLeft: "0%"});
    $('#overlay-back').fadeOut(500);

    if ($("#mrc_Marcas").css('display') === 'block')
    {
        jQuery("#mrc_Marcas").css('display', 'none');
    }
    changeMenuIcon();
}
;
function showLogin()
{
    if ($(".fly_Area").css('display') === 'none')
    {
        escureATela();
        $(".AreaBotaoLogin").css("z-index", "25");
        $(".AreaBotaoLogin").css('background', '#252525');
        $(".fly_Area").css('display', 'block');
        $(".fly_Area").animate({right: "0px"}, 200);
    } else
    {
        clareiaATela();
        $(".AreaBotaoLogin").css("z-index", "0");
        $(".AreaBotaoLogin").css('background', 'none');
        $(".fly_Area").css('display', 'none');
        $(".fly_Area").animate({right: "-400px"}, 200);
    }

}

function hideLogin() {
    clareiaATela();
    $(".AreaBotaoLogin").css("z-index", "0");
    $(".AreaBotaoLogin").css('background', 'none');
    $(".fly_Area").css('display', 'none');
    $(".fly_Area").animate({right: "-400px"}, 300);
}

function showTab(tabActive, tabInative, areaActive, areaInative)
{
    if (jQuery('#' + areaActive).css('display', 'none')) {

        jQuery('#' + areaActive).css('display', 'block');
        jQuery('#' + areaInative).css('display', 'none');
        jQuery('#' + tabActive).css('background-color', '#fff02a');
        jQuery('#' + tabInative).css('background-color', '#5c5c5c');
    }

}

function openSearch() {

    var altura = $("#bannerHome").height() / 4;
    if ($("#mrc_Marcas").css('display') === 'none')
    {
        openMenuMarcas();

        jQuery("#areaMenu").css("z-index", "22");
        jQuery("#mrc_Marcas").css('display', 'block');
        jQuery(".mrc_Area").css("height", altura);

        setTimeout(function () {
            var left = jQuery(".mnu_Area").width();
            jQuery(".mrc_Container").css("left", left);
        }, 400);

        jQuery(".mnu_AreaCategoria").first().css("background", "#fff02a");
        jQuery(".mnu_AreaCategoria").first().css("margin-top", "2px");
        jQuery(".mnu_AreaCategoria").first().css("padding-right", "2px");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#1d1607");
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

function entraMenu() {
    jQuery("#mrc_Marcas").css("display", "none");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
}
;

function fecharMenuMarcas() {
    jQuery("#mrc_Marcas").css("display", "none");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
}

