import React from "react";
import AudioPlayer from "./AudioPlayer.js";
import podcastCover from "../images/podcastCover.png";

import Song from "./../guitar.mp3";

const dummy_text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...";

const Listen = () => (
  <section className="text-white mt-32 mx-5 sm:mx-32 lg:mx-64">
    <h1
      id="listen"
      className="text-4xl xl:text-6xl text-center text-white p-8 leading-none tracking-track-02 uppercase lato fw-400"
    >
      listen
    </h1>
    <section>
      <AudioPlayer
        episodeNo={"Episode #1"}
        title={"The start of inVERTed mOUNTAIn"}
        date="08-12-2020"
        description={dummy_text}
        imageSrc={podcastCover}
        imageAlt="Cover art for a podcast ep"
        episodeSrc={Song}
      />
    </section>
    <div className="flex justify-center">
      <button className="hover:bg-blue-300 hover:text-white xl:text-5xl text-2xl text-blue-400 tracking-track-02 xl:px-8 px-4 py-2 mb-10 text-center lato fw-700 font-in-border-blue border-2 cursor-pointer">
        More Episodes coming soon!
      </button>
    </div>
  </section>
);

export default Listen;
