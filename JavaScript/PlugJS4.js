function convert() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result = amount * from / to;
    document.getElementById("result").innerHTML = 'result : ' + result;
}