import Navbar from './components/Navbar';
import Footer from './components/footer/footer.js';
import Social from './components/social media/Social.js'
import Volunteer_form from './components/volunteer_form/volunteer_form.js';
import Help from './components/Help/Help.js';
import Donate from './components/Donate/Donate.js';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar/>
          <Social/> 
          <Routes>
            <Route exact path="/" element={<Footer/>}/>
            <Route exact path="/Volunteer" element={<Volunteer_form/>}/>
            <Route exact path="/Help" element={<Help/>}/>
            <Route exact path="/Donate" element={<Donate/>}/>
          </Routes>
          
        </Router>
        
        
      </header>
    </div>
  );
}



export default App;
