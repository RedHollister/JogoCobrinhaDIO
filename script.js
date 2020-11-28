let canvas = document.getElementById("snake"); //canvas é o snake cobra
let context = canvas.getContext("2d"); //Renderiza o desenho dentro do site, usando o snake (canvas) como base, em 2 Dimensões
let box = 32
let snake = []; //Criou um array/Vetor da cobrinha
snake[0] = { //Deve ter colocado a cobrinha na posição central da caixa
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, //Geração de número aleatório
    y: Math.floor(Math.random() * 15 + 1) * box //Pra X e Y
}

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

function drawFood(){
    context.fillStyle = "blue";
    context.fillRect(food.x, food.y, box, box);
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
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;   //Out of Bonds

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){ //Se a posição X e Y da cabeça [0] da cobra for igual a posição X e Y de qualquer parte do corpo da cobra...
            clearInterval(jogo) //Faz com que o intervalo de atualização pare, ou seja, parando o jogo
            alert('Game Over :(')
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    if(direction =="right") snakeX += box; //Aumenta para "se mover pra direita"
    if(direction == "left") snakeX -= box; //Diminui para "se mover pra esquerda"
    if(direction == "up") snakeY -= box; //Diminui para "se mover pra cima"
    if(direction == "down") snakeY += box; //Diminui para "se mover pra baixo"

    if(snakeX != food.x || snakeY != food.y){ //U
        snake.pop(); //A cobra só perderá o corpo se caso não comer a comida, nesse caso foi feito a lógica da mentira
    }
    else{food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); //A função iniciarJogo vai atualizar a cada 100ms

