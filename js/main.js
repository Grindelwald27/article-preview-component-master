let share = document.querySelector('#share');
	
let divElement = document.createElement('div');

let aElement = document.createElement('a');

let text = document.createTextNode('SHARE');

let iFace = document.createElement('i');

let iTwitter = document.createElement('i');

let iPint = document.createElement('i');

share.onclick = function (){

	document.getElementById('share').style.background = 'hsl(217, 19%, 35%)';

	// div
	divElement.setAttribute('id', 'box');

	share.appendChild(divElement);

	//a
	aElement.appendChild(text);

	aElement.setAttribute('href', '#');

	divElement.appendChild(aElement);

	//adicionando icone do facebook
	iFace.setAttribute('class', 'fa-brands fa-facebook-square');
	divElement.appendChild(iFace);

	//adicionando icone do twitter
	iTwitter.setAttribute('class', 'fa-brands fa-twitter');
	divElement.appendChild(iTwitter);

	//adicionando icone do pinterest
	iPint.setAttribute('class', 'fa-brands fa-pinterest');
	divElement.appendChild(iPint);

	share.onclick = function(){
		share.removeChild(divElement);
		document.getElementById('share').style.background = 'hsl(210, 46%, 95%)';
	}

}