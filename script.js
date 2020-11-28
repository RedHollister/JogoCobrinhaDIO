let canvas = document.getElementById("snake"); //canvas é o snake cobra
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do site, usando o snake (canvas) como base, em 2 Dimensões
let box = 32
let snake = []; //Criou um array/Vetor da cobrinha
snake[0] = { //Deve ter colocado a cobrinha na posição central da caixa
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG(){ //Cria a caixa do jogo...
    context.fillStyle = "lightgreen"; //Com cor verde claro
    context.fillRect(0, 0, 16 * box, 16 * box); //Tendo essa caixa com centro em 0 e altura e largura 16 * 32
}

function criarCobrinha(){ //Após dada a posição inicial da cobrinha...
    for(i = 0; i < snake.length; i ++){ //i = 0, sendo ele menor que o "comprimento" da cobrinha (1 no início), ele aumentará...
        context.fillStyle = "green"; //Tendo essa "caixa" da cobra de cor verde
        context.fillRect(snake[i].x, snake[i].y, box, box); //Sua posição inicial depende do vetor snake,
    }
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}



function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    if(direction =="right") snakeX += box; //Aumenta para "se mover pra direita"
    if(direction == "left") snakeX -= box; //Diminui para "se mover pra esquerda"
    if(direction == "up") snakeY -= box; //Diminui para "se mover pra cima"
    if(direction == "down") snakeY += box; //Diminui para "se mover pra baixo"

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //A função iniciarJogo vai atualizar a cada 100ms

