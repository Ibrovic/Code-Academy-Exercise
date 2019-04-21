export function Artist(params) {
    this.name = params.name;
    this.image = params.image[2]["#text"];
    this.bio = params.bio;
    this.similar = params.similar;
}