import React from 'react'


const Task = (props) => {

  return (
    <div className="row mx-auto">
     <li className="shadow p-3 my-2 col-sm-9 fw-bold text-wrap">{props.value}</li>
     <button type="button" className="btn border btn-danger col-2 col-sm-2 my-2 mx-4" onClick={()=>{props.deleteTask(props.id)}}>X</button>
       
    </div>
   
  )
}

export default Task
