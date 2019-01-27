/*Q8. Find the length of the string (entered by the user) without using the built-in function.
Supriya Dhakal
647
 */

'use strict';

function length(string){
    string += '\n';
    let len = 0;
    let i = 0;
    while(string.slice(i,i+1) !== '\n'){
        len++;
        i++;
    }
    alert("Input string: " + string + "\nOutput: " + len);
}

//reading input string from index.js
let string = prompt('Enter the String: ');
length(string);