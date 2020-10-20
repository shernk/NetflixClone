import React from 'react';
import {HeaderContainer} from "../../containers/header/header";
import {FooterContainer} from "../../containers/footer/footer";
import {Sign_In} from './index';
import {Form} from '../../components';

export default function SignIn(){
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {Sign_In.error && (
            <Form.Error data-testid="error">{Sign_In.error}</Form.Error>
          )}

          <Form.Base onSubmit={Sign_In.handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={Sign_In.emailAddress}
              onChange={({ target }) => Sign_In.setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={Sign_In.password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => Sign_In.setPassword(target.value)}
            />
            <Form.Submit
              disabled={Sign_In.isInvalid}
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
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}