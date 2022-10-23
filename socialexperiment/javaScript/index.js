callWs = function(){
	// The Endpoint URL
	let url = 'https://jsonplaceholder.typicode.com/posts/1';
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
