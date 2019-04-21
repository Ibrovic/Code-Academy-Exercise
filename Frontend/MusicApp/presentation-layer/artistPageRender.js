import { ArtistLogic } from "/business-layer/artistLogic.js";

export function RenderArtist() {
    this.artistPageData = new ArtistLogic();
    this.artistData = {};


    this.renderAll = async function (artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);

        var $mainContainer = $("#main-container");
        $mainContainer
            .append(this.renderTopWrap())
            .append(this.renderBottomWrap())
            // .append(this.searchBar())
        // .append(this.renderBio())
        // .append(this.renderAlbums());

    }

    

    this.renderTopWrap = function () {
        var $top = $("<div>").addClass("top");

        
        var $searchDiv = $("<div>").addClass("searchDiv").appendTo($top);
    
        var $search = $("<input>").addClass("search-bar").appendTo($searchDiv);
        var $button = $("<input>").attr("type", "submit").addClass("search-button").appendTo($searchDiv);

        var $profile = $("<div>").addClass("profile").appendTo($top);
        $("<h2>").html(this.artistData.artist.name).appendTo($profile);
        $("<img>").addClass("photo").attr("src", this.artistData.artist.image).appendTo($profile);

        ////////////
        var $similar = $("<div>").addClass("similar").appendTo($top);

        for (let i = 0; i < this.artistData.artist.similar.artist.length; i++) {

            $("<img>").attr("src", this.artistData.artist.similar.artist[i].image[1]["#text"]).appendTo($similar);
            $("<a>").html(this.artistData.artist.similar.artist[i].name).attr("href", this.artistData.artist.similar.artist[i].name).appendTo($similar);
        }

        return $top;
    }


    


    this.renderBottomWrap = function () {
        var $bottom = $("<div>").addClass("bottom");


        var $bio = $("<div>").addClass("bio").appendTo($bottom);
        $("<p>").html(this.artistData.artist.bio.summary).appendTo($bio);



        var $album = $("<div>").addClass("album").appendTo($bottom);





        return $bottom;
    }





    // this.renderArtistProfile = function() {
    //     var $profile = $("<div>").addClass("profile");

    //     $("<span>").attr("src",)
    //     $("<img>").addClass("photo").attr("src", this.artistData.artist.image).appendTo($profile);


    //     // $profile.append( $("<img>")); moze i ovako
    //     return $profile;
    // }



    // this.renderSimilar = function() {

    // }

    this.renderBio = function () {

    }

    this.renderAlbums = function () {

    }
}