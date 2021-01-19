import React from 'react';
import PodEpisode from './PodEpisode';

const dummy_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...";

const Listen = (props) =>  (
    <section className="text-white mt-32 mx-5 md:mx-64">
    <h1 id="listen" className="text-4xl xl:text-6xl text-center text-white p-8 leading-none tracking-widest uppercase lato fw-400">
        listen
    </h1>
    <section className="grid grid-cols-1">
        <PodEpisode episodeNo={'Episode #3'} title={"How we named oursevels"} date="19-01-2021" description={dummy_text}/>
        <PodEpisode episodeNo={'Episode #2'} title={"What do we mean by \"psyche-delicious games\" ?"} date="02-01-2021" description={dummy_text}/>
        <PodEpisode episodeNo={'Episode #1'} title={"The start of inVERTed mOUNTAIn"} date="08-12-2020" description={dummy_text}/>
    </section>
    <div className="mx-10 md:px-64">
        <button className=" hover:bg-blue-300 hover:text-white xl:text-5xl text-2xl text-blue-400 tracking-track-02 xl:px-8 px-4 py-2 mb-10 text-center lato fw-700 font-in-border-blue border-2 cursor-pointer">
            Get this podcast
        </button>
    </div>
    </section>
)


export default Listen;