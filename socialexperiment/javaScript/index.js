callWs = function(){
	
	/* let day = Date.now();
	day /= 86400;
	day = Math.ceil(day);
	*/
	
	// The Endpoint URL
	let url = 'https://htmlpreview.github.io/?https://github.com/BluePrintLabs/mainlab/blob/main/socialexperiment/javaScript/quote.json';
	fetch(url)
  .then(function(response) {
  	// Render the Response Status
  	document.getElementById('result').innerHTML = response.status;
    // Parse the body as JSON
    return response.json();
  })
  .then(function(json) {
  	// Render the parsed body
  	document.getElementById('result_json').innerHTML = JSON.stringify(json);
  })
}
