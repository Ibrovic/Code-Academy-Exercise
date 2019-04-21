function PageRenderer(data) {
    this.userData = data;
    this.renderAll = function() {
        var mainContainer = document.getElementById("main-container");
        mainContainer.style.display = "flex";
        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function() {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "200px";
        profileImage.style.height = "200px";
        profileImage.src = "img/profile.jpg"
        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        aboutHeader.innerHTML = "My name is Vladimir";
        var aboutText = document.createElement("p");
        aboutText.innerHTML = "And I love cats";
        
        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function() {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";

        var pictureContainer = document.createElement("div");

        for (let i = 0; i < 14; i++) {
            var picture = document.createElement("img");

            picture.src = "img/picture.jpg";
            picture.style.width = "100px";
            picture.style.height = "100px";
            picture.style.padding = "10px";
            pictureContainer.appendChild(picture);


            picture.addEventListener("mouseover", function(event){
                event.target.style.height = "120px";
                event.target.style.width = "120px";
            })

            picture.addEventListener("mouseout", function(event){
                event.target.style.height = "100px";
                event.target.style.width = "100px";
            })
        }


        rightContainer.appendChild(pictureContainer);

        var storyContainer = document.createElement("div");

        // for (let j = 0; j < array.length; j++) {
        //     var header = document.createElement("h1")

        //     header.



        // }





        return rightContainer;

    }
}