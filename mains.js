function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

<button onclick="tocaSomPom()" class="tecla tecla_pom">Pom</button>