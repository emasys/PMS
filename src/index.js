/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { hydrate, render } from 'react-dom';
import Provider from './redux/Provider';
import './styles/index.scss';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Provider />, rootElement);
} else {
  render(<Provider />, rootElement);
}
