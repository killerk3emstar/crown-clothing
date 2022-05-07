import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utilities";
import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import "./sign-up-form.styles.scss";

const defaultFormFieldsValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFieldsValues, setFormFieldsValues] = useState(
    defaultFormFieldsValues
  );

  const { displayName, email, password, confirmPassword } = formFieldsValues;

  const resetFormFields = () => {
    setFormFieldsValues(defaultFormFieldsValues);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFieldsValues({ ...formFieldsValues, [name]: value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email already used, sorry :(");
      }
      console.error(err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>not yet?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          label="display name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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

        <FormInput
          label="confim password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button buttonType="default" type="submit">
          sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
