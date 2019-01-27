/*Q6. The Pluralizer

Supriya Dhakal

*/

function pluralizer(noun,num){

    if(num==1){
        console.log(num+noun);
    }

    else if(num>1){
        console.log(num+noun+"s");
    }
}

pluralizer('car',1)
