import NavBar from './Layout'
import './styles.css'
import { Link } from 'react-router-dom'
import { Card, Button, Badge } from "react-bootstrap";
export default function Achievements(){
    return <>
    <NavBar />
    <section className='p-3 d-flex flex-column align-items-center gap-4'>
        <h1>Achievements and Certificates</h1>
        <Card className='text-center w-75'>
            <Card.Header >
            Web Design Certificate
            </Card.Header>
            <Card.Body className='d-flex flex-column gap-1'>
                <p className='text-primary'>Certificate Name: <span className='text-black'>Responsive Web Design Certificate.</span></p>
                <p className='text-primary'>Issuer: <span className='text-black'>freeCodeCamp</span></p>
                <p className='text-primary'>Completion Date: <span className='text-black'>June 1, 2024</span></p>
                <p className='text-primary'>View Link: <span className='text-black'><Link to='https://www.freecodecamp.org/certification/XpertGenius/responsive-web-design' target='_blank'><Badge className='hover'>View</Badge></Link></span></p>
            </Card.Body>
        </Card>
        <Card className='text-center w-75'>
            <Card.Header >
            JavaScript certificate
            </Card.Header>
            <Card.Body className='d-flex flex-column gap-1'>
                <p className='text-primary'>Certificate Name: <span className='text-black'>
                JavaScript Algorithms and Data Structures Certification</span></p>
                <p className='text-primary'>Issuer: <span className='text-black'>freeCodeCamp</span></p>
                <p className='text-primary'>Completion Date: <span className='text-black'>December, 10 2024</span></p>
                <p className='text-primary'>View Link: <span className='text-black'><Link to='https://www.freecodecamp.org/certification/XpertGenius/javascript-algorithms-and-data-structures-v8' target='_blank'><Badge>View</Badge></Link></span></p>
            </Card.Body>
        </Card>
        <Link to='https://drive.google.com/file/d/1MA4cYbiFh7tdwJNrlnhwqOnWEoafsSRp/view?usp=sharing' className='text-white' target='_blank'><Button variant='primary'>Download my resume</Button></Link>
    </section>
    </>
}