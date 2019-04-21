// Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
// Bonus: Write another function that will be able to convert Fahrenheit to Celsius and save the result,
//  then display it. Formula: (5/9) * (Fahrenheit-32)


function celsiusToFahrenheit(number) {
    var a = number;
    var b = 1.8;
    var c = 32;
    var calculation = (a * b + c);
    // console.log(calculation);
    return calculation;
}

function fahrenheitToCelsius(number) {
    var result = (5 / 9) * (number - 32);
    // console.log(result);
    return result;

}


// Another one


function converterTemperature(temperature, type) {
    if (type === "C") {
        result = temperature * 1.8 + 32;
    }
    else if (type === "F") {
        result = (5 / 9) * (temperature - 32);
    }
    else {
        return "wrong input";
    }
}



// Write a JavaScript program that will calculate the price of 30 iPhones brought in from USA,
//  where the price of one iPhone is $899.95, the customs rate is 5% and the tax rate is 18%.

// Modify the previous task to handle any phone at any price, with any given customs and tax rates.


//OK



function phone(numberOfPhone, price, type) {
    var tax = price * 5 / 100;
    var customs = price * 18 / 100;
    var result = (numberOfPhone * price) - tax - customs;
    if (type === "A") {
        result - result * 0.02
    }
    else if (type === "Ios") {
        result - result * 0.05
    }
    console.log(result);
}



// Ask the user how much money does he have, and depending on the value, suggest him what should he do


function pari() {
    var pari = prompt("How much money do you have");

    if (pari >= 10000) {
        console.log("Great");
    }

    else if (pari >= 1000) {
        console.log("Good");
    }

    else if (pari <= 999) {
        console.log("Sit home")
    }

}




// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them


function maxOfThree(a, b, c) {
    var result;
    if ((a > b) && (a > c)) {
        result = a;
    }

    else if ((b > a) && (b > c)) {
        result = b
    }

    else {
        result = c;
    }
    console.log(result)
}



// Calculate the cost of registering a vehicle if the tariff is:
// 3000 denars for vehicles that have less or equal than 85 bhp
// 5000 denars for vehicles above 85 bhp but less or equal than150 bhp
// 15000 denars for vehicles above 150 bhp


function registeringVehicle(numOfBhp) {
    var result;

    if (numOfBhp <= 85) {
        result = 3000 + " denars";
    }

    else if ((numOfBhp >= 85) && (numOfBhp <= 150)) {
        result = 5000 + " denars";
    }

    else if (numOfBhp > 150) {
        result = 15000 + " denars";
    }

    else {
        result = "Wrong value";
    }

    console.log(result);
}




// HOMEWORK


// Write a function that will receive 3 parameters. Two strings and a boolean. If the boolean value is “true”, concatenate the strings. 
// If the value is false, concatenate them in the inverse order. Think about what would happen if we enter only 1 or 2 parameters.

//ok

function stringsAndBoolean(string1, string2, bool) {
    var result;

    if (bool === true) {
        result = string1 + string2;
    }

    else if (bool === false) {
        result = string2 + string1;
    }

    else {
        result = "Try again"
    }

    console.log(result);

}




// Calculate the tax that people need to pay for their salary. 
// Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, they pay 18% for the sum above the threshold. 
// (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). 
// Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5% and 10% respectively


function salaryTax(salary, craftsman) {

    if (craftsman === "no") {

        if (salary <= 1000) {
            result = salary * 0.11;
        }

        else if (salary > 1000) {
            tax18 = salary - 1000;
            tax18 = tax18 * 0.18;
            tax11 = salary - tax18;
            tax11 = tax11 * 0.11;
            result = tax18 + tax11;
        }

        console.log("Your taxes are " + result);
    }



    else if (craftsman === "yes") {

        if (salary <= 1000) {
            result = salary * 0.05;
        }

        else if (salary > 1000) {
            tax10 = salary - 1000;
            tax10 = tax10 * 0.10;
            tax5 = salary - tax10;
            tax5 = tax5 * 0.05;
            result = tax10 + tax5;
        }

        console.log("Your taxes are " + result);

    }
}