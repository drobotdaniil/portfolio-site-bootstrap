var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

//scroll to anchor
$(".menu__item a").click(function(){
    var element = $(this).attr("href");
    var dist = $(element).offset().top;
    $("html, body").animate({"scrollTop": dist}, 1000);

    return false;
});