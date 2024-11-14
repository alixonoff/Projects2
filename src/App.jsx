import Moxista from './components/Moxista/Moxista'
import Murodjon from './components/Murodjon/Murodjon'
import Firdavs from './components/Firdavs/Firdavs'
import Muhammadali from './components/Muhammadali/Muhammadali'
import Behruzbek from './components/Behruzbek/Behruzbek'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Moxista/>
     <Murodjon/>
      <Firdavs/>
      <Behruzbek/>
      <Muhammadali/> 

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
