import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from '../components/SignUpForm'

const AuthPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const authToggle = () => {
    setShowSignIn((prev) => !prev);
  };

  return (
    <div>
      {showSignIn ? <SignInForm authToggle={authToggle} /> : <SignUpForm authToggle={authToggle}/>}
    </div>
  );
};

export default AuthPage;
