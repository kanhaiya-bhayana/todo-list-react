import React from "react";

export const StuDetails = (props) => {
  
  return (
      <>
    <div className="container">
            <h5>Name: {props.studet.name}</h5>
            <p>Departmetn: {props.studet.dept}</p>
            <p>Salery: {props.studet.salery}</p>
           <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.studet)}}>Delete</button>
           
    </div>
    <hr/>
      </>
  );
};
