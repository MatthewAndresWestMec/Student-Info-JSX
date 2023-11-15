import {useState} from 'react'
import {College} from '../data'

const College = () => {
    const [student, setStudent] = useState(College)
    const removeStudent = (id) => {
      setStudent((student) => {
        return student.filter((student) => student.id !== id)
      })
    }
    return (
      <section>
        <h3>Student List</h3>
        <List student={student} removeStudent={removeStudent} />
      </section>
    )
  }