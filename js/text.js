$(document).ready(function() {
    $(".text-form").hide();

    $(".text").live("click", function() {
        $(this).closest(".contact").find(".text-form").slideToggle();
    });

    $(".text-form").live("submit", function(e) {
        e.preventDefault();
        var options = {};
        options["to"] = ""; //number
        options["body"] = $(this).find(".text-body").val(); //body
        console.log(options);
        // send text
        var url = "";
    });
});
