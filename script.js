

let base_preguntas = readTxt("base_preguntas.json")
let interprete_bp = JSON.parse(base_preguntas)

escogerPreguntaAleatoria()

function escogerPreguntaAleatoria() {
    escogerPregunta(Math.floor(Math.random()*interprete_bp.lenght))
}

escogerPreguntaAleatoria()

function escogerPregunta(n) {
                
    preunta = interprete_bp[n]
    select_id("categoria").innerHTML = preunta.categoria
    select_id("pregunta").innerHTML = preunta.pregunta
    select_id("imagen").setAttribute("src", preunta.imagen)
    style("imagen").objectFit = preunta.objectFit;
    select_id("btn1").innerHTML = preunta.respuesta
    select_id("btn2").innerHTML = preunta.incorrecta1
    select_id("btn3").innerHTML = preunta.incorrecta2
    select_id("btn4").innerHTML = preunta.incorrecta3
}

function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readTxt(ruta_local) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if(xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
    }
    return texto;
}


