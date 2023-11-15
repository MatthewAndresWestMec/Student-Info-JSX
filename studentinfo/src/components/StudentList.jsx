import {useState} from 'react'
import {student} from '../College'

const StudentList = ({ student, removeStudent }) => {
    return (
      <>
        {student.map((student) => {
          return (
            <Singlestudent
              key={student.id}
              {...student}
              removestudent={removeStudent} 
            />
          )
        })}
      </>
    )
}