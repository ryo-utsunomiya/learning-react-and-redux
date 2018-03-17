import React from 'react';
import ReactDOM from 'react-dom';
import store from './TasksStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

store.subscribe(() => renderApp(store));
renderApp(store);

registerServiceWorker();
