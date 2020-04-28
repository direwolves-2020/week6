
// app holds the class 

export default class App {
    constructor() {
        this.ticker = null;
        this.stock_json = null;       
    }

    //this is the master function
    stockFetcher() {
    
    }

    //I first need to make a fetch call
    fetchCall() {
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.ticker}&apikey=NTHKJK7ALI9K1WBE`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('it worked')
            return response.json();
        })
        .then((data) => {
            
            var stock_info =  data["Time Series (Daily)"]["2020-04-27"];
            var stock_values = Object.values(stock_info);
            
   
            stock_values.forEach(element => {
                let td = document.createElement("td");
                td.innerHTML = element;
                document.getElementById("output").appendChild(td);
            });
    
        })
    
    }
};