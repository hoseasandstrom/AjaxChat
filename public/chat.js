function addMessage() {
var message = {
        author: $("#author").val(),
            text: $("#text").val()
    }

    $.post(
        "/add-message",
        JSON.stringify(message),
        function(data) {
           // alert("Success!");
           $("#text").val("");
        }
    );
}

function getMessages() {
    $.get(
        "/get-messages",
        function(data) {
            $("#messages").empty();

            var messages = JSON.parse(data);
            //alert(messages);
            for(var i in messages) {
                var author = messages[i].author;
                var text = messages[i].text;
                var elem = $("<div>");
                elem.text(author + ": " + text);
                $("#messages").append(elem);
            }
        }
    );
}
//getMessages();
setInterval(getMessages, 1000);