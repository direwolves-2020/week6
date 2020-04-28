//index holds the event listeners
import App from './app';

let app = new App();

//selecting the button, waiting for the user to click the button
var button = document.getElementById("submission");
button.addEventListener('click', function (e){
    //this first sets the value of the ticker to what we are searching for
    app.ticker = document.getElementById("ticker").value.toUpperCase()
    //then we run the function
    app.stock_json = app.fetchCall()
});