import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import CounterC from './CounterC'
import CounterF from './CounterF'
import Pokemon from './Pokemon'
import ListManager from './ListManager'
import ColorBox from './ColorBox'

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('Eya');
  const [lastName,setLastName] = useState('Nehdi');
const handleClick =()=>{setCount(()=>count+1)}
  return (
    <>
     <Header name={name} lastName={lastName} />
     <button onClick={handleClick}>{count}</button>
     <CounterC counter={10} />
     <CounterF step={2} />
     <Pokemon />
     <ListManager initialItems={['Angular','VueJS','React']}  />
     <ColorBox initialColor={'#FF0000'} />
     <Footer />
    </>
  )
}

export default App
