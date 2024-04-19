"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BeatListStyled } from "./BeatListStyled";
import BuyLease from "./BuyLease";
import { useBeatsContext } from "../BeatsContext";

const AudioPlayer = dynamic(
  () => {
    return import("react-modern-audio-player");
  },
  { ssr: false }
);

export const BeatList = () => {
  const { beats, isLoading } = useBeatsContext();

  return beats?.length && !isLoading ? (
    <BeatListStyled>
      <AudioPlayer
        playList={beats}
        activeUI={{
          artwork: true,
          playButton: true,
          prevNnext: true,
          trackTime: true,
          trackInfo: true,
          repeatType: true,
          playList: "sortable",
          progress: "waveform",
        }}
        placement={{
          volumeSlider: "top",
          playList: "bottom",
          interface: {
            templateArea: {
              // @ts-ignore
              artwork: "row1-1",
              // @ts-ignore
              trackInfo: "row1-2",
              // @ts-ignore
              playList: "row1-3",
              // @ts-ignore
              playButton: "row1-4",
              // @ts-ignore
              repeatType: "row1-5",
              // @ts-ignore
              progress: "row1-6",
              // @ts-ignore
              trackTimeCurrent: "row1-7",
              // @ts-ignore
              trackTimeDuration: "row1-8",
              // @ts-ignore
            },
            customComponentsArea: {
              // @ts-ignore
              playerCustomComponent: "row1-9",
            },
          },
        }}
        audioInitialState={{
          isPlaying: false,
          repeatType: "ALL",
          volume: 1,
          curPlayId: 1,
        }}
      >
        <BuyLease />
      </AudioPlayer>
    </BeatListStyled>
  ) : (
    <div>Loading</div>
  );
};
