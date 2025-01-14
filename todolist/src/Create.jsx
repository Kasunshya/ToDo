import React from 'react'
import axios from 'axios'
function Create(){
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3001/add' , {task: task})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    
  }
  return(
    <div className="create_form">
      <input type="text" placeholder="Enter Task" onclick={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handAdd}>Add</button>
    </div>
  )
}
export default Create;