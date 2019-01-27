
/*Q2. Calculate properties of a circle, using the definitions here.

   Supriya Dhakal
   647
   .*/

var r=10;
const p=3.14;

function circumference(r){
    let circum=2*p*r;
    console.log("The circumference is"+circum);

    let area=p*r*r;
    console.log("The area is"+area);
}

circumference(5);