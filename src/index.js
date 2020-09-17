import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Auth } from './components/Auth';

const store = {
  user: {
    firstname: 'Просто',
    lastname: 'Енот',
  },
  avatar: {
    img: 'https://cs6.pikabu.ru/avatars/1097/v1097851-720572224.jpg',
    alt: '',
  },
}

const preloader = {
  url: 'https://cdn.dribbble.com/users/765253/screenshots/2540865/loader.gif',
}

ReactDOM.render(<Auth userData={store} preloader={preloader} />, document.getElementById('root'));
