
let move = document.querySelector(".section-move")



window.addEventListener('scroll' , ()=>{
    let value = window.scrollY;
    let middle = value / 7
    let little = value / 7

    console.log(value)

        move.style.left = middle * 0.9 + 'px';
        move.style.bottom = little * 0 + 'px';
        middle = value / 6.9

    
    
})