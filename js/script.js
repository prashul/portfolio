
! function(e){
e("#to-top").click(function() {
        e("html, body").animate({
            scrollTop: 0
        }, 500)
    })
}(jQuery);