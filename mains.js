function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[contador].onclick = tocaSomPom;

let contador = 0;
// Estrutura de repetição - Enquanto

 while(contador < listaDeTeclas.length) {
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
 }