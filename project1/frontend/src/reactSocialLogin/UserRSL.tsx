import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

const UserRSL = memo(({ provider, profile, onLogout }: any) => {
  /* const avatar =
    profile?.avatar ||
    profile?.avatar_url ||
    profile?.picture?.data?.url ||
    profile?.profile_image_url_https ||
    "https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png"; */

  return (
    <div className=" shadow-teal-200 flex rounded text-lime-100 flex-col w-11/12 max-w-sm items-center justify-center p-6 absolute top-12 left-12 -translate-x-2/4 -translate-y-2/4 z-10">
      {/* <div className=" bg-slate-50 shadow-black border-4 border-solid border-white h-32 w-32 m-auto z-10 flex items-center justify-center overflow-hidden -mt-20 mb-5 relative">
        <img alt="141" src={avatar} />
      </div> */}

      <h3 className=" m-8 bg-gradient-to-l text-center text-2xl bg-clip-text bg-transparent">
        {provider.toUpperCase()}
      </h3>

      <div className=" items-center flex h-full">
        <div className=" ml-3 w-full max-h-screen overflow-auto">
          {Object.entries(profile).map(([key, value]: any) => (
            <div className=" flex w-full mb-5" key={key}>
              <div className=" w-44 mr-6 font-bold break-words">{key}: </div>
              <div className=" break-words w-full text-xl">
                {JSON.stringify(value)}
              </div>
            </div>
          ))}
        </div>
        <button
          className=" text-base uppercase shadow-black cursor-pointer rounded-lg pl-3 text-white text-center w-full"
          onClick={onLogout}
        >
          <FormattedMessage id="logout" defaultMessage="logout" />
        </button>
      </div>
    </div>
  );
});

export default UserRSL;
