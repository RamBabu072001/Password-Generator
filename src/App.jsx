import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123467890"
    if (charAllowed) str += "~!@#$%^&*()_+-<>?"

    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);

    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <div className='bg-gray-700 mx-auto w-full max-w-md my-8 rounded-lg py-4 px-4 text-orange-600 '>
        <h1 className='text-center text-xl my-3 '> Password Generator</h1>
       
        <div className='flex rounded-lg overflow-hidden'>
          <input type='text' value={password} placeholder='Password' readOnly className='outline-none rounded-lg px-2 py-3 my-3 w-full mx-2'></input>
          <button className='bg-blue-800 rounded-lg shrink-0 my-3 px-4 text-white '>copy</button>
        </div>
       
        <div className='flex text-sm gap-x-2 '>
          <div className='flex gap-x-1 my-4'>
            <input type='range' min={8} max={100} value={length} onChange={(e) => { setLength(e.target.value) }}></input>
            <label>Length: {length}</label>
          </div>

          <div className='flex text-sm my-4'>
            <div>
              <input type="checkbox" value={numberAllowed} onClick={() => { setNumberAllowed((prev) => !prev) }}></input>
              <label>Number</label>
            </div>
          </div>

          <div className='flex text-sm my-4'>
            <div>
              <input type="checkbox" value={charAllowed} onClick={() => { setcharAllowed((prev) => !prev) }}></input>
              <label>Special character</label>
            </div>
          </div>

        </div>
      </div>



    </>
  )
}

export default App
