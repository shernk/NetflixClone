import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../../components";
import * as ROUTES from "../../routes/routes";
import { Header } from "../../components/index";
import { FooterContainer } from "../../containers/footer/footer";
import { FirebaseContext } from "../../context/firebase";
import logo from '../../logo.svg';

export default function SignUp(){
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password)
    .then((result) =>
      result.user
        .updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
        .then(() => {
          history.push(ROUTES.BROWSE);
        })
    )
    .catch((error) => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError('');
    })
  }

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        </Header.Frame>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Name"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="sign-up"
            >
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterContainer></FooterContainer>
    </>
  );
}