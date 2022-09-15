import Navbar from './components/Navbar';
import Footer from './components/footer/footer.js';
import Social from './components/social media/Social.js'
import Volunteer_form from './components/volunteer_form/volunteer_form.js';
import Help from './components/Help/Help.js';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar/>
        <Social/> 
        <Volunteer_form/>
        <Help/>
        <Footer/>
        
      </header>
    </div>
  );
}



export default App;
