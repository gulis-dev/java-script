let round;

let row = {
    r0: ["", "", ""],
    r1: ["", "", ""],
    r2: ["", "", ""]
}
let col = {
    c0: ["", "", ""],
    c1: ["", "", ""],
    c2: ["", "", ""]
}

function cellClick(r, c) {
    document.getElementById(r+c).innerHTML = "x";
    console.log(row);
}