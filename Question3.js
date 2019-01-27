/*Q3. The Temperature Converter

Store a celsius temperature into a variable.
  Supriya Dhakal
  647*/

"use strict";

function fahrenheittocel(c){
    var f=c+9/5*32;
    console.log("The centigrade temperature"+c+"converted to fahrenheit is "+f);
}

function celsiustofahren(fr)
{
    var c = (fr - 32) * (5/9);
    console.log( "The fahrenheit temperature"+fr +"in celsius is"  + c);
}
let f=fahrenheittocel(10);
celsiustofahren(100);