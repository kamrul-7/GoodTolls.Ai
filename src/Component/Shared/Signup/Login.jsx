import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "647740597373-ql9trbvgo0bmo3ma4m0nmcsv3l2g014u.apps.googleusercontent.com";

const Login = () => {
  
    const onSuccess = (res) => {
        console.log("Login success! current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
};

export default Login;
