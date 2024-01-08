import {useState} from 'react'

function App() {
  let [count, setCount] = useState(0);

 const addValue = () =>{
  count = count+1;
  setCount(count);

  if(count>20){
    setCount(20)
    // setCount(20) 
  }
 }
 const removeValue =() =>{
  count = count -1;
  setCount(count);
  if(count<0){
    setCount(0)
  }
 }

  return (
    <div>
      <h2>Counter app</h2>
      <h2>counter {count} </h2>
      <button onClick={addValue} >add</button>
      <button onClick={removeValue}>remove </button>
    </div>
  )
}

export default App