window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    
    const logo = document.querySelector('figure');

    logo.addEventListener('mouseover',(e)=>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    
    const removeDarkMode = document.querySelector('.modo-oscuro');

    removeDarkMode.addEventListener('click', (e)=>{
        body.classList.remove('fondoMoviesList');
        body.style.backgroundColor = 'white'
        
    })
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}