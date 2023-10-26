"use strict";
const fom = document.querySelector('form');
console.log("silvia");
fom.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    let my_value = input.value;
    const error_message = document.querySelector('.error_message');
    const input_ele = document.querySelector('#input');
    my_value = my_value.toString();
    if ((my_value.includes("@")) && (my_value.includes(".")) && ((my_value.trim()).length != 0)) {
        // The email is valid
        error_message.innerHTML = "";
        error_message.style.color = "";
        input_ele.style.border = "";
        input_ele.style.background = "";
        window.location.href = "success.html";
    }
    else {
        // The email is invalid
        error_message.innerHTML = "Invalid email ";
        error_message.style.color = "red";
        input_ele.style.border = "solid red";
        input_ele.style.background = "red";
    }
});
