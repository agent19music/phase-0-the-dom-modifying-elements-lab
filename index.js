// Write your code here!
const main = document.querySelector('#main')
main.remove();
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'SEAN-NYANDUSI is the champion';