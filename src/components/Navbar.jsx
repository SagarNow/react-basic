import React from "react";

const Navbar = () => {
  // -----------------date
  const date = new Date();
  // ------------------------
  return (
    <>
    

    
      <div 
        className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 h-25 w-full border-b-2
 flex items-center flex-row capitalize">  

<div className="flex justify-end items-center border-2 border-gray-200 ml-8 px-4 py-2 rounded-md text-cyan-800 font-bold">
<p>Today is {date.toDateString()}</p>
</div>
<div className="text-amber-300 ml-96 ">
<h1 className="text-4xl  "> hello world !!  </h1></div>


        {/* alt + shift + f = code achha formate ho jata he  */}
        {/* time on page 💖 */}
       
       
{/* -------------------------------------------------------------------------------------------- */}







</div>

      
    </>
  );
};

export default Navbar;
