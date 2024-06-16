import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './compoents/layout/layout';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Home from './pages/home';
import PageNotFound from './pages/page-not-found';
import About from './pages/about';
import GridContainer from './study/gridContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hone' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/pageNotFound' element={<PageNotFound />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
