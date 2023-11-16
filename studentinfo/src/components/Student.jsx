const Singlestudent = ({ id, name, removeStudent,course,age }) => {
    return (
      <>
        <div className="item">
          <h4>Name: {name}</h4>
          <h4>Age: {age}</h4>
          <h4>Course: {course}</h4>
          <button onClick={() => removeStudent(id)}>Remove</button>
        </div>
      </>
    )
  }

export default Singlestudent;