import React from "react";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";

function Video1() {
  return (
    <div className=" container mx-auto flex p-4 md:flex-row flex-col items-center">
      <h1>
        <FormattedMessage id="videoAudio02" defaultMessage="Play Video" />
      </h1>
      <ReactPlayer
        url={[{ src: "/static/media/React100.mp4", type: "video/mp4" }]}
        controls
      />
    </div>
  );
}

export default Video1;
