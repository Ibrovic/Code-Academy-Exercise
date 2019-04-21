import { RenderArtist } from "/presentation-layer/artistPageRender.js";
import * as jquery from "/jquery.js";
// import * as moment from "/moment.js";

function main() {
    var renderer = new RenderArtist();
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        renderer.renderAll(hash);
    }
    else {
        renderer.renderAll("Cher");
    }
}
main();