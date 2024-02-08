let jogador1 = localStorage.getItem("j1");
let jogador2 = localStorage.getItem("j2");

let pontosj1 = 0;
let pontosj2 = 0;

document.getElementById("nomejogador1").innerHTML = jogador1 + " :";
document.getElementById("nomejogador2").innerHTML = jogador2 + " :";

document.getElementById("pontosjogador1").innerHTML = pontosj1;
document.getElementById("pontosjogador2").innerHTML = pontosj2;

document.getElementById("turnopergunta").innerHTML = "Turno de pergunta" + jogador1;
document.getElementById("turnoresposta").innerHTML = "Turno de resposta" + jogador2;

function enviar(){
    numero1 = document.getElementById("number1").value;
    numero2 = document.getElementById("number2").value;

    gabarito = parseInt(numero1)*parseInt(numero2);

    pergunta = "<h4>"+numero1 + " x "  + numero2 + "</h4>";
    input = "<br> Resposta: <input type='number id='resposta'>";
    botao = "<br><br>  <button onclick='verificar()'>Verificar</button>";
    linha = pergunta+input+botao;
    document.getElementById("output").innerHTML=linha;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
