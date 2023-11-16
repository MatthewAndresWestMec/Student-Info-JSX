import {useState} from 'react'
import {CollegeData} from '../data'
import StudentList from './StudentList';

const College = () => {
    const [student, setStudent] = useState(CollegeData)

 const updateStudent =()=>{
        let newStudent= {
            age: document.getElementById("age").value, name: document.getElementById("name").value, course: document.getElementById("course").value
        }
        setStudent([newStudent,...student])
        document.getElementById("name").value=""
        document.getElementById("course").value=""
        document.getElementById("age").value=""
        
    }
    const removeStudent = (id) => {
      setStudent((student) => {
        return student.filter((student) => student.id !== id)
      })
    }
    return (
      <section>
        <form action="" className="form-container ">
            <h1>Name</h1>
            <input type="text" id="name" />
            <h1>Age</h1>
            <input type="number" id="age" />
            <h1>Course</h1>
            <input type="text" id="course" />
            <button type="button" onClick={()=>{updateStudent()}}>Update</button>
        </form>
        <h3>Student List</h3>
        <StudentList student={student} removeStudent={removeStudent} />

        
      </section>

      
    )
  }

export default College;
