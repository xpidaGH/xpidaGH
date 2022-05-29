/* LoginSocialMicrosoft
MicrosoftLoginButton
microsoftRef
REACT_APP_MICROSOFT_APP_ID
REACT_APP_INSTAGRAM_APP_SECRET
 */
import React, { useRef, useCallback, useState } from "react";
// import "./styles.css";
import UserRsl from "./UserRSL"; // component display user
import { LoginSocialMicrosoft, TypeCrossFunction } from "reactjs-social-login";

import { MicrosoftLoginButton } from "react-social-login-buttons";
import { FormattedMessage } from "react-intl";

// import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";

const REDIRECT_URI = "http://localhost:3000/account/login";

const MicrosoftRSL = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const microsoftRef = useRef<TypeCrossFunction>(null!);

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
    microsoftRef.current.onLogout();
  }, []);

  return (
    <>
      {provider && profile && (
        <UserRsl provider={provider} profile={profile} onLogout={onLogout} />
      )}

      <LoginSocialMicrosoft
        ref={microsoftRef}
        client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ""}
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
        <MicrosoftLoginButton />
      </LoginSocialMicrosoft>
    </>
  );
};
export default MicrosoftRSL;
