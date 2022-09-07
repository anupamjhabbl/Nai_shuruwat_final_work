import Navbar from './components/Navbar';
import Footer from './components/footer/footer.js';
import Social from './components/social media/Social.js'
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Footer/>
        <Social/>
      </header>
    </div>
  );
}



export default App;
