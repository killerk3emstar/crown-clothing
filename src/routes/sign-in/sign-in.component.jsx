import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utilities";

const SignIn = () => {
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const { user } = response;
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    })();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  /*   const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    // const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
    console.log({ user });
  }; */

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
