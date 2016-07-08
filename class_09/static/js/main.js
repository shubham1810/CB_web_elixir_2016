
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    // console.log(color);
    return color;
}


document.getElementById("click").onclick = function () {
    document.getElementById("one").style.background = 'radial-gradient('+ getRandomColor() + ',' + getRandomColor() +') no-repeat';
};