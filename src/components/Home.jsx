import React, { useState} from "react";

const Home = () => {
  const Click = () => {
    console.log("Button clicked");
    alert("Button clicked");
  };
  



  

  // objects - array 


  const person = [
    { name: "Radha", age: 21, city: "Mathura" },
    { name: "Shyam", age: 22, city: "Mathura" },
    { name: "Mohan", age: 23, city: "Mathura" },
  ];
// -------------------------------------------
// const product = ["Mobile", "Camera", "Headphone", "TV"];
// -------------------------------
  const [input, setInput] = useState(" ")
  const onchange =(event)=>{
    const newval=event.target.value;
   setInput(newval)
  };

// -------------------------------------
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
    >   {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      {/* Overlay (optional for dark filter) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>




      <div className="relative z-20 text-white">
{/* ------------------------------------- UseState ka Use 😘---------------------------------------------------------------------------       */}
 {/* BOX 1 - */}

 <div className="flex justify-center items-center flex-row  gap-35 ">
 

      <div className="flex justify-center items-center flex-col  gap-8 mt-10">
      <h>Click to Increase by 1</h>


        <div className="h-20 w-25 bg-purple-300 
  rounded-2xl shadow-lg px-4 py-2 flex justify-center items-center">{a}</div>

<button
        className="h-8 w-32 bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center text-white"
        onClick={() => {
          b(a + 1)
         
        }}
      >
        Click Me
      </button>
          
        
      </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* BOX 2 - */}

      <div className="flex justify-center items-center flex-col  gap-8 mt-10">
      <h> Click to increase by 2 </h>

<div className="h-20 w-25 bg-purple-300 
 rounded-2xl shadow-lg px-4 py-2 flex justify-center items-center ">{c}</div>

<button className=" h-8 w-25 bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center

" onClick={ () =>d(c+2
)}
> click me </button>
 
 
</div>

</div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}

{/* dusra use of use state  😘 */}

<div className="flex justify-center items-center flex-col  gap-8 mt-20">
  <h> you are writing 👉🏻 {input}</h>
  
  <input type="text" placeholder="Type something..." 
   onChange={onchange}
  
  
  className="border-2 border-purple-600 rounded-md shadow-lg px-4 py-2 flex justify-center items-center hover:bg-blue-300  "/>

  <button className=" h-8 w-25 bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg px-4 py-2 flex justify-center items-center

 " onClick={Click}> Ok </button>


</div>


<hr className="border-t-2 mt-5 " />

{/* ------------------------------------------------------------------------------------------------------------------------------ */}





{/* ----------------------------------------------------------------------------------------------------------------------------------- */}

{/* <div className="gap-5 flex flex-row mt-5 justify-center items-center">
       {person.map((person) => (
         <div>
           <p> name: {person.name}</p>
           <p> age : {person.age}</p>
           <p> city: {person.city}</p>
         </div>
       ))}
     </div> */}

{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
{/* cart */}
{/* {product.length > 0 && (
  <h1>You have {product.length} items in your cart</h1>
)} */}
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}
</div> {/* End of z-20 content wrapper */}

    </div>
  );
};

export default Home;
