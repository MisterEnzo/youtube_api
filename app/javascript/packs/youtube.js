import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Youtube from '../components/Youtube';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Youtube />
    , document.querySelector('#youtube')
  )
})
