https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = 'https://autosuggest-backend.onrender.com/api/autosuggest';
var searchBar = document.getElementById('search-bar');
var searchSuggestions = document.getElementById('search-Suggestions');
searchBar.addEventListener('input', function() {
    //get user typed data
    //use user typed data in query in the API call.
    //API call 
    //Append to all the Search Suggestions to div tag in UI.
    var query = searchBar.value.trim();
    fetchSuggestions(query);

});

function fetchSuggestions(query) {
    var fullAPI = API_URL + '?q=' + query + '&weighted=true&algorithm=trie&limit=8';
    fetch(fullAPI)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displaySuggestions(data.suggestions);
        })
        .catch(function(err) {
            console.log('Error:', err);
        });
        function displaySuggestions(data) {
            var values = data.results;
            if(data.count == 0){
                searchSuggestions.innerHTML = "<div>No suggestions found</div>";
            }
        else {
            var htmlString = '';
            for(var i = 0; i < values.length; i++) {
                htmlString += "<div class='suggestion-item'>" + values[i].text + "<;
            }
            searchSuggestions.innerHTML = htmlString;
        }
}

