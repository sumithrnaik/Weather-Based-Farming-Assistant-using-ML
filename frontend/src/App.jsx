import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import CropDetails from './pages/CropDetails'
import './App.css'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<CropDetails/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/' element={<CropDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;