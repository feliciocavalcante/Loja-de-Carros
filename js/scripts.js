let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = document.querySelectorAll('.list .item');
let indicadores = document.querySelector('.indicadores');
let dots = indicadores.querySelectorAll('ul li');
let list = container.querySelector('.list');

let activo = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.activo');
    itemOld.classList.remove('activo');

    activo = (activo + 1) > lastPosition ? 0 : activo + 1; 

    items[activo].classList.add('activo');

    let dotsOld = indicadores.querySelector('ul li.activo'); 
    if (dotsOld) { 
      dotsOld.classList.remove('activo');
    }
    dots[activo].classList.add('activo');

    indicadores.querySelector('.numero').innerHTML = '0' + (activo + 1);
};

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.activo');
    itemOld.classList.remove('activo');

    activo = (activo - 1) < firstPosition ? lastPosition : activo - 1; 

    items[activo].classList.add('activo');

    let dotsOld = indicadores.querySelector('ul li.activo'); 
    if (dotsOld) { 
      dotsOld.classList.remove('activo');
    }
    dots[activo].classList.add('activo');

    indicadores.querySelector('.numero').innerHTML = '0' + (activo + 1);
};