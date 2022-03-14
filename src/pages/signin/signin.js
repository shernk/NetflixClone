import React from "react";
import { Header } from "../../components/index";
import { FooterContainer } from "../../containers/footer/footer";

import { Form } from "../../components";
import * as ROUTES from "../../routes/routes";
import logo from "../../logo.svg";
import { useHandleSignIn } from "../../hooks/handlesignin";

export default function SignIn() {
  const {
    error,
    isInvalid,
    emailAddress,
    password,
    setEmailAddress,
    setPassword,
    handleSignin,
  } = useHandleSignIn();

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        </Header.Frame>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
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
              data-testid="sign-in"
            >
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <FooterContainer />
    </>
  );
}
