/* LoginSocialLinkedin
LinkedInLoginButton
linkedinRef
REACT_APP_LINKEDIN_APP_ID
REACT_APP_LINKEDIN_APP_SECRETREACT_APP_LINKEDIN_APP_SECRET
 */
import React, { useRef, useCallback, useState } from "react";
// import "./styles.css";
import UserRsl from "./UserRSL"; // component display user
import { LoginSocialLinkedin, TypeCrossFunction } from "reactjs-social-login";

import { LinkedInLoginButton } from "react-social-login-buttons";
import { FormattedMessage } from "react-intl";

// import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";
const REDIRECT_URI = "http://localhost:3000/account/login";

const LinkedinRSL = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const linkedinRef = useRef<TypeCrossFunction>(null!);

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
    linkedinRef.current.onLogout();
  }, []);

  return (
    <>
      {provider && profile && (
        <UserRsl provider={provider} profile={profile} onLogout={onLogout} />
      )}

      <LoginSocialLinkedin
        ref={linkedinRef}
        client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ""}
        client_secret={
          process.env
            .REACT_APP_LINKEDIN_APP_SECRETREACT_APP_LINKEDIN_APP_SECRET || ""
        }
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
        <LinkedInLoginButton />
      </LoginSocialLinkedin>
    </>
  );
};
export default LinkedinRSL;
