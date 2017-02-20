(function($){
    
    $(".hdr_AreaButton").click(function() {
       $(".fly_Area").css('display', 'block');
    });
    
});

function openMenu() {
    $(".mnu_Area").css('display', 'block');
    $(".mnu_Area").animate({
        width: "100%"
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

function showBan3(e) 
{
    if(e == 'm') {
        jQuery("#showingFem").css('display', 'none');
        jQuery("#showingMasc").css('display', 'block');

        jQuery("#ban3Masculino").css('background-color', '#fff02a');
        jQuery("#ban3Feminino").css('background-color', '#5c5c5c');
    }
    else{
        jQuery("#showingMasc").css('display', 'none');
        jQuery("#showingFem").css('display', 'block');

        jQuery("#ban3Feminino").css('background-color', '#fff02a');
        jQuery("#ban3Masculino").css('background-color', '#5c5c5c');
    }
}