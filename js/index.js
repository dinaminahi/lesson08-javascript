(function (){

const link = document.querySelector('a');
if(Math.random() < 0.5){
   link.textContent = 'Google';
   link.href = 'https://www.google.com';
}
const sect = document.querySelector('section');
const para = document.createElement('p');

para.textContent = 'We hope you enjoyed the ride';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');

linkPara.appendChild(text);
const textClone = text.cloneNode(true);
sect.appendChild(textClone);

linkPara.removeChild(text);

textClone.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

const clockElement = document.querySelector('.clock');

setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

const infoBlock = document.querySelector('.info-block');

for ( let i = 0; i < 10; i++ ){
    let info = document.createElement('p');
    info.innerText = 'Item no: ' + i;
    infoBlock.appendChild(info);
    info.style.backgroundColor = '#FF' + i + '500';
}

let counter = 0;

document.querySelector('.counter-button').addEventListener('click',function (){
    document.querySelector('.click-count').textContent = ++counter;
});
})();

$('.jquery-btn').click( () => $('p').toggle('slow'));

 // Calculator
    const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed));

    function numPressed(ev){
        const num = ev.target.innerText;
        display.value += num;
    }

