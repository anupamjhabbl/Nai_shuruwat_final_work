import Navbar from './components/Navbar';
import Footer from './components/footer/footer.js';
import Social from './components/social media/Social.js'
import Volunteer_form from './components/volunteer_form/volunteer_form.js'
import Donate from './components/donate/Donate.js'
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Social/> 
        {/* <Volunteer_form/> */}
        <Donate/>
        <Footer/>
      </header>
    </div>
  );
}



export default App;
