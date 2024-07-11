import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import WeddingDress from './pages/WeddingDress'
import ThingsToDo from './pages/ThingsToDo'
function App() {
  return(
    <>

    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wedding-dress" element={<WeddingDress/>}/>
      <Route path="/things-to-do" element={<ThingsToDo/>}/>
      <Route path="/about-us" element={<About/>}/>
    </Routes>
    </div>

    </>
  );
}

export default App

