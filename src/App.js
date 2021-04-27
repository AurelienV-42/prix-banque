import React from 'react';
import './App.css';
import './i18n';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // https://reactrouter.com/web/guides/quick-start
import LoginScreen from './screens/login/LoginScreen';
import Account from './screens/account/Account';
import Billing from './screens/billing/Billing';
import Transfer from './screens/transfers/Transfer';
import SignupInfo from './screens/SignupInfo/SignupInfo';


const App = () => {
  // sendBill("test@test.fr", 300);
  // payBill("test@test.fr", 300);
  // makeATransfer("test@test.fr", 300);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginScreen/>
          </Route>
          <Route path="/onboarding">
            <SignupInfo/>
          </Route>
          <Route path="/account">
            <Account/>
          </Route>
          <Route path="/billing">
            <Billing/>
          </Route>
          <Route path="/transfers">
            <Transfer/>
          </Route>
          <Route path="/">
            <LoginScreen/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
