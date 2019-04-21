// Write a JavaScript program that will iterate from 0 to 15. For each iteration, 
// it will check if the current number is odd or even,
//  and display a message to the screen(alert or console.log).

///OK

function vezba1_1() {
    for (var broj = 0; broj <= 15; broj++) {
        if (broj % 2 == 0) {
            console.log(broj + " is Even number");
        }
        else if (broj % 2 == 1) {
            console.log(broj + " is Odd number");
        }
    }
}

// Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log)


//OK

function vezba1_2() {
    for (var broj = 1; broj <= 100; broj++) {
        if ((broj % 3 == 0) && (broj % 5 == 0)) {
            console.log("FizzBuzz" + broj)
        }
        else if (broj % 3 == 0) {
            console.log("Fizz" + broj)
        }
        else if ((broj % 5) == 0) {
            console.log("Buzz" + broj)
        }
    }
}




// Write a JavaScript program to find the armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is
//  equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 


function vezba2_1() {

    for (var value = 100; value < 1000; value++) {
        var isArmstrong = armstrongFunc(value);

        if (isArmstrong) {
            console.log(value);
        }
    }
}


function armstrongFunc(value) {
    var audition = 0;
    var valueVariable = value;

    while (value) {
        var digit = value % 10;
        var value = Math.floor(value / 10);
        audition += Math.pow(digit, 3);
    }
    if (audition === valueVariable) {
        return true;

    }
    else {
        return false;
    }
}



// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.


function vezba2_2() {
    result = 0
    for (var i = 0; i <= 999; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result += i;
        }
    }
    console.log(result)
}



// Write a JavaScript program to get the integers in range (x, y).
//  Input the range as parameters. Print the result as a string.


function vezba3_1(x, y){

    for(var i = x; i < y; i++ ){
        var result = i.toString();
        console.log(result);
    }
}


//Write a JavaScript program that will iterate through a given range of numbers (as function parameters) and sum the numbers. 
//However, if the iteration reaches a prime number, you should skip summing that number, but continue with the loop. 
//A prime number is a number that is divisive only with itself or 1.
// Print out the sum to console and the number of times you skipped summing a prime number.
// BONUS: Print out the prime numbers you’ve found into a string or array.



function sumWithoutPrimes(value) {

    var sum = 0;
    var sum1 = [];
    for (var i = 2; i <= value; i++) {
        if (isPrime(i)) {
            sum += i;
        } else {
            sum1 += i + ", ";
        }
    }
    console.log(sum, [sum1]);
}

function isAprime(value) {
    for (var i = 2; i < value; i++) {
        if (!(value % i)) {
            return false;
        }
    }
    return true;
}