(function($){
    
    $(".hdr_AreaButton").click(function() {
        console.log("teste");
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
