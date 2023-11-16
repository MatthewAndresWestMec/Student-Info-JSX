import Singlestudent from './Student';
const StudentList = ({ student, removeStudent }) => {
    return (
      <>
        {student.map((student) => {
          return (
            <Singlestudent
              key={student.id}
              {...student}
              removeStudent={removeStudent} 
            />
          )
        })}
      </>
    )
}

export default StudentList;
