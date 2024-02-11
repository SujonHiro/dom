/* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
 */
/* That is: removes all dashes, each word after dash becomes uppercased. */

//// splits 'my-long-word' into array ['my', 'long', 'word']
 // capitalizes first letters of all array items except the first one
 // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
 // joins ['my', 'Long', 'Word'] into 'myLongWord'


 function camelize(str){
    return str
    .split('-')
    .map(
        (word,index)=>index==0 ? word: word[0].toUpperCase() + word.slice(1)
    )
    .join('')
 }
 const result=camelize('my-long-word');
 
 console.log(result);

 