const Routs = {
    Domain: 'http://' + $(location).attr('host').toString(),
    Carousel: '/partialViewes/testimonial.html',
    Home: '/partialViewes/home.html',
    LatestUpdates: '/partialViewes/latestUpdates.html',
    Services: '/partialViewes/services.html',
    Projects: '/partialViewes/projects.html',
    About: '/partialViewes/about.html',
    Contact: '/partialViewes/contact.html',
    Products: '/partialViewes/product.html'
}

const NoLoadingScreenRouts = [Routs.Carousel, Routs.LatestUpdates]

let loadPartialView = (HolderTagId, Url) => {
    if(!NoLoadingScreenRouts.includes(Url))
        $('#LoadingSpinner').fadeIn();
    let holdingTagId = (HolderTagId[0] == '#')? HolderTagId : '#' + HolderTagId;
    console.log(Routs.Domain + Url);
    $.ajax({
        url: Routs.Domain + Url,
        success: function (result) {
            $(holdingTagId).empty();
            $(holdingTagId).html(result);
            if(!NoLoadingScreenRouts.includes(Url))
                setTimeout(() => { $('#LoadingSpinner').fadeOut(); }, 1000);
        },
        error(response) {
            console.error(response.statusText);
        }
    });
}

$(document).ready(() => {
    loadPartialView('Site-Body', Routs.Home);
    $('#LoadingSpinner').fadeOut();

    $('.home-btn').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.Home);
    });

    $('#Products').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.Products);
    });

    $('#Services').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.Services);
    });
    
    $('#Projects').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.Projects);
    });
    
    $('#About').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.About);
    });
    
    $('#Contact').click((elem) => {
        setActive(elem);
        loadPartialView('Site-Body', Routs.Contact);
    });
});

let setActive = (elem) => {
    $('#navbarSupportedContent .nav-item').removeClass('active');
    $(elem.currentTarget).parent().addClass('active');
    $('#Site-NavBar').removeClass('active')
}
