const bar = document.querySelector('.btn')
const nav = document.querySelector('.nav-list')
bar.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})


// for shop page
const mainImg= document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img')
smallImg[0].addEventListener('click', ()=>{
    mainImg.src = smallImg[0].src;
} )
smallImg[1].addEventListener('click', ()=>{
    mainImg.src = smallImg[1].src;
} )
smallImg[2].addEventListener('click', ()=>{
    mainImg.src = smallImg[2].src;
} )
smallImg[3].addEventListener('click', ()=>{
    mainImg.src = smallImg[3].src;
} )


// for add to cart
const cartBtn = document.getElementById('cart-btn')
const add = document.querySelector('.single-pro-image')

cartBtn.onclick(()=>{
    
})