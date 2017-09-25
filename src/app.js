import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    From ExpenseDashboardPage
  </div>
);

const CreateExpensePage = () => (
  <div>
    From CreateExpensePage
  </div>
);

const EditExpensePage = () => (
  <div>
    From EditExpensePage
  </div>
);

const HelpPage = () => (
  <div>
    From HelpPage
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={CreateExpensePage} exact={true}/>
      <Route path="/edit" component={EditExpensePage} exact={true}/>
      <Route path="/help" component={HelpPage} exact={true}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
