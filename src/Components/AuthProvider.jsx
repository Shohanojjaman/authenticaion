import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider()

  /**
   * TThis function is used to authenticate new users.
   * @param {String} email - User inputted email which use to create a user.
   * @param {*} password - User profile password.
   * @returns Crate a user
   */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /**
   * This function is used to authenticate an existing user.
   * @param {String} email - User's login email which he/she use in create a user.
   * @param {*} password - User's profile password.
   * @returns Sign in a user.
   */
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider);
  };
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookAuthProvider);
  };

  const userSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { user, createUser, signInUser, userSignOut, signInWithGoogle, signInWithFacebook };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
