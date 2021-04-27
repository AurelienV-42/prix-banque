import React, {createContext, useEffect} from 'react';
import {auth} from './config/firebase';
import {useGlobal} from 'reactn';
import {generateUserDocument} from './screens/login/auth';

export const UserContext = createContext({user: null});
const UserProvider = ({children}) => {
  const [user, setUser] = useGlobal('user');

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        generateUserDocument(userAuth);
      }
    });
  }, [setUser]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
