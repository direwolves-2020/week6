// const ticker = document.getElementById("ticker").value;
// const today = new Date(); 
// const date = today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + today.getDate();

// let url = `https://www.quandl.com/api/v3/datasets/WIKI/${ticker}.json?column_index=4&start_date=${date}&end_date=${date}`
// let url = `https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2020-04-27&end_date=2020-04-28`
// fetch(url)
//  .then((response) => {
//    return response.json();
//  })
//  .then((data) => {
//     console.log(data);
//   });


const ticker = document.getElementById("ticker").value;
const today = new Date(); 
const date = (today.getFullYear() - 3) + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + today.getDate();
const price = document.getElementById("price");
const tickerForm = document.getElementById("ticker_form");

let url = `https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?column_index=4&start_date=${date}&end_date=${date}`;

  
function findMatch(e) {
    //e.preventDefault();
    
    const p = new Promise((resolve, reject) => {
   
    const postPromise = fetch(url)
        if (postPromise) {
            resolve(postPromise);
        } else {
            reject(Error('Could not reach url'));
        }
    })
    p
        .then(blob => blob.json())
        .then(data => {getPrice(data)})
        .catch(err => {
            console.log(err);
        });
    }

   
function getPrice(){
    price.innerHTML = 1;
}

tickerForm.addEventListener('submit', findMatch);
