let canvas = document.getElementById("snake"); //canvas é o snake cobra
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do site, usando o snake (canvas) como base, em 2 Dimensões
let box = 32

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();