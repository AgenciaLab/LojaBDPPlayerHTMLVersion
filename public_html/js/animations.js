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
};

function closeMenu() {
    $(".mnu_Area").animate({
        width: "0%"
    }, {
        duration: 400,
        specialEasing: {
            width: 'linear'
        }
    });;
};

function showLogin()
{
    if ($(".fly_Area").css('display') === 'none')
    {
        $(".AreaBotaoLogin").css('background', '#252525');
        $(".fly_Area").css('display', 'block');
    }
    else
    {
        $(".AreaBotaoLogin").css('background', 'none');
        $(".fly_Area").css('display', 'none');
    }
        
}

function showTab(tabActive, tabInative, areaActive, areaInative) 
{
    if( jQuery('#' + areaActive).css('display', 'none') ) {
        
        jQuery('#' + areaActive).css('display', 'block');
        jQuery('#' + areaInative).css('display', 'none');
        jQuery('#' + tabActive).css('background-color', '#fff02a');
        jQuery('#' + tabInative).css('background-color', '#5c5c5c');

    }

}