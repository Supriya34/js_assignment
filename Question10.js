/*
Q9. check whether a number (entered by the user) is a perfect number or not.
*/

"use strict";

function perfectNumber() {

    var onum = window.prompt("Enter the number: ");
    var num = parseInt(onum);

    let i, sum = 0;
    for(i = 0; i < num ; i++){
        if ( (num % i) === 0)
        {
            sum += i;
        }
    }

    if ( sum === num)
    {
        console.log(num + " is a perfect number");
    }
    else{
        console.log(num + " is not a perfect number");

    }
}