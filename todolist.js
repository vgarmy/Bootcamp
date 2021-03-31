var textinput = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
textinput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});




function addTask() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("input").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("You must add something");
    } else {
        document.getElementById("myList").appendChild(li);
        li.className = "list-group-item";
    }
    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7")

    span.className = "close";

    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}