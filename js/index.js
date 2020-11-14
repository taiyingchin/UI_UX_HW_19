console.log("This means that the script is working correctly!!");

$(".navbar a").on("mouseenter", function(){
        $(this).css({"text-decoration":"underline"})
});

$(".navbar a").on("mouseleave", function(){
    $(this).css({"text-decoration":"none"})
});