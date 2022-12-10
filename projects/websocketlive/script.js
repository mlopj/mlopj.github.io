const { time } = require("console")
let input_element = document.getElementById('socket-name')
document.getElementById('socket-name').value = "Untitled Web Socket"
function generate() {
    // variables
    let input = document.getElementById('socket-name').value
    let input_element = document.getElementById('socket-name')
    let create_btn = document.getElementById('create-btn')
    let default_name = false

    //if input is empty sets it to default
    if (input === "") {
        input = "Untitled Web Socket"
        default_name = true
    }

    //makes input uneditable
    input_element.setAttribute("readonly", "");

    document.getElementById('socket-name').value = input

    //animates button
    create_btn.classList = "animated"
    setTimeout(function(){
        create_btn.innerText = "OFFLINE" 
    }, 500);
    //create_btn.setAttribute("disabled", "");
    console.log('hi')
}
function set() {
    this.style.width = this.value.length + "ch";
}