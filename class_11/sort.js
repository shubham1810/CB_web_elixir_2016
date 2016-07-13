var data = process.argv;
console.log(data);

var arr = []

for (var i=2; i<data.length; i++) {
    arr.push(data[i]);
}

console.log(arr);
console.log(arr.sort(function (a, b) {
    // console.log(a, b);
    return Number(a)-Number(b);
}));
