import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const store = {
  user: {
    firstname: 'Просто',
    lastname: 'Енот',
  },
  avatar: {
    img: 'https://cs6.pikabu.ru/avatars/1097/v1097851-720572224.jpg',
    alt: '',
  }
}

ReactDOM.render(<App userData={store} />, document.getElementById('root'));
