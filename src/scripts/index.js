import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsif.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navmenu'),
  content: document.querySelector('#mainContent'),
});

function main() {

}

document.addEventListener('DOMContentLoaded', main);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
