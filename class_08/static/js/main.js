/**
 * Created by shubham on 6/7/16.
 */


function addItem() {
    var val = document.getElementById("data").value;
    var ul = document.getElementById("list");

    if (val != "") {
        ul.innerHTML += '<li>' + val.toString() + '</li>';
    }
}