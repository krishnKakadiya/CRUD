import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route, BrowserRouter} from "react-router-dom";




import Form from './components/Form';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>

     <Routes>
     <Route path='/' element={<Read />} />
     <Route path='/create' element={<Form />} />
     <Route path='/update' element={<Edit />} />
     </Routes>


     </div>

    </>
  )
}

export default App
