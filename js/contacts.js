$(document).ready(function() {
    // contacts = {
    //               "geoff"   : "21325435435",
    //               "delilah" : "3432423",
    //               "pulak"   : "f321321"
    //    }
    function save(name, number) {
        var data = localStorage["contacts"]; // ""
        var contacts = JSON.parse(data); // error
        contacts[name] = number;
        localStorage["contacts"] = JSON.stringify(contacts);
    }
    $(".contact-form").on("submit", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var number = $("#number").val();
        save(name, number);
        console.log(name + " " + number);
    });
    if (!localStorage["contacts"])
        localStorage["contacts"] = "{}";
});
