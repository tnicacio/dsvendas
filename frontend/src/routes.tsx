import { Route, Switch } from 'react-router';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
