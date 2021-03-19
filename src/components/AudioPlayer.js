import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import PlayButton from "./../images/play.svg";
import PauseButton from "./../images/pause.svg";
import Plus15Button from "./../images/15plus.svg";
import Minus15Button from "./../images/15minus.svg";
import SpeakerOn from "./../images/speakerOn.svg";
import SpeakerOff from "./../images/speakerOff.svg";

import {
  WaveformContianer,
  Wave,
  Controls,
  Play,
  Volume,
  Mute,
  Skip15,
} from "./Waveform.styled";

class AudioPlayer extends Component {
  state = {
    playing: false,
    volume: 0.5,
    mute: false,
  };

  componentDidMount() {
    const track = document.querySelector("#track");

    this.waveform = WaveSurfer.create({
      barHeight: 3,
      barWidth: 3,
      barRadius: 2,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#72D472",
      responsive: true,
      waveColor: "#48A8E0",
      mediaControls: true,
    });
    this.waveform.load(track);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  handleVolume = (value) => {
    const newVolume = value.target.value;
    this.setState({ volume: newVolume });
    this.waveform.setVolume(newVolume);
  };

  handleMute = () => {
    const defaultVolume = 0.5;
    this.setState({ mute: !this.state.mute });
    if (this.state.mute === false) {
      this.setState({ volume: 0 });
      this.waveform.toggleMute();
    } else if (this.state.mute === true) {
      this.setState({ volume: defaultVolume });
      this.waveform.toggleMute();
    } else {
      this.waveform.toggleMute();
    }
  };

  render() {
    return (
      <section className="my-10 text-white bg-gray-900 rounded shadow-lg">
        <div className="p-0 text-center md:text-left font-in-border-blue border-l-2 h-full">
          <div className="grid grid-cols-2 gap-2">
            <div className="md:p-5 p-2">
              <h3 className="md:text-4xl text-xl font-bold text-green-400 uppercase md:tracking-track-01">
                {this.props.title}
              </h3>
              <h2 className="md:text-2xl text-lg text-green-300 fw-300">
                {this.props.episodeNo} <br/> {this.props.date}
              </h2>
              <p className="md:text-3xl text-sm italic text-gray-500 tracking-track-01 md:my-10">
                {this.props.description}
              </p>
            </div>
            <img
              className="w-full h-full object-cover"
              alt={this.props.imageAlt}
              src={this.props.imageSrc}
            />
          </div>
          {/* Player */}
          <WaveformContianer>
            <Wave id="waveform" />
            <Controls className="mx-auto md:space-x-10">
              <Skip15 onClick={() => this.waveform.skipBackward(15)}>
                <img
                  src={Minus15Button}
                  alt="Skip backwards 15 seconds button"
                ></img>
              </Skip15>
              <Play onClick={this.handlePlay}>
                {!this.state.playing ? (
                  <img
                    className="mx-auto"
                    src={PlayButton}
                    alt="The Play button"
                    width="20"
                    height="20"
                  ></img>
                ) : (
                  <img
                    className="mx-auto"
                    src={PauseButton}
                    alt="The Pause button"
                    width="20"
                    height="20"
                  ></img>
                )}
              </Play>
              <Skip15 onClick={() => this.waveform.skipForward(15)}>
                <img
                  src={Plus15Button}
                  alt="Skip forward 15 seconds button"
                ></img>
              </Skip15>
              <Mute onClick={this.handleMute} value={this.state.volume}>
                {!this.state.mute ? (
                  <img
                    src={SpeakerOn}
                    alt="Speaker On"
                    width="20"
                    height="20"
                  ></img>
                ) : (
                  <img
                    src={SpeakerOff}
                    alt="Speaker Muted"
                    width="20"
                    height="20"
                  ></img>
                )}
              </Mute>
              <Volume
                onChange={(state) => this.handleVolume(state)}
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.volume}
              ></Volume>
            </Controls>
            <audio id="track" src={this.props.episodeSrc} />
          </WaveformContianer>
        </div>
      </section>
    );
  }
}
export default AudioPlayer;
