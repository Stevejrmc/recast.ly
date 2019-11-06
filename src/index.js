import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';

var root = document.querySelector('#app');
ReactDOM.render(<App searchYouTube={searchYouTube}/>, root);
