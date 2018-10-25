import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from 'containers';
export default () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route
      path="*"
      render={() => (
        <div
          style={{
            color: 'red',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            fontSize: '24px',
            fontWeight: '500',
            display: 'flex'
          }}
        >
          Page Not found
        </div>
      )}
    />
  </Switch>
);
