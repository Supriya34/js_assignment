/*Q10. check whether the number entered by the user is a strong number or not.
Supriya Dhakal
647
 */

function rFact(num)
{
    if (num === 0 || num === 1)
    { return 1; }
    else
    { return num * rFact( num - 1 ); }
}
var attempt;
function strongNumber(){
    attempt = document.getElementById('attempt').value;

    let value = attempt.split('').map(Number);

    var i, sum = 0;

    for ( i = 0; i< value.length ; i++ )
    {
        sum += rFact(value[i]);
    }

    if( sum === parseInt(attempt))
    {
        outcome.innerHTML = "The number is a Strong Number";
    }
    else{
        outcome.innerHTML = "The number is not a Strong Number";
    }

}