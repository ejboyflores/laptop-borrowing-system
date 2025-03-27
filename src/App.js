import './assets/css/global.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NoPage from './pages/NoPage';

export default function App() 
{
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </body>
  );
}
