var botao_comprar = document.getElementsByClassName("botao_comprar");
var botao_mapa = document.getElementsByClassName("botao_mapa");
var botao_fechar = document.getElementsByClassName("botao_fechar");

for(var i = 0; i < botao_comprar.length; i++){
    botao_comprar[i].onclick = function(){
        var form_div = document.getElementById("formulario_endereco");
        form_div.style.width = "100vw";
        form_div.style.height = "100vh";
        form_div.firstElementChild.style.display = "block";
        form_div.lastElementChild.style.display = "inline";
        form_div.firstElementChild.classList.add("grow");
        form_div.lastElementChild.classList.add("grow");
        form_div.classList.add("fadein");
    }
}

for(var i = 0; i < botao_mapa.length; i++){
    botao_mapa[i].onclick = function(){
        var mapa = document.getElementById("mapa");
        mapa.style.width = "100vw";
        mapa.style.height = "100vh";
        mapa.firstElementChild.style.display = "block";
        mapa.lastElementChild.style.display = "inline";
        mapa.firstElementChild.classList.add("grow");
        mapa.lastElementChild.classList.add("grow");
        mapa.classList.add("fadein");
    }
}

for(var i = 0; i < botao_fechar.length; i++){
    botao_fechar[i].onclick = function(){
        var form_div = document.getElementById("formulario_endereco");
        var mapa = document.getElementById("mapa");
        form_div.style.width = "0";
        form_div.style.height = "0";
        form_div.firstElementChild.style.display = "none";
        form_div.lastElementChild.style.display = "none";
        form_div.firstElementChild.classList.remove("grow");
        form_div.classList.remove("fadein");
        mapa.style.width = "0";
        mapa.style.height = "0";
        mapa.firstElementChild.style.display = "none";
        mapa.lastElementChild.style.display = "none";
        mapa.firstElementChild.classList.remove("grow");
        mapa.classList.remove("fadein");
    }
}
