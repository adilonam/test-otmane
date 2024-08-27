document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from a public API
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            // Display the result in the body
            document.getElementById('api-result').textContent = JSON.stringify(response.data, null, 2);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});
