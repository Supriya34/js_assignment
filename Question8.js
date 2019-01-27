/*Q7. Determine whether a year is a leap year or not

Supriya Dhakal
647
*/

function leapyear(year){
    if((year%4 == 0 && year%100 != 0) || year%400 == 0){
        return 1;
    }
    else{
        return 0;
    }
}

if (leapyear(500) == 1){
    console.log("The year is leap year");
}
else{
    console.log("The year is not leap year");
}