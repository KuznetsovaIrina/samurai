import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/reset.css';
import './styles/common.css';
import { Provider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});