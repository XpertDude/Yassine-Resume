import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './Portfolio';
import Contact from './contact';
import About from './about';
import Achievements from './Achievements';
function App() {
    return (
        <Router basename='/Yassine-Resume'>
            <Routes >
                <Route  path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/achievements' element={<Achievements />}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;