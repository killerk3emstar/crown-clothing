import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utilities/firebase/firebase.utilities";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";

const defaultFormFieldsValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFieldsValues, setFormFieldsValues] = useState(
    defaultFormFieldsValues
  );

  const { email, password } = formFieldsValues;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFieldsValues({ ...formFieldsValues, [name]: value });
  };

  const resetFormFields = () => {
    setFormFieldsValues(defaultFormFieldsValues);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        alert("no such user");
      }

      console.error(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>have we met before?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button buttonType="default" type="submit">
            sign in
          </Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
