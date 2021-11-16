import React, { FC, useContext, useEffect, useState } from 'react';
import { auth } from '../api/index';

export interface IAuthContext {
  signin?: any;
  signup?: any | null;
  signout?: any;
  currentUser?: any;
}

const AuthContext = React.createContext<IAuthContext>({});

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user?.email || '');
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: IAuthContext = {
    signin,
    signup,
    signout,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
