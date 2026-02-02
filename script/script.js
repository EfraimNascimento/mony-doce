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
    if(spans[0].style.display == 'block'){
        spans[0].style.display = 'none';
        spans[1].style.transform = 'translate(0px, 3px) rotate(-50deg)';
        spans[2].style.transform = 'translate(0px, -3px) rotate(50deg)';
    
    }else{
        spans[0].style.display = 'block';
        spans[1].style.transform = 'rotate(0deg)';
        spans[2].style.transform = 'rotate(0deg)';
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
            const targetPosition = target.offsetTop - headerHeight - 150;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

});

function darkMode(){
    let icon = document.querySelector('body');
    icon.classList.toggle('escuro');
}

function carrossel(){
    const images = document.querySelectorAll('#carrossel img')

    

}
