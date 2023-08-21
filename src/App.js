import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inner from './Inner';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Inner/>
      <Footer />
    </Router>
    </>
  );
}

export default App;

