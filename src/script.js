window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-aktif');
    navMenu.classList.toggle('hidden');
});

const toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', function(){
    if(toggle.checked){
        html.classList.toggle('dark');
    } else{
        html.classList.toggle('dark');
    }
});