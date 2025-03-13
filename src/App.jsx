import './App.css'
// import Header from './Header'
 import Footer from './Footer'
// import CounterC from './CounterC'
// import CounterF from './CounterF'
// import Pokemon from './Pokemon'
// import ListManager from './ListManager'
// import ColorBox from './ColorBox'
// import Evaluation from './Evaluation'
// import ToDo from './ToDo'
import Events from './components/Events'
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import AjouterEvent from './components/AjouterEvent'
//import EventPrice from './components/EventPrice'
import NotFound from './components/NotFound'
import NavigationBar from './components/NavigationBar'
//import EventDetails from './components/EventDetails'
import React from 'react'
import EventForm from './components/EventForm';
import Favourites from './components/Favourites'

function App() {
  // const [count, setCount] = useState(0);
  // const [name,setName] = useState('Eya');
  // const [lastName,setLastName] = useState('Nehdi');
// const handleClick =()=>{setCount(()=>count+1)}
const EventPrice = React.lazy(() => import('./components/EventPrice'));
const EventDetails = React.lazy(() => import('./components/EventDetails'));
  return (
    <>
     {/* <Header  /> */}
     {/* <button onClick={handleClick}>{count}</button>
     <CounterC counter={10} />
     <CounterF step={2} />
     <Pokemon />
     <ListManager initialItems={['Angular','VueJS','React']}  />
     <ColorBox initialColor={'#FF0000'} />
     <Evaluation initialNotes={[15,20,8]} />
     <ToDo initialTask={[{task:'Terminer projet',priority:'Haute'},{task:'Terminer tache',priority:'Moyenne'}]} /> */}
     
     <NavigationBar />
     <Routes>
     <Route path='/events' element={<Events />} />
     <Route path='/login' element={<Navigate to="/signin" replace  />} />
     <Route path='/signin' element={<Login />} />
     <Route path='/ajoutEvent' element={<AjouterEvent />} />
     <Route path='/by/price/:price' element={<EventPrice />} />
     <Route path='/events/:name' element={<EventDetails />} />
     <Route path='/eventform' element={<EventForm />} />
     <Route path='//update-event/:eventId' element={<EventForm />} />
     <Route path='/favourite' element={<Favourites />} />
     <Route path='*' element={<NotFound />} />
     
     <Route exact path='/' element={<Home />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
