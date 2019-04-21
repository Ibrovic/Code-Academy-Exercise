
export function AlbumRepository(){
    this.getAlbums = async function (artistName, topAlbums){
        var result = [];
        for (let index = 0; index < array.length; index++) {
            const album = albums[index];
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=c56bb9abaa06b86a702c9002244cc1a0&artist=Cher&album=Believe&format=json")
            var albumData = await response.json();
            result.push(new Album(albumData.album));
        }
    }
}