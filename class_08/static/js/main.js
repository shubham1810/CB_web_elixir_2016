/**
 * Created by shubham on 6/7/16.
 */


var storage = localStorage;

function addItem() {
    var val = document.getElementById("data").value;
    var ul = document.getElementById("list");

    var todos = storage.getItem("todos");
    console.log(todos+['L']);

    if (val != "") {
        ul.innerHTML += '<li>' + val.toString() + '</li>';
    }
}