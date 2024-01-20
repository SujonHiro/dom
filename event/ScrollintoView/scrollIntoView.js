let btn=document.querySelector('.btn')
let special=document.querySelector('.special')

btn.addEventListener('click',function(){
    special.scrollIntoView(true,{
        behavior: 'smooth'
    })
})