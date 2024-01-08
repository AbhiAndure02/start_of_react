import { useState, useCallback, useEffect, useRef} from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef =  useRef("");


  const passwordGenerator = useCallback(() =>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsruvwxyz"
    if(numberAllow) str += "123456789"
    if(charAllow) str += "!@#$%^&*()_+{}|>?/"
    for (let i = 1; i <= length; i++) {
      let char = ( Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{passwordGenerator()},
  [length, numberAllow, charAllow, passwordGenerator]
  )

  return (
<>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-y my-8 text-orange-500 bg-gray-800">
  <h1 className="text-white text-center py-4">Password Generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input className="px-2 py-1 outline-none w-full" type="text "
    ref={passwordRef}
    value={password} placeholder="password " readOnly />
    <button className="text-white px-2 py-1.5 bg-blue-600 w-20"
    onClick={copyPassword}>Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range" 
      name="" 
      min={6}
      max={100}
      value={length}
      className="cursor-pointer bg-blue-400"
      
      onChange={(e) => {setLength(e.target.value)}}
      />
      <label >Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked ={numberAllow}
      id="numberInput"
      
      className="cursor-pointer bg-blue-400"
      onChange={() => {
        setNumberAllow((prev) => ! prev)}}
      />
      <label htmlFor="numerInput">Number</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked ={charAllow}
      id="charInput"
      
      className="cursor-pointer bg-blue-400"
      onChange={() => {
        setCharAllow((prev) => ! prev)}}
      />
      <label htmlFor="numerInput">Character</label>

  </div>
</div>
</div>
</>

  )
}

export default App