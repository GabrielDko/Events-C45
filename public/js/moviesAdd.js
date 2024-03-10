window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');

    titulo.addEventListener('mouseover',(e)=>{
        titulo.classList.toggle('animationTitle')
    })


    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');



}