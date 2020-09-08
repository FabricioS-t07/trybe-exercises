// Acesse o elemento elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Ola como vai ?';

// Acesse o primeiroFilho a partir de pai.  ----firstElementChild não estava no conteúdo.
document.querySelector('#pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').parentNode.innerText;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').parentNode.innerText;
