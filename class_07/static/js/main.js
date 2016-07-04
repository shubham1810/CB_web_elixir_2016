/**
 * Created by shubham on 4/7/16.
 */

var globalFlag = false;
var btns;

document.getElementById("two").onclick = function () {
    clicked_button();
};

function clicked_button() {
    // console.log(e);
    // document.body.style.backgroundColor = getRandomColor();
    document.body.style.background = 'radial-gradient('+ getRandomColor() +',' + getRandomColor() + ',' + getRandomColor() +') no-repeat';
    document.body.style.backgroundSize = 'cover';

    if (globalFlag == false) {
        var calc = document.getElementById("calc");

        for (var i = 0; i < 10; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("id", i);
            btn.setAttribute("class", "btn");
            var txt = document.createTextNode(i);
            btn.appendChild(txt);
            calc.appendChild(btn);
        }
        btn = document.createElement("button");
        btn.setAttribute("id", 'c');
        btn.setAttribute("class", "btn");
        btn.appendChild(document.createTextNode("C"));
        calc.appendChild(btn);

        globalFlag = true;
        document.getElementById("two").innerHTML = "Change Color";
        btns = document.getElementsByClassName("btn");
    }

    // console.log(document.getElementsByClassName("btn"));
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    // console.log(color);
    return color;
}

document.body.onclick = function () {
    for (var i = 0; i < btns.length; i++) {
        //console.log(btns[i]);
        btns[i].onclick = function () {
            //console.log(this.id);
            if (this.id == 'c') {
                document.getElementById("txtarea").value = '';
            } else {
                document.getElementById("txtarea").value += this.id;
            }

        }
    }
};