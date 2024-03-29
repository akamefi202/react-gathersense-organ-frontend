import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import routes from '../routes';

import '../assets/css/index.css';

class Prong extends React.Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="body"> 
        <BrowserRouter>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default Prong;
