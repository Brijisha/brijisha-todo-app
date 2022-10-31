import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Task from "./Task";

function App() {
  const [text,setText]=useState("")
  const [items,setItems]=useState([])

  const handleChange = (e)=>{
    setText(e.target.value);
  }
   const handleAdd= ()=>{
    if(text !== ""){
      setItems([...items,text])
      setText("");
    }
  }

  const handleDelete = (id)=>{
   // console.log("deleted", {id})
    const prevItems = [...items];
   // console.log ("Previous old items",prevItems )
   const newItems = prevItems.filter((element,i)=>{
    return i!==id;
   })
   setItems(newItems);
  }
  return (
    <div className="container-fluid my-5">
      <div className=" row  ">
        <div className="col-6 col-sm-6 mx-auto shadow-lg todocard">
      <h2 className="text-center">Brijisha's Todo Application</h2>
     <div className="container">
       <div className="row pt-3 mx-auto ">
        <div className="col-9 col-sm-9">
          <input type="text" className="form-control border text-dark fw-bold py-3" placeholder="Enter Task" value={text} name="task" id="mytask" onChange={handleChange}/>
        </div>
        <div className="col-2 col-sm-2">
          <button type="button" className="btn btn-success border fs-2 px-4"  onClick={handleAdd}> + </button>
        </div>
        </div>
        
      </div>
        <div className="row mx-auto p-2 my-2 ">
        <h3 className="mt-3 mx-auto">My Tasks:</h3> 
        <ul className="list-unstyled row">
        {items.map((value,i)=>{
          return <Task key={i} value={value} id={i} deleteTask={handleDelete}/>
        })}
        </ul>
       </div>
    </div>
    </div>
        </div>
  );
}

export default App;
