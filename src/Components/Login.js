import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "../Styles/Login.scss";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/944042fb-69b7-4a7f-9db5-c17a6885b28b/d5n83nk-428d9811-f79e-4474-b609-7d581cde25eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTQ0MDQyZmItNjliNy00YTdmLTlkYjUtYzE3YTY4ODViMjhiXC9kNW44M25rLTQyOGQ5ODExLWY3OWUtNDQ3NC1iNjA5LTdkNTgxY2RlMjVlYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.bliuAdpg5S0_o0QxSqq0bA5en3ZZcIUzqH1Vcw4Jx3E" />
        <h1>Sign in to Smart Programming Journal</h1>
        <p>4th Year Software Project</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
