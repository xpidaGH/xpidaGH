/* LoginSocialTwitter
TwitterLoginButton
twitterRef
REACT_APP_TWITTER_API_KEY
REACT_APP_TWITTER_APP_SECRET
 */
import React, { useRef, useCallback, useState } from "react";
// import "./styles.css";
import UserRsl from "./UserRSL"; // component display user
import { LoginSocialTwitter, TypeCrossFunction } from "reactjs-social-login";

import { TwitterLoginButton } from "react-social-login-buttons";
import { FormattedMessage } from "react-intl";

// import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";

const REDIRECT_URI = "http://localhost:3000/account/login";

const TwitterRSL = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const twitterRef = useRef<TypeCrossFunction>(null!);

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
        id="reactSocialLogin029"
        defaultMessage="logout success"
      />
    );
  }, []);

  const onLogout = useCallback(() => {
    twitterRef.current.onLogout();
  }, []);

  return (
    <>
      {provider && profile && (
        <UserRsl provider={provider} profile={profile} onLogout={onLogout} />
      )}

      <LoginSocialTwitter
        ref={twitterRef}
        client_id={process.env.REACT_APP_TWITTER_API_KEY || ""}
        client_secret={process.env.REACT_APP_TWITTER_APP_SECRET || ""}
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
        <TwitterLoginButton />
      </LoginSocialTwitter>
    </>
  );
};
export default TwitterRSL;
