function add(x,y) {
    const z = x + y;
    upd(z);
}

function mul(x,y) {
    const z = x * y;
    upd(z);
}

function div(x,y) {
    const z = x / y;
    upd(z);
}

function sub(x,y) {
    const z = x - y;
    upd(z);
}

function upd(result) {
    alert("Result: " + result);
    document.getElementById('result').innerText = "Last Result: " + result;
}