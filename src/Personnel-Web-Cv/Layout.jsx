import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from "react-responsive";
import { Navbar, Nav, Container } from "react-bootstrap";
export default function NavBar() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return <>
        {!isMobile ?
            <div className="d-flex justify-content-around align-items-center nav-bar">
                <Link to='/' className="fs-2 title">Yassine</Link>
                <ul
                    className="nav justify-content-around align-items-center p-2 m-2"
                >
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/achievements'>Achievements</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            :
            <Navbar className="menu paths" expand="lg">
                <Container>
                    <Navbar.Brand className="text-white fs-1 title"><Link to='/' className="title">Yassine</Link></Navbar.Brand>
                    <Navbar.Toggle  className="toggle-menu" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link className="nav-link" to='/'>Home</Link>
                        <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                        <Link className="nav-link" to='/achievements'>Achievements</Link>
                        <Link className="nav-link" to='/about'>About</Link>
                        <Link className="nav-link" to='/contact'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        }
    </>
}