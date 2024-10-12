
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Labs from './pages/Labs'
import Findstore from './pages/Findstore'
function App() {
  return (
    <>
<Header/>
<Routes>
  <Route path='/'element={<Home/>}></Route>
  <Route path='/About'element={<About/>}></Route>
  <Route path='/Labs'element={<Labs/>}></Route>
  <Route path='/Findstore'element={<Findstore/>}></Route>
  </Routes>
<Footer/>

    </>
  )
}

export default App
