import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { StuRecords } from "./MyComponents/StuRecords";
import React, { useState, useEffect } from "react";
import { AddStudents } from "./MyComponents/AddStudents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initStudent;
  if (localStorage.getItem("students") === null) {
    initStudent = [];
  } else {
    initStudent = JSON.parse(localStorage.getItem("students"));
  }

  const onDelete = (studet) => {
    // console.log("Del WOrking.", studet);
    setStudents(
      students.filter((e) => {
        return e !== studet;
      })
    );
    localStorage.setItem("students", JSON.stringify(students));
  };

  const addStudentsfunc = (name, dept, salery) => {
    // console.log("Adding", name, dept, salery);
    let srn;
    if (students.length === 0) srn = 1;
    else srn = students[students.length - 1].srn + 1;

    const newStudent = {
      srn: srn,
      name: name,
      dept: dept,
      salery: salery,
    };
    setStudents([...students, newStudent]);
    console.log(newStudent);
  };

  const [students, setStudents] = useState(initStudent);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <Router>
        <Header title="Students Project" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddStudents addStudentsfunc={addStudentsfunc} />
                <StuRecords students={students} onDelete={onDelete} />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
