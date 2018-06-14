import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import App from './App';

/* eslint-disable */
injectGlobal`
    body {
        background: linear-gradient(-180deg, #00C6FF 0%, #66A6FF 100%);
        font-family: 'Roboto', sans-serif;
    }
`;
/* eslint-enable */

const app = <App />;

ReactDOM.render(app, document.getElementById('root'));
