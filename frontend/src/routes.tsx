import { Route, Switch } from 'react-router';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
