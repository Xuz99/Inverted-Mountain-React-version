import React from 'react';

const PodEpisode = (props) =>  (
    <div className="my-10 text-white bg-gray-900  rounded shadow-lg">
    <div className="p-5 text-center md:text-left font-in-border-blue border-l-2">
        <h3 className="md:text-4xl text-xl font-bold text-green-400 uppercase tracking-mad-wide">{props.title}</h3>
        <h2 className="md:text-2xl text-lg text-green-300 fw-300">{props.episodeNo} | {props.date}</h2>
        <p className="md:text-3xl text-lg italic text-gray-500 tracking-track-01 my-10">{props.description}</p>
        <div id="Audio" className="text-gray-500 text-center audio-player w-full rounded inline-flex pt-5">
            <audio controls preload="none">
                <source src="https://freepd.com/music/Bass%20Meant%20Jazz.mp3" type="audio/ogg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
        {/* <script type="text/javascript">
            var doc = document
            var qs = el => doc.querySelectorAll(el) 	
            
            var aud = qs('.audio-player'); ({
                qs('.play').addEventListener('click', () => {
                    if (aud.paused) {
                        aud.play():
                        qs('.play-pause').removeclass('.icon-play')
                        qs('.play-pause').addClass('.icon-stop')
                    }
                    else { 
                        aud.pause(); 
                    qs('.play-pause').removeClass('.icon-stop')
                    qs('.play-pause').addClass('.icon-play')
                    }

                    var aud = qs('#Audio');
                    qs('.play-pause').on('click', function() {} )
                    qs('.next')
                    qs.src =  'another audio source'  
                    
                    }
            });
        </script> 
        */}

    
    </div>
)


export default PodEpisode;