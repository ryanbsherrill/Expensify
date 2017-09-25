import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFoundPage = () => (
  <div>
    404 FAIL!!!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={CreateExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
