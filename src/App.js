
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './CardComponents/Card';
import Navbar from './NavComponents/Navbar';

function App() {
  return (
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path='/' element={<Card />}/>
 </Routes>
 
 </BrowserRouter>
  );
}

export default App;
