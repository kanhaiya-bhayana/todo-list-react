import React from "react";
// import React, { useState } from "react";
import { useState } from "react";

export const AddStudents = ({ addStudentsfunc }) => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [salery, setSalery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !dept || !salery)
      alert("Name, Departmetn, and Salery field can not be empty!");
    else {
      addStudentsfunc(name,dept,salery);
      setName("");
      setDept("");
      setSalery("");
    }
  };

  return (
    <div className="container">
      <h3>Add Studetns</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            
            name="dept"
            type="text"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            required
            name="salary"
            type="text"
            value={salery}
            onChange={(e) => setSalery(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
