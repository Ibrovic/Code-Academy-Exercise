export function searchArtist() {
    this.getSearchArtist = async function (artistSearch) {
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistSearch + "&api_key=c56bb9abaa06b86a702c9002244cc1a0&format=json");
            result = await response.json();

            console.log ( "search", result.results.artistmatches);
            
            return result.results.artistmatches;
            
        } catch (error) {
            return result;
        }
    }
}

