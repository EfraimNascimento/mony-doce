function darkMode(icon){
    const bodyTheme = document.querySelector('body');
    let theme = 'claro'

    if(localStorage['tema'] == 'escuro'){
        bodyTheme.classList.remove('escuro');
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
        theme = 'claro'
    }else{
        bodyTheme.classList.add('escuro');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        theme = 'escuro'
    }
    localStorage.setItem('tema', theme);
}

function checkTheme(){
    const bodyTheme = document.querySelector('body');
    let icon = document.querySelector('#icone i')
    if(localStorage['tema'] == 'claro'){
        bodyTheme.classList.remove('escuro');
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }else{
        bodyTheme.classList.add('escuro');
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-moon');
    }
}

function hamburguer(){
    const listmenu = document.querySelector('#menu ul');
    const menu = document.querySelector('#menu');

    if(listmenu.style.display == 'none'){
        hamburguerIconChange()
        listmenu.style.display = 'block';
        menu.style.height = 'fit-content';
    }else{
        hamburguerIconChange()
        listmenu.style.display = 'none';
        menu.style.height = '50px';
    }      
};

function hamburguerIconChange(){
    const spans = document.querySelectorAll('#hamburguer span');
    if(spans[0].style.display == 'none'){
        spans[0].style.display = 'block';
        spans[1].style.transform = 'rotate(0deg)';
        spans[2].style.transform = 'rotate(0deg)';
    }else{
        spans[0].style.display = 'none';
        spans[1].style.transform = 'translate(0px, 3px) rotate(-50deg)';
        spans[2].style.transform = 'translate(0px, -3px) rotate(50deg)';
    }
}

const links = document.querySelectorAll('#menu ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        hamburguer();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 140;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

});

window.addEventListener('scroll', ()=>{

    const toTop = document.getElementById('toTop');
    const nav = document.querySelector('#menu');

    if(scrollY != 0 && scrollY >= 210){
        toTop.style.transform = 'translateY(0%)';
        nav.classList.add('ativo')
    }else{
        toTop.style.transform = 'translateY(200%)';
        nav.classList.remove('ativo')
    }    
})

let goToTop = document.getElementById('toTop');
goToTop.addEventListener('click', (e)=>{
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

const track = document.getElementById('scrollTrack');
const items = track.innerHTML;

track.innerHTML += items;



document.addEventListener('DOMContentLoaded', () => {
   const triggers = document.querySelectorAll('.image')
   const tooltip = document.createElement('div');

    triggers.forEach(cardImage =>{
        
        cardImage.addEventListener('mouseenter', ()=>{
            // cardImage.innerHTML += '<p>'+ cardImage.lastElementChild.alt +'</p>'
            cardImage.toggleAttribute()

            
        });

        

    });
});
