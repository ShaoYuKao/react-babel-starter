/// <reference path="../typings/tsd.d.ts" />

import React from 'react';
import { render } from 'react-dom';
import { Title } from './components/Title';


render(
    <Title text='Hello ES6 ~!' />,
    document.getElementById('content')
);