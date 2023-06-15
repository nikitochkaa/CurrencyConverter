import React, {useEffect} from 'react'
import './styles/App.css'
import NavBar from './components/NavBar'
import Converter from './components/Converter'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import Menu from './components/Menu'
import Contacts from './components/Contacts'
import About from './components/About'
import FAQ from './components/FAQ'

function App() {

  const navigate = useNavigate()
  const location = useLocation()
  const lang = location.pathname.split('/')[1]
  useEffect(() => {
    if ((lang !== 'en')&&(lang !== 'ua')) {
      navigate('/en')
    }
  })

  return (
    <div className="App">
       <NavBar/>
       <Routes>
         <Route path="/:lang">
           <Route path="" element={<Converter/>}/>
           <Route path="menu" element={<Menu/>}/>
           <Route path="contacts" element={<Contacts/>}/>
           <Route path="about" element={<About/>}/>
           <Route path="faq" element={<FAQ/>}/>
           <Route path="*" element={<div><br/><br/><br/><h1>404 Not Found</h1></div>}/>
         </Route>
       </Routes>
    </div>
  );
}

export default App;
