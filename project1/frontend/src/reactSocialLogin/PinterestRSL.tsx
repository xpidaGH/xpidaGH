/* LoginSocialPinterest
pinterestRef
REACT_APP_PINTEREST_APP_ID
REACT_APP_PINTEREST_APP_SECRET
 */
import React, { useRef, useCallback, useState } from "react";
// import "./styles.css";
import UserRsl from "./UserRSL"; // component display user
import { LoginSocialPinterest, TypeCrossFunction } from "reactjs-social-login";
import { FormattedMessage } from "react-intl";

import { ReactComponent as PinterestLogo } from "./assets/pinterest.svg";

const REDIRECT_URI = "http://localhost:3000/account/login";

const PinterestRSL = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState<any>();
  const pinterestRef = useRef<TypeCrossFunction>(null!);

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
    pinterestRef.current.onLogout();
  }, []);

  return (
    <>
      {provider && profile && (
        <UserRsl provider={provider} profile={profile} onLogout={onLogout} />
      )}

      <LoginSocialPinterest
        ref={pinterestRef}
        client_id={process.env.REACT_APP_PINTEREST_APP_ID || ""}
        client_secret={process.env.REACT_APP_PINTEREST_APP_SECRET || ""}
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
        <div className=" block rounded shadow-black text-black cursor-pointer text-lg m-1 overflow-hidden p-1 select-none h-12 bg-teal-100">
          <div className=" items-center flex h-full">
            <div className=" flex justify-center min-w-fit">
              <PinterestLogo />
            </div>
            <span className=" ml-2">Log in With Pinterest</span>
          </div>
        </div>
      </LoginSocialPinterest>
    </>
  );
};
export default PinterestRSL;
