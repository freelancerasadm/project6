document.querySelector(".menu-social-icons li a").addEventListener("click",function(){
    document.querySelector(".menu-social-icons li a i").classList.toggle("fa-xmark")
});
document.querySelector(".menu-social-icons li a").addEventListener("click",function(){
    document.querySelector(".search-area").classList.toggle("activeclass");
});
document.querySelector(".menu-bars").addEventListener("click",function(){
    document.querySelector(".main-menu").classList.toggle("main-menu-block");
});
document.querySelector(".submenu-show").addEventListener("click",function(){
    document.querySelector(".sub-menu").classList.toggle("sub-menu-block");
});

