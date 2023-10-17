const tools = require('./tools.js');

const btnInfoElem = document.querySelector('.btnInfo');
const messageElem = document.querySelector('.message');

btnInfoElem.addEventListener('click', () => {
	messageElem.innerText = 'the button has been clicked';
});	