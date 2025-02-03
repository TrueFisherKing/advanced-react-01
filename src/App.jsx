import React from 'react';
import Menu from "./components/Menu"
import Star from './components/Star';

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <>

      <Star onChange={() => { console.log("hello") }} />

      <br />

      <Menu onChange={()=>{console.log("From App Menu");
      }}>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map(sport => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
export default App