    
    document.getElementById("button").addEventListener("click",
    function fib() {
        let htmlout = "";
        for (i=1; i <= 100; i++) {
            fibnum = i;
        
            if (i % 5 == 0 && i % 3 ==0) {
                htmlout += "<p class = 'out'>FizzBuzz</p>";
            }
            else if (i % 3 == 0) {
                htmlout += "<p class = 'out'>Fizz</p>";
            }
            else if (i % 5 == 0) {
                htmlout += "<p class = 'out'>Buzz</p>";
            }
            else{
                htmlout += `<p class='out'>${fibnum}</p>`;
            }
        }
        document.getElementById("output").innerHTML = htmlout;

    });
