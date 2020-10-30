import React from 'react';
import Game from './Games';

// import Iloveyou from './games/Iloveyou';

const all_ties_down_text = (`Equipped with a black tie and a white collar shirt, you answer e-mails sitting in the cubicle which you have learnt to call home. Then, as has become a habit of yours, you fall into the embrace of a daydream, closing your eyes, and leaving this reality away. 
  And when you open your eyes again, you are in a different place entirely: in the woods, 
  speaking... to a tree. And the tree speaks back, calling herself the Mother, 
  asking you to defend her. She claims this planet has been "enslaved" and needs to be 
  set free! Clueless and naive, suddenly following some mysterious excitement that 
  whispers to you from the depths of your soul, you agree, and your journey into the 
  unconscious begins...`)

const Play = (props) =>  (
  <section className="text-white my-32">
  <header>
  <h1 id="play" className="text-4xl xl:text-6xl text-center text-white p-8 leading-none tracking-tiny-wide uppercase lato fw-400">play</h1>
  </header>
  <article className="xl:max-w-full xl:mx-64 xl:mb-48 lato fw-300 text-gray-400">
  <section>
  <div>
  <Game title={'All\nTies\nDown'}
  year_of_release="Work in progress. We plan to release the early access version around X-mas 2020." 
  genres="Exploration turn-based mystery story-driven female-character counter-cultural" 
  what_its_all_about={all_ties_down_text} 
  custom_class="all-ties-down"
  showImgs="true"/>

  <Game title="I LOVE YOU, THEREFORE I NEED YOU TO DIE...AGAIN"
  year_of_release="2020, Christmas" 
  genres="Story-driven metaphysical shamanic" 
  what_its_all_about="Description..." 
  custom_class="i-love-you"
  showImgs="false"/>

  </div>

  </section>
  </article>
  </section>
  )


export default Play