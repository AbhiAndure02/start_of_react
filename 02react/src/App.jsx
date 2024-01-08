import { useState } from "react"


function App() {
  const [color, setColor] = useState("black");

  
  return (
   <div className="w-full h-screen"
   style={{backgroundColor : color}}>
    <div className=" fixed  inset-x-0 bottom-11 flex-wrap  flex  py-4 justify-center gap-5">
    <div className=" flex flex-wrap shadow-lg justify-center bg-white rounded-full gap-5">
    <button className="border rounded-md px-3 py-2  hover:bg-red-900"
     style={{backgroundColor: "red"}}
     onMouseEnter={()=>{
      setColor('red')
     }
    }
   >Red</button>



      <button className="border rounded-md px-3 py-2  hover:bg-orange-800"
        style={{backgroundColor: "orange"}}
        onClick={()=>{
          setColor('orange')
         }
        }
      >Orange</button>


      <button className="border rounded-md px-3 py-2  hover:bg-pink-800"
      style={{backgroundColor: "blue"}}
      onClick={()=> {setColor('blue')}} >blue</button>

<button className="border rounded-md px-3 py-2  hover:bg-pink-800"
      style={{backgroundColor: "purple"}}
      onClick={()=> { setColor('purple')}}>purple</button>
    </div>
    </div>
   </div>
    
  )
}

export default App