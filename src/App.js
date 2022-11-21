import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Contact from "./components/Contact/contact"
import Home from './components/home/home';
import Course from './components/course/course';
import Events from './components/events/events';
import Organizers from './components/Organizers/organizers';


function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <NavBar />
      <Routes>
        <Route path='/' element ={<Home/>}/>
      {/* <Routes>

        
            {/* <Route path="/" index element={<ParallaxPages />}/>
            <Route path="/about" index element={<AboutMe />}/>
            <Route path="/skills" index element={<Skills />}/>
            <Route path="/portfolio" index element={<Portfolio />}/> */}
            <Route path="/events"  element={<Events/>}/>
            <Route path="/course"  element={<Course/>}/>
            <Route path="/organizers"  element={<Organizers/>}/>
            <Route path="/contact"  element={<Contact />}/>


        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
