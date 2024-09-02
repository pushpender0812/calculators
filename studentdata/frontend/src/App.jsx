import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [student,setStudent] = useState([]);

useEffect(() => {
  axios.get('api/student')
  .then((response) => {
      setStudent(response.data)
  })
.catch((error) => {
     console.log(error)
})

})

const onclickhandler = () =>{
  console.log('hy ')
     

}

  return (
    <>
      <div className="go">
      <div className="student">{student.length}
      <h3>Student_id :</h3>
      <input type="id" key={student.id} />
      <button onClick={onclickhandler}>Get Data</button>
    </div>  
    {/* <h3>student data</h3>
    <p>{student.length}</p> */}
 
    {student.map((student,index) => (
      <div className="student-data" key={student.id}>
      <p>Student Id : {student.id}</p> 
      <p>Student Name : {student.Name}</p>
      <p>Branch : {student.branch}</p>
      <p>Father's Name : {student.father_name}</p>
    </div>

    ))}
    
   </div>
    
    </>
  )
}

export default App
