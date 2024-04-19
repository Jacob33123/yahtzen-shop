import React, { useContext } from "react";
import { AudioData, audioPlayerStateContext } from "react-modern-audio-player";
import BuyLeaseButtons from "./BuyLeaseButtons";

const BuyLease = () => {
  const audioContext = useContext(audioPlayerStateContext);
  const audioIndex = audioContext?.curIdx;
  const selectedTrack =
    audioIndex || audioIndex === 0
      ? (audioContext?.playList[audioIndex] as AudioData & { trackId: string })
      : undefined;

  return (
    <div className="buy-lease-container">
      {selectedTrack ? (
        <BuyLeaseButtons trackId={selectedTrack.trackId} />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default BuyLease;
