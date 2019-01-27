/*Q5. Given the percentage of a student, find out the division of that student. Conditions:

Supriya Dhakal
647
*/

function Divisionclassifier(p){

    if(( p>=80) && (p<=100)){
        console.log("You've passed with Distinction!");
    }

    else if((p>=60)&&(p<80)){
        console.log("You've passed in First Division");
    }
    else if((p >= 40) && (p < 60))
    {
        console.log("You've passed in Second Division");
    }

    else if((p >= 32) && (p< 40))
    {
        console.log("You've passed in Third Division");
    }
    else{
        console.log("Sorry!, You've failed");
    }
}

Divisionclassifier(94);