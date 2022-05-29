/* LoginSocialFacebook
FacebookLoginButton
facebookRef
REACT_APP_FB_APP_ID

 */
import React, { useRef, useCallback, useState } from "react";
// import "./styles.css";
import UserRsl from "./UserRSL"; // component display user
import { LoginSocialFacebook, TypeCrossFunction } from "reactjs-social-login";

import { FacebookLoginButton } from "react-social-login-buttons";
import { FormattedMessage } from "react-intl";

// import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";

const REDIRECT_URI = "http://localhost:3000/account/login";

const FacebookRSL = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const facebookRef = useRef<TypeCrossFunction>(null!);

  const onLoginStart = useCallback(() => {
    alert(
      <FormattedMessage id="reactSocialLogin01" defaultMessage="login start" />
    );
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert(
      <FormattedMessage
        id="reactSocialLogin02"
        defaultMessage="logout success"
      />
    );
  }, []);

  const onLogout = useCallback(() => {
    facebookRef.current.onLogout();
  }, []);

  return (
    <>
      {provider && profile && (
        <UserRsl provider={provider} profile={profile} onLogout={onLogout} />
      )}

      <LoginSocialFacebook
        ref={facebookRef}
        appId={process.env.REACT_APP_FB_APP_ID || ""}
        redirect_uri={REDIRECT_URI}
        onLoginStart={onLoginStart}
        onLogoutSuccess={onLogoutSuccess}
        onResolve={({ provider, data }) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </>
  );
};
export default FacebookRSL;
