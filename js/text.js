$(document).ready(function() {
    $(".text-form").hide();
    $(".text").live("click", function() {
        $(this).closest(".contact").find(".text-form").slideToggle();
    });
});
