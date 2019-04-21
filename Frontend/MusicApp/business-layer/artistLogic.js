import { ArtistRepository } from "/repositories/artistRepository.js"

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();

    this.getArtistPageData = async function (artistName) {
        var artist = await this.artistRepo.getArtist(artistName);
        // console.log(artist);

        var pageData = {
            artist: artist,
            bio: artist.bio.summary,
            similar: artist.similar,
        }
        return pageData;
    }
}


