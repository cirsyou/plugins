import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';
// 引入semantic-ui 样式表
import 'semantic-ui/dist/semantic.min.css'
// 引入jquery
import $ from 'jquery'

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
