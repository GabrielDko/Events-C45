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



    let estadoSecreto = 0;
    const movieTitle = document.getElementById('titulo');
    
    movieTitle.addEventListener('keydown', (e) => {
        if (estadoSecreto === 0 && e.key === 's') {
            estadoSecreto = 1;
        } else if (estadoSecreto === 1 && e.key === 'e') {
            estadoSecreto = 2;
        } else if (estadoSecreto === 2 && e.key === 'c') {
            estadoSecreto = 3;
        } else if (estadoSecreto === 3 && e.key === 'r') {
            estadoSecreto = 4;
        } else if (estadoSecreto === 4 && e.key === 'e') {
            estadoSecreto = 5;
        } else if (estadoSecreto === 5 && e.key === 't') {
            estadoSecreto = 6;
        } else {
            estadoSecreto = 0;
        }
    
        if (estadoSecreto === 6) {
            alert('SECRETO MÁGICO');
            estadoSecreto = 0;
        }
    });
}