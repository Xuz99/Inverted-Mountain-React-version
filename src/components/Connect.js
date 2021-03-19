import React from "react";
import instagram_socicon from "../images/256px_instagram_socicon.png";
import mastodon_socicon from "../images/256px_mastodon_socicon.png";
import twitter_socicon from "../images/256px_twitter_socicon.png";
import ClipBoard from "../images/clipboard.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function copyText() {
  const textToCopy = "earthlings@invertedmounta.in";
  navigator.clipboard.writeText(textToCopy);
  toast.success("Coppied to clipboard \n\n" + textToCopy);
}

const contextClass = {
  success: "bg-green-400",
};

const Connect = () => (
  <section className="mt-24 mx-auto">
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={({ type }) =>
        contextClass[type || "default"] +
        " whitespace-pre-line flex p-3 min-h-10 lato fw-400 rounded-md justify-between cursor-pointer"
      }
      bodyClassName={() => "text-xl w-full font-white p-3"}
    />
    <h1
      id="connect"
      className="text-4xl xl:text-6xl text-center text-white p-8 leading-none tracking-track-02 uppercase lato fw-400"
    >
      connect
    </h1>
    <p className="mt-16 text-center text-lg md:text-4xl text-gray-500 uppercase italic tracking-widest">
      WANNA TALK?
      <br />
      Shoot us an email
      <br />
     
    </p>

    <p className="text-yellow-600 text-xl md:text-5xl text-center mt-5 mb-20 tracking-tight">
      <a href="mailto:earthlings@invertedmounta.in" target="_top">
        earthlings
        <span>
          <br />@<br />
        </span>
        invertedmounta.in
      </a>
      <br/>
      <button
        onClick={() => copyText()}
        className="hover:bg-red-300 xl:px-1 px-1 py-1 mx-auto border-red-500 border-2 cursor-pointer"
      >
        <img
          className="mx-auto"
          src={ClipBoard}
          alt="A clipboard"
          width="20"
          height="20"
        ></img>
      </button>
    </p>
    

    <p className="uppercase text-md md:text-2xl text-gray-600 text-center tracking-widest italic">
      follow us on social media
    </p>
    <div className="grid grid-cols-3 justify-items-center mb-40 mt-10 mx-1">
      <a
        className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16"
        href="https://www.youtube.com/watch?v=fY1IXtyyRp0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagram_socicon}
          alt="A link to Inverted-Mountain Instagram page"
        />
      </a>
      <a
        className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16"
        href="https://www.youtube.com/watch?v=fY1IXtyyRp0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={mastodon_socicon}
          alt="A link to Inverted-Mountain Mastodon page"
        />
      </a>
      <a
        className="p-2 border-2 border-gray-600 md:w-32 md:h-32 w-16 h-16"
        href="https://www.youtube.com/watch?v=fY1IXtyyRp0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={twitter_socicon}
          alt="A link to Inverted-Mountain twitter page"
        />
      </a>
    </div>
  </section>
);

export default Connect;
