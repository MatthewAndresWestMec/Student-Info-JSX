import {useState} from 'react'


const Singlestudent = ({ id, name, removeStudent,course,age }) => {
    return (
      <>
        <div className="item">
          <h4>{name}</h4>
          <h4>{age}</h4>
          <h4>{course}</h4>
          <button onClick={() => removeStudent(id)}>Remove</button>
        </div>
      </>
    )
  }

