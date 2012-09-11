$(document).ready(function() {
    $(".contact-form").on("submit", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var number = $("#number").val();
        console.log(name + " " + number);
    });
});
