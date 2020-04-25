## Javascript Quiz:

### Bonus/Elective
You should use the fetch api call for this which will require you to work with promises. It is an elective, but I'd recommend you at least take a shot at it.

### Stock lookup

Write a javascript program and HTML file with a title, a text input field,
a button, and a div to contain output.

Change the appearance of at least 2 of the elements using a stylesheet.

The user inputs a stock symbol and then the price of that stock is displayed
in the contents of an html div.

Use the quandl API

https://docs.quandl.com/docs/in-depth-usage#get-time-series-data

An example request that you would make to retrieve JSON data for Facebook (FB) would be

https://www.quandl.com/api/v3/datasets/WIKI/FB.json?column_index=4&start_date=2014-12-30&end_date=2014-12-31

The response will look like the following

```
{"dataset":{"id":9775687,"dataset_code":"FB","database_code":"WIKI","name":"Facebook Inc. (FB) Prices, Dividends, Splits and Trading Volume","description":"End of day open, high, low, close and volume, dividends and splits, and split/dividend adjusted open, high, low close and volume for Facebook, Inc. (FB). Ex-Dividend is non-zero on ex-dividend dates. Split Ratio is 1 on non-split dates. Adjusted prices are calculated per CRSP (www.crsp.com/products/documentation/crsp-calculations)\n\nThis data is in the public domain. You may copy, distribute, disseminate or include the data in other products for commercial and/or noncommercial purposes.\n\nThis data is part of Quandl's Wiki initiative to get financial data permanently into the public domain. Quandl relies on users like you to flag errors and provide data where data is wrong or missing. Get involved: connect@quandl.com\n","refreshed_at":"2018-03-27T21:46:11.036Z","newest_available_date":"2018-03-27","oldest_available_date":"2012-05-18","column_names":["Date","Close"],"frequency":"daily","type":"Time Series","premium":false,"limit":null,"transform":null,"column_index":4,"start_date":"2014-12-30","end_date":"2014-12-31","data":[["2014-12-31",78.02],["2014-12-30",79.22]],"collapse":null,"order":null,"database_id":4922}}
```

JSON when received on the Javascript side can be treated like any other javascript object, so for the response above if you want to extract the name out of the response above you'd do it like so

```
let stockName = response.dataset.name
```

You should make the API call using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) and work with promises to register handler functions to be called when the promises are resolved to the response data. 