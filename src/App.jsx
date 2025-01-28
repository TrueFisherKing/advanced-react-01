import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Marquee from './Marquee'
import { MdStarRate } from "react-icons/md";
import Button from './Button';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Button
        className="red-button"
        onClick={()=>console.log("clicked")}
        >
          Log in with Google
          </Button>
        <Marquee>
          Welcome to Horrorville
          <span className='star'>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </span>
        </Marquee>
      </main>
    </>
  )
}

export default App
