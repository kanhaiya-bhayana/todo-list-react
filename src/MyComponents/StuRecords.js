import React from 'react'
import { StuDetails } from "./StuDetails";

export const StuRecords = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin:"50px auto"
    }
  return (
    <div className="container" style={myStyle}>
        <h2 className="my-3">Student Records</h2>
        {
        props.students.length === 0 ? "No Records To Display!" :
        props.students.map((s)=>{
            return(<StuDetails studet={s} key={s.srn} onDelete={props.onDelete} />)
            })
        }
        
    </div>
  )
}
