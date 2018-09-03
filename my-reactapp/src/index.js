import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';
// 引入semantic-ui 样式表
import 'semantic-ui/dist/semantic.min.css';
// 引入react-rouetr
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <Route path="/" component={Layout}></Route>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
