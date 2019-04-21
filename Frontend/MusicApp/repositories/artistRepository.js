import { Artist } from "/entities/artist.js";

export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=c56bb9abaa06b86a702c9002244cc1a0&format=json");
            result = await response.json();

            console.log("repo:", result.artist);

            return new Artist(result.artist, result.artist.bio, result.artist.similar);
        } catch (error) {
            return result;
        }
    }
}