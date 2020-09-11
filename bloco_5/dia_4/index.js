window.onload = function () {
	janelaCarregadaFundoCor();
	// janelaCarregadaTextoCor();
};
function janelaCarregadaFundoCor() {
	let botoesIndice = document.getElementsByTagName('button');
	corDeFundo(localStorage.getItem('corDeFundoUsuario'));
	for (index = 1; index < botoesIndice.length; index += 1) {
		let botaoTrocaCor = botoesIndice[index];
		botaoTrocaCor.addEventListener('click', caixaEscolhas);
		return botaoTrocaCor;
	}
}
// function janelaCarregadaTextoCor() {
// 	let botaoTrocaCor = document.getElementById('btnTrocaCorTexto');
// 	botaoTrocaCor.addEventListener('click', caixaEscolhas);
// 	corDeFundo(localStorage.getItem('corDeFundoUsuario'));
// }

function caixaEscolhas() {
	let quadradoLigado = document.getElementById('quadradoP');
	if (quadradoLigado == null) {
		escolhaOnTrocaCor();
	} else {
		escolhaOffTrocaCor();
	}
}

function escolhaOffTrocaCor() {
	document.body.removeChild(document.getElementById('quadradoP'));
}

function escolhaOnTrocaCor() {
	let quadradoEscolhas = document.createElement('p');
	document.body.appendChild(quadradoEscolhas);
	quadradoEscolhas.className = 'caixaDeEscolhas';
	quadradoEscolhas.id = 'quadradoP';
	quadradinhoInterno();
	quadradoEscolhas.addEventListener('mouseleave', escolhaOffTrocaCor);
}

function quadradinhoInterno() {
	let quantidadeDeQuadrados = 4;
	let quadradinhosId = document.getElementById('quadradoP').childNodes;
	for (let index = 0; index < quantidadeDeQuadrados; index += 1) {
		let quadradinho = document.createElement('p');
		document.getElementById('quadradoP').appendChild(quadradinho);
		quadradinho.id = 'quadradinho' + `${index}`;
	}
	quadradinhosId[0].addEventListener('click', fundoAzul);
	quadradinhosId[1].addEventListener('click', fundoVerde);
	quadradinhosId[2].addEventListener('click', fundoVermelho);
	quadradinhosId[3].addEventListener('click', fundoCinza);
}

function corDeFundo(corDoFundo) {
	let body = document.body;
	if (body.className == '') {
		document.body.className = corDoFundo;
		localStorage.setItem('corDeFundoUsuario', corDoFundo);
	} else {
		body.className = '';
		localStorage.removeItem('corDeFundoUsuario', corDoFundo);
	}
}

function fundoAzul() {
	corDeFundo('fundoAzul');
}

function fundoVerde() {
	corDeFundo('fundoVerde');
}

function fundoVermelho() {
	corDeFundo('fundoVermelho');
}
function fundoCinza() {
	corDeFundo('fundoCinza');
}
