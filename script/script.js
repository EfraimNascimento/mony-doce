function hamburguer(){
    const listmenu = document.querySelector('#menu ul');
    const menu = document.querySelector('#menu');

    if(listmenu.style.transform == 'translateY(-185%)'){
        listmenu.style.transform = 'translateY(0%)';
        menu.style.height = 'fit-content';
    }else{
        listmenu.style.transform = 'translateY(-185%)';
        menu.style.height = '95px';
    }      
    
};