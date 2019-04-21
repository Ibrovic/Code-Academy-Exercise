// An old woman has 3 cats. She has to feed them every day for one week. 
// The cats’ names are Tabby, Lizzie and Mary. Tabby likes fish and Lizzy likes chicken. 
// Mary eats anything you give her. Help the woman feed her cats by writing a script that will feed them for a week. 
// The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”);



function feedingCats() {
    var cats = ["Tabby", "Lizzie", "Mary"];
    for (var i = 0; i < 7; i++) {
        for (var index = 0; index < cats.length; index++) {
            var cat = cats[index];
            if (cat === "Tabby") {
                console.log("Tabby eat the fish")
            }
            else if (cat === "Lizzie") {
                console.log("Lizzy eat the chicken")
            }
            else if (cat === "Mary") {
                console.log("Mary eats anything")
            }

        }
    }
}


// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR.
// The whole process lasts one minute. Every second he has to massage the patient's heart 
// (console.log(“performing insertAction”);). 
// Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.

function saveLifes() {
    for (var i = 0; i < 4; i++) {
        cpr();
        console.log("Checking Pulse")
    }
    if (i < 5) {
        console.log("IT'S ALIVEEEE")
    }
}

function cpr() {
    for (var i = 0; i < 14; i++) {
        console.log("preforming CPR")
    }
}



// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.


function palindrome(value) {
    num = value;
    temp = 0;
    digit = num;

    while (num > 0) {
        suma = num % 10;
        num = Math.floor(num / 10);
        temp = temp * 10 + suma;
    }
    if (temp == digit) {
        console.log("Palindrome number");
    }
    else {
        console.log("Not Palindrome number");
    }
}


// A car uses 7 litres of fuel on 100km. How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

function carSpendFuel() {
    var litres = 7 / 100;

    for (var i = 1; i <= 100; i++) {

        if (i === 43) {
            var result = i * litres;
        console.log("Car will spend " + result + " litres for driving " + i + " kilometers");
        }
    }
}




// A girl tries to impress a boy by flirting with him. 
//Every flirt she makes is worth 1 point, every third flirt is worth 5 points and every 5th flirt is worth 10 points.
// Every 10th flirt the boy gets tired and deducts the girl’s points by 12.
// Write a function that will calculate if the girl impressed the boy or not,
// by accepting the number of tries the girl should use and the number of hitpoints the boy has, as function parameters.

function girlVsBoy(tries, hitpoints) {

    for (var i = 0; i < tries; i++) {

        if (i % 10 === 0) {
            hitpoints -= 10;

        } else if (i % 5 === 0) {
            hitpoints += 10;

        } else if (i % 3 === 0) {
            hitpoints += 5;

        } else {
            hitpoints += 1;
        }
    }

    if (hitpoints <= 0) {
        console.log("Mens are better");
        
    } else {
        console.log("Girls are better")
    }
}






// An orc warrior is fighting a human footman. The battle ends when one of them dies.
// The orc has 720 hitpoints, does 23-35 damage and has 5 armor. 
//The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. 
//Shields and armor deduct the damage that the fighter takes. Who will win the fight?



function orcVersusHuman() {

    var orcHitpoints = 720;
    var orcDamage = orcDoesDamage();
    var orcArmor = 5;

    var humanHitpoints = 550;
    var humanDamage = humanDoesDamage();
    var humanArmor = 9;

    while (orcHitpoints > 0 && humanHitpoints > 0) {

        humanHitpoints -= orcDamage + humanArmor;
        orcHitpoints -= humanDamage + orcArmor;

        if (humanHitpoints <= 0) {
            return console.log("Orc win!");

        } else if (orcHitpoints <= 0) {
            return console.log("Human win!");
        }

    }
}

function humanDoesDamage() {
    var min = 18;
    var max = 27;

    var humanFootmanDamage = Math.floor(Math.random() * (max - min + 1) + min);
    return humanFootmanDamage;
}

function orcDoesDamage() {
    var min = 23;
    var max = 35;

    var orcWarriorDamage = Math.floor(Math.random() * (max - min + 1) + min);
    return orcWarriorDamage;
}

orcVersusHuman();