import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import './App.css'

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;