import './App.css';
// import Count from './pages/Home/Home';
import Header from './layouts/Header'
import {Hero,Product} from './pages/Home/Home';
import About from './pages/About/About';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <Product />
          </>
          
          } />
        <Route path="/about" element={<About />} />
      </Routes>
      
      
      
      {/* <Count /> */}
    </div>
  );
}

export default App;
