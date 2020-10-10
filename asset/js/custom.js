$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');

    

    $('.dropdown-menu').on('click',function(event){
        event.stopPropagation();
    })


    $('.closeNotificationDropDown button').on('click',function(event){
       $('#notificationsDropDown .dropdown-menu').toggleClass('show');
       $("#notificationsDropDown button").attr("aria-expanded","false");
    })



















    
});