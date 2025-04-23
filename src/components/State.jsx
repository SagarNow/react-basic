import React, { useState, useRef } from "react";

import Music from "../assets/XXXTENTACION.mp3";

const State = () => {
 
  const audioRef = useRef(new Audio(Music)); // persist the same audio object
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };


  const [a, b] = useState(1);
const [c, d] = useState(0);
  return (
    <>
      <div className="background bg-gradient-to-t from-black via-purple-900 to-black min-h-screen w-screen">
        <h1 className=" ml-75 text-[200px] font-bold text-purple-800 opacity-10 z-0 select-none">
          Sagar Now
        </h1>


       {/* usestate */}

<div className=" box1 flex flex-row gap-50 z-10 h-50 w-full justify-center items-center">

   {/* box 1 */}
      <div className=" box1 flex flex-col gap-8">
        <div
          className=" usestate h-20 w-25 bg-purple-300 
  rounded-2xl shadow-lg px-4 py-2 flex justify-center items-center"
        >
          {a}
        </div>

        <button
          className="h-8 w-25 bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center text-white"
          onClick={() => {
            b(a + 1);
          }}
        >
          Click Me
        </button> </div>
         
{/* box2 */}


<div className=" flex flex-col gap-8 ">
<div
          className=" usestate h-20 w-25 bg-purple-300 
  rounded-2xl shadow-lg px-4 py-2 flex justify-center items-center"
        >
          {c}
        </div>

        <button className="h-8 w-25 bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center text-white

" onClick={ () =>d(c+2
)}
> Click Me </button></div>
 
<button
        onClick={togglePlay}
        className=" h-8 w-35 bg-green-600 hover:bg-green-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center text-white"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>



</div>







      </div>
    </>
  );
};

export default State;
