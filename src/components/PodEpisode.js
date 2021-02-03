import React from 'react';

const PodEpisode = (props) =>  (
    <section className="my-10 text-white bg-gray-900  rounded shadow-lg">
        <div className="p-0 text-center md:text-left font-in-border-blue border-l-2">
            <div className="grid grid-cols-2 gap-2">
                <div className="p-5">   
                    <h3 className="md:text-4xl text-xl font-bold text-green-400 uppercase tracking-mad-wide">{props.title}</h3>
                    <h2 className="md:text-2xl text-lg text-green-300 fw-300">{props.episodeNo} | {props.date}</h2>
                    <p className="md:text-3xl text-lg italic text-gray-500 tracking-track-01 my-10">{props.description}</p>
                </div>  
                <img className="w-full h-full rounded-b-md" alt={props.imageAlt} src={props.imageSrc}/>
                 

            </div>
            
            <div id="single-song-player" className="bg-black p-5">
                <div className="bottom-container">
                <img data-amplitude-song-info="cover_art_url" alt={props.imageAlt}/>

                    <progress className="amplitude-song-played-progress" id="song-played-progress"></progress>
                    
                    {/* time */}
                    <div className="time-container gird grid-cols-2 space-x-6">
                        <span className="current-time">
                            <span className="amplitude-current-minutes"></span>:<span className="amplitude-current-seconds"></span> 
                        </span>
                        <span className="duration md:float-right">
                            <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
                        </span>
                    </div>

                    {/* controls */}
                    <div className="control-container">
                        <div className="amplitude-play-pause" id="play-pause"></div>
                        <div className="meta-container">
                            <span data-amplitude-song-info="name"></span>
                            <span data-amplitude-song-info="artist"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
)

export default PodEpisode;