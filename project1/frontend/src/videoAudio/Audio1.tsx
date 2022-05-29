import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { FormattedMessage } from "react-intl";

function Audio1() {
  return (
    <div className=" container mx-auto flex p-4 md:flex-row flex-col items-center">
      <h1>
        <FormattedMessage id="videoAudio01" defaultMessage="Play Audio" />
      </h1>
      <ReactAudioPlayer src={"/static/media/audio1.mp3"} autoPlay controls />
    </div>
  );
}

export default Audio1;
