import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Portfolio from './Portfolio';
import Contact from './contact';
import About from './about';
function App() {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;