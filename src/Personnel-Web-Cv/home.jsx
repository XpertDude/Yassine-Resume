import NavBar from './Layout'
import { Link } from 'react-router-dom'
export default function Home(){
    return <>
    <NavBar />
    <section className='container-fluid m-1'>
        <div className='row gap-5'>
            <div className='col'>
            <h1>Hello!</h1>
            <p>Am Yassine Aggoujil a web developer.</p>
            <Link to='/portfolio' className='btn btn-primary button'>See Portfolio</Link>
            </div>
            <div className="col"></div>
            <div className='col'>
        <div className='cover'>
        <img className='picture' src="https://i.ibb.co/c6NG7GC/Picsart-24-08-26-15-50-31-843.png" alt="image" border="0" />
        </div>
        </div>
        </div>
    </section>
    </>
}