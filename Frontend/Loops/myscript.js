// Write a JavaScript program to randomly generate ten values, 
// determine the largest value that you’ve generated, and print it to console or alert.



function bigestOfRandom() {
    var num = 0;
    var bigest = 0;

    while (num < 10) {
        var random = Math.random();
        if (random > bigest) {
            bigest = random;
        }
        num++;
    }
    console.log(bigest);
}

// Write a JavaScript program to write the sum of squares of the numbers from 101 to 150.


function suma() {
    var result = 0;
    for (var num = 101; num <= 150; num++) {
        result += Math.pow(num, 2);
    }
    console.log(result)
}



// Write a JavaScript program that will read in an integer and sum its digits.



function sobiranjeNaBroevi(num) {
    suma = 0;
    while (num) {
        suma += num % 10;
        num = Math.floor(num / 10);
        if (suma >= 10) {
            num += suma % 10;
            suma = Math.floor(suma / 10);

        }
    }
    console.log(suma)

}




// Write a function that accepts two numbers N and X. 
// Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X.
// A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number.
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).




function closestNumber(N, X) {
    if (N > X) {
        console.log("N needs to be smaler than X")
    }
    else if (N === X) {
        console.log("N and X are the same number")
    }
    else {
        while (N < X) {
            N++;

            if (compare(N, X) === false) {
                console.log(N);

                break;
            }
        }
    }
}


function compare(N, X) {
    var check = false;

    while (N > 0) {
        var numN = N % 10;
        N = Math.floor(N / 10);

        var tempX = X;

        while (X > 0) {
            var numX = X % 10;
            X = Math.floor(X / 10);

            if (numN == numX) {
                return true;
            }
        }
        X = tempX;
    }
    return check;

}
