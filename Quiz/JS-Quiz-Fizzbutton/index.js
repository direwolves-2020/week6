//index holds the event listeners
import App from './app';

let app = new App();
app.fizzVal = 97

//selecting the button, waiting for the user to click the button
var button = document.getElementById("button");
button.addEventListener('click', function (e){
    app.fizzFunc()
});
