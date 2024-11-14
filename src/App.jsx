import Moxista from './components/Moxista/Moxista'
import Murodjon from './components/Murodjon/Murodjon'
import Firdavs from './components/Firdavs/Firdavs'
import Muhammadali from './components/Muhammadali/Muhammadali'
import Behruzbek from './components/Behruzbek/Behruzbek'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Testimonials from './pages/Testimonials/Testimonials'
import Fayzullo from './components/Fayzullo/Fayzullo'

function App() {
  

  return (
    <>
    <div className="ali">
      <Fayzullo/>
      <Moxista/>
      <Muhammadali/>
    </div>

      <Routes>
        <Route/>
        
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>

      </Routes>

    </>

  )
}

export default App
