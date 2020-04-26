
// app holds the class 

export default class App {
    constructor() {
        this.fizzVal = 1;        
    }

    fizzFunc() {
        if(this.fizzVal <=100){
        this.addToList(this.fizzOperation());
        this.fizzVal ++
        }
        else if (this.fizzVal ==101) {
            this.fizzVal ++
            return this.addToList('too high dude');
        }
    }

    //this function updates the view with the fizz value
    addToList(fizzValue) {
        var ul = document.createElement("ul");
        ul.innerHTML = fizzValue
        document.getElementById("fizzlist").appendChild(ul);
    };
    
    fizzOperation() {
        if (this.fizzVal%3 == 0 && this.fizzVal%5 == 0) {
            return 'FizzBuzz';
        }
        else if (this.fizzVal%3 == 0) {
            return 'Fizz';
        }
        else if (this.fizzVal%5 == 0) {
            return 'Buzz';
        }
        else {
            return this.fizzVal
        }
    };

};