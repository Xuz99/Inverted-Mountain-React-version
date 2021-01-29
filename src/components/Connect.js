import React from 'react'
import instagram_socicon from '../images/256px_instagram_socicon.png';
import mastodon_socicon from '../images/256px_mastodon_socicon.png';
import twitter_socicon from '../images/256px_twitter_socicon.png';

const Connect = () =>  (
<section className="mt-24 mx-auto">
	<h1 id="connect" className="text-4xl xl:text-6xl text-center text-white p-8 leading-none tracking-widest uppercase lato fw-400">
        connect
    </h1>
	<p className="mt-16 text-center text-lg md:text-4xl text-gray-500 uppercase italic tracking-widest">
		WANNA TALK?
		<br/>
		Shoot us an email
	</p>
	<p className="text-yellow-600 text-xl md:text-5xl text-center mt-5 mb-20 tracking-tight">
		<a href="mailto:earthlings@inverted-mountain.com" target="_top">earthlings<span><br/>@<br/></span>inverted-mountain.com</a>	
	</p>

	<p className="uppercase text-md md:text-2xl text-gray-600 text-center tracking-widest italic">
		follow us on social media
	</p>
    <div className="grid grid-cols-3 justify-items-center mb-40 mt-10 mx-1">
        <a className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16" href="https://www.youtube.com/watch?v=TmNSlF7lcaw">
            <img src={instagram_socicon} alt="A link to Inverted-Mountain Instagram page"/>
        </a>
        <a className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16" href="https://www.youtube.com/watch?v=TmNSlF7lcaw">
            <img src={mastodon_socicon} alt="A link to Inverted-Mountain Mastodon page"/>
        </a>
        <a className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16" href="https://www.youtube.com/watch?v=TmNSlF7lcaw">
            <img src={twitter_socicon} alt="A link to Inverted-Mountain twitter page"/>
        </a> 
    </div>
</section>
    )
    
export default Connect;