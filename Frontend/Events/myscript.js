// document.getElementById("sample-button").addEventListener("click", function(){
//     console.log("button cliced");
// } )



function createParagraph(){
    var par = document.createElement("p");
    par.innerHTML = "Some text asdjoasjfkas";
    document.getElementsByTagName("body")[0].appendChild(par);

    par.addEventListener("click", function(event){
        event.target.style.color = "red";
        //
        event.target.style.fontSize = "50px";
        event.target.style.fontStyle = "Ariel";

    })


    var butt = document.createElement("button");
    document.getElementsByTagName("body")[0].appendChild(butt);
    butt.addEventListener("click", function(event){
        event.target.style.height = "50px";
        event.target.style.width = "50px";
    })




}

// createParagraph();




function Resize(){
    window.addEventListener("resize", function(){
        console.log(innerHeight, innerWidth);
    })
}

// Resize();



function Form(){
    var main = document.getElementById("sample-div");



    var inputFirst = document.createElement("input");
    inputFirst.setAttribute("type", "text");
    inputFirst.setAttribute("placeholder", "First Name");

    var inputLast = document.createElement("input");
    inputLast.setAttribute("type", "text");
    inputLast.setAttribute("placeholder", "Last Name");

    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("placeholder", "Email" );

    var inputPass = document.createElement("input");
    inputPass.setAttribute("type", "password");
    inputPass.setAttribute("placeholder", "Password");

    var button = document.createElement("input");
    button.setAttribute("type", "submit")

    var user = {
        firstName: inputFirst.value,
        lastName: inputLast.value,
        inputEmail: inputEmail.value,
        inputPass: inputPass.value,
    }
    //// lisener
    

    

    main.appendChild(inputFirst);
    main.appendChild(inputLast);
    main.appendChild(inputEmail);
    main.appendChild(inputPass);
    main.appendChild(button);

}

Form();