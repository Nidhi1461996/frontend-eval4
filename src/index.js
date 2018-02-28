import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Store from './redux/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={Store} ><div><App /></div></Provider>, document.getElementById('root'));
registerServiceWorker();
