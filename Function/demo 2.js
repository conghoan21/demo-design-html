function square(number){
    let result = number * number;
    return result;
}
// let squareof2 = square(2);
// document.write('Square of 2 is: ' + squareof2 + '<br>');
// let squareof5 = square(5);
// document.write('Square of 5 is: ' + squareof5 + '<br>');
function calculate(){
    let input=document.getElementById("input").value;
    let result=square(input);
    document.getElementById("result").innerHTML=result;
}