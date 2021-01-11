let order = [];
let clickedOrder = [];
let score = 0;

/* ---------------------------------
	Ordem das cores
		0 - Verde
		1 - Vermelho
		2 - Amarelo
		3 - Azul
-----------------------------------*/		

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

//Cria ordem aleatória de cores
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	order[order.length] = colorOrder;
	clickedOrder = [];
	
	for (let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}
}

//Acende a próxima cor
let lightColor = (element, number) => {
	number = number * 500;	
	setTimeout( () => {
		element.classList.add('selected');			
	}, number - 250);
	
	setTimeout( () => {
		element.classList.remove('selected');		
	});	

}

//Verifica se o usuário acertou a ordem correta
let checkOrder = () => {
	for (let i in clickedOrder){
		if (clickedOrder[i] != order[i]){
			gameOver();
			break;
		}
	}
	
	if (clickedOrder.length == order.length) {
		alert('Pontos: ' + score +'!\nVocê acertou. Iniciando próximo nível!');
		nextLevel();
	}
}

//Tratando click do usuário
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');
	
	setTimeout( () => {
		createColorElement(color).classList.remove('selected');
		checkOrder();
	}, 250);		
}

//Retornando a cor
let createColorElement = (color) => {
	if (color == 0) { return green; } else 
	if (color == 1) { return red; } else
	if (color == 2) { return yellow; } else
	if (color == 3) { return blue; }
}

//Próximo nível do jogo
let nextLevel = () => {
	score++;
	shuffleOrder();
}

//funcção Gamer over
let gameOver = () => {
	alert('Pontos: ' + score + '!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.');
	order = [];
	clickedOrder = [];
	playGame();
}

//Função para início do jogo
let playGame = () => {
	alert('Bem vindo ao Genius! Iniciando novo jogo!');
	score = 0;
	nextLevel();
}

//Adicionando os eventos
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//Eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Iniciando o jogo
playGame();









