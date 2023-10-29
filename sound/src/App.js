import {Router, Switch, Route} from 'react-router-dom';

export default () => (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );