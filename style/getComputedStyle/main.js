/* let message=document.querySelector('.message')

let style=getComputedStyle(message)

console.log('color: ',style.color)
console.log('Background-Color: ',style.backgroundColor)
console.log('Padding: ',style.padding)
console.log('Border: ',style.border) */


let p = document.getElementById('main');
        let style = getComputedStyle(p, '::first-letter');
        console.log(style.fontSize);