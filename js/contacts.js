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
    // shows a single contact
    function addOne(name, number) {
        var contact_html = "";
        $("#contacts").prepend(contact_html);
    }
    // show all contacts
    function render() {
        var data = localStorage["contacts"];
        var contacts = JSON.parse(data);
        for (var name in contacts) {
            addOne(name, contacts[name]);
        }
    }
    $(".contact-form").on("submit", function(e) {
        e.preventDefault();
        var name = $("#name").val();
        var number = $("#number").val();
        save(name, number);
        addOne(name, number);
        console.log(name + " " + number);
    });

    if (!localStorage["contacts"])
        localStorage["contacts"] = "{}";
    render();
});
