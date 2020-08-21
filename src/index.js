import _ from 'lodash';
import './style.css';
import printMe from './card.js'

// const cardConfig = {
//   root: document.querySelector('#cards'),
//   async fetchData() {
//     const response = await axios.get('https://api.github.com/users/kata-agata/repos');
//     console.log(response);
//   }
// }
//
// createCard({
//   ...cardConfig
// });

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello 1', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
