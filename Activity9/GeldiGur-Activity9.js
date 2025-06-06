$(document).ready(function () {
    // preload images
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#image_list a").click(function (evt) {
        evt.preventDefault(); // cancel the default action of the link

        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        $("#caption, #image").fadeOut(1000, function () {

            $("#image").attr("src", imageURL);
            $("#caption").text(caption);

            $("#caption, #image").fadeIn(1000);
        });
    });

    // move focus to first thumbnail
    $("li:first-child a").focus();
});
