function run() {
    fizzBuzz();
    printArray();
    showHideClearButton();
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    run();
});

var arr = [];

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            arr.push("FizzBuzz");
        }
        else if (i % 3 == 0){
            arr.push("Fizz");
        }
        else if (i % 5 == 0){
            arr.push("Buzz");
        }
        else (arr.push(i));
    }
}

function printArray() {
    arr1 = arr.splice(0, 50)
    arr2 = arr.splice(0, 50)
    document.getElementById("col1").innerHTML = '<li>' + arr1.join("<li>")
    document.getElementById("col2").innerHTML = '<li>' + arr2.join("<li>");
}

function showHideClearButton(){
  var clr = document.getElementById("clear")
  if (clr.style.visibility === "hidden" || clr.style.visibility === ""){
    clr.style.visibility = "visible";
  }
  else {
    clr.style.visibility = "hidden";
  }
}

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', function() { //(e) => {
   clearScreen();
});

function clearScreen(){
    document.getElementById("col1").innerHTML = '';
    document.getElementById("col2").innerHTML = '';
    showHideClearButton();
}

