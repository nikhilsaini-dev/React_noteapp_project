import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx)=>{
     const copyTask = [...task]

     copyTask.splice(idx,1)

     setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex  bg-black text-white ">
      <form
        className="flex gap-4   lg:w-1/2  flex-col items-start p-10"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING  */}
        <input
          type=" text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 font-medium outline-none rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED WALA INPUT  */}
        <textarea
          placeholder="Enter Details"
          className="px-5 py-2 w-full border-2 font-medium outline-none rounded h-32 "
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white active:scale-90 w-full text-black font-medium px-5 py-2 outline-none  rounded ">
          Add Notes
        </button>
      </form>

      <div className=" lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 h-[90%] overflow-auto mt-5">
         {task.map(function(elem,idx){

          return <div key={idx} className="flex justify-between flex-col h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] ">
            <div>
               <h3 className="leading-tight  text-lg font-bold">{elem.title}</h3>
             <p className="mt-4  leading-tight text-xs font-semibold text-gray-600">{elem.details}</p>
            </div>
             <button onClick={()=>{
              deleteNote(idx)
             }} className=" w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs text-white rounded font-bold" >Delete</button>
             </div>
         })}
         
        </div>
      </div>
    </div>
  );
};

export default App;
