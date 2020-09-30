const Routs = {
    Domain: 'http://127.0.0.1:5501/',// $(location).attr('host').toString(),
    Carousel: '/partialViewes/testimonial.html',
    Home: '/partialViewes/home.html',
    LatestUpdates: '/partialViewes/latestUpdates.html',
    Services: '/partialViewes/services.html',
    Projects: '/partialViewes/projects.html'
}

let loadPartialView = (HolderTagId, Url) => {
    let holdingTagId = (HolderTagId[0] == '#')? HolderTagId : '#' + HolderTagId;
    
    $.ajax({
        url: Routs.Domain + Url,
        success: function (result) {
            $(holdingTagId).empty();
            $(holdingTagId).html(result);
        },
        error(response) {
            console.error(response);
        }
    });
}