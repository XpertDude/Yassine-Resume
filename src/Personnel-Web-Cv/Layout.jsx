import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
    return <>
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
                    <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </>
}