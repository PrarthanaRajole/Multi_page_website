
import { BrowserRouter, Route,  Routes,Link} from 'react-router-dom';
import './app.css';

import Home from './components/home/Home';
import  Products  from  './components/products/products' ;
import  Services  from  './components/services/services' ;
import  Contact  from  './components/contact/contact' ;
import   About from  './components/about/about' ;

function App() {
  return (
    <div className="wrapper">
      <h1>MUSIC STORE</h1>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;