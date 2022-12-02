import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Contact from "./components/Contact/contact"
import Home from './components/home/home';
import Course from './components/course/course';
import Events from './components/events/events';
import Organizers from './components/Organizers/organizers';
import Gallery from './components/Gallery/gallery';
import Profile from './components/Organizers/profile';
import Blog from './components/Blog/blog';
import BlogPage from './components/Blog/blogPage';
import BlogPost from './components/Blog/BlogPost';
import AuthorPage from './components/Blog/authorPage';



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
            <Route path="/gallery"  element={<Gallery />}/>
            <Route path="/events"  element={<Events/>}/>
            <Route path="/course"  element={<Course/>}/>
            <Route path="/blog"  element={<Blog/>}/>
            <Route path="/blog/:slug" element={<BlogPost/>}/>
            <Route path="/blogauthor/:slug" element={<AuthorPage/>}/>
            <Route path="/organizers"  element={<Organizers/>}/>
            <Route path="/organizers/:slug"  element={<Profile />}/>
            <Route path="/contact"  element={<Contact />}/>


        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
