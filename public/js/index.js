window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.error('Error: ', nombre);
    if(nombre !='' && nombre != null){
        subtitulo.innerHTML += ` ${nombre}`;
    }else {
        subtitulo.innerHTML += ' INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }

    const menu = document.getElementById('menu');
    const logo = document.querySelector('.logoDH')
    logo.addEventListener('click',(e)=>{

        menu.classList.toggle('mostrar')
    })

    logo.addEventListener('mouseout',(e)=>{
        menu.classList.remove('mostrar')
    })
    

    container.style.display = 'block';
}