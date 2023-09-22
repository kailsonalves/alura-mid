function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
// Estrutura de repetição - Enquanto

 while(contador < listaDeTeclas.length) {
    const instrumento = listaDeTeclas[contador].classList[1];
    console.log(instrumento);
        tocaSom('#som_tecla_splash');
}
    contador = contador + 1;{
}
