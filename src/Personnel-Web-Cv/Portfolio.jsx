import { useState } from "react";
import NavBar from "./Layout";
import './styles.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button } from 'react-bootstrap';
export default function Portfolio() {
    const portfolio = [
        {
            id: 1,
            title: 'Palindrome Checker Project',
            description: "The Palindrome Checker Project is a web application that allows users to input text and check whether it reads the same backward as forward. It's a simple yet engaging tool for learning about string manipulation and logic in JavaScript, with a clean interface to enhance the user experience.",
            image: 'https://i.ibb.co/5MgDqwC/Palindrome-Check.jpg',
            link: "https://xpertdude.github.io/Palindrome-Checker-Project/"
        },
        {
            id: 2,
            title: 'Technical-Documentation-Page',
            description: "The Technical Documentation Page is a comprehensive guide introducing JavaScript, one of the most popular programming languages for web development. This project features a clean and responsive design with a side navigation menu for easy access to different sections, such as JavaScript basics, functions, arrays, and objects. The documentation is beginner-friendly and provides clear explanations, making it a great resource for anyone starting their JavaScript journey.",
            image: 'https://i.ibb.co/8DFYhS1/xpertdude-github-io-Technical-Documentation-Page-1.jpg',
            link: 'https://xpertdude.github.io/Technical-Documentation-Page/'
        },
        {
            id: 3,
            title: 'Books Library',
            description: "The Books Library project is a simple and interactive web application that allows users to manage their personal book collection. You can easily add new books, edit details, or remove books from your virtual shelf. With a clean interface and smooth functionality, this project is perfect for organizing and keeping track of your favorite reads.",
            image: 'https://i.ibb.co/7GFT1wr/Book-library.jpg',
            link: 'https://xpertdude.github.io/Book-Library/'
        },
        {
            id: 4,
            title: 'Pets Shop',
            description: "The Pets Shop project is a small, static web design showcasing a beautifully crafted online store for pet products. It features sections for pet food, toys, accessories, and more, with a clean and visually appealing layout. Perfect for displaying products and creating a delightful shopping experience for pet lovers.",
            image: 'https://i.ibb.co/8D8R0NB/Pets-shop.jpg',
            link: 'https://xpertdude.github.io/Pets-Shop/'
        },
        {
            id: 5,
            title: 'Task Management Application',
            description: "The Task Management Application is a dynamic web project designed to help users efficiently manage their tasks. It allows you to create, edit, and delete tasks, ensuring that your to-do list stays organized. The application also includes notification features to remind you of important deadlines, making it an essential tool for staying productive and on track.",
            image: 'https://i.ibb.co/bQSB20k/Task-Management-Application-09-26-2024-08-05-PM.png',
            link: 'https://xpertdude.github.io/Task-Management-Application/'
        },
        {
            id: 6,
            title: 'Form validation',
            description: "The Form Validation project is a simple yet effective web application that ensures user input meets specific criteria. It validates form fields in real time, catches errors, and displays clear messages directly under each input field. This project is perfect for improving user experience and maintaining data integrity.",
            image: 'https://i.ibb.co/JnJfr8R/Form-validation-01-24-2025-10-36-AM.png',
            link: 'https://xpertdude.github.io/Form-validation/'
        },
        {
            id: 7,
            title: 'Weather app',
            description: "The Weather App is a significant step toward advanced web development. This project allows users to search for their city or country and view the current weather conditions, along with a detailed 7-day forecast. With an intuitive interface and reliable data, it’s a perfect tool for staying informed about the weather while showcasing your development skills.",
            image: 'https://i.ibb.co/frCFb6V/Weather-App-01-24-2025-10-39-AM.png',
            link: 'https://xpertdude.github.io/weather-app'
        },
        {
            id: 8,
            title: 'Store',
            description: "The Store project is an advanced web application that simulates a CMS-like shopping experience. Each product dynamically generates its own page, providing a seamless browsing experience. Using fetch, it retrieves fake data to display products in a realistic and interactive store environment. This project demonstrates advanced development techniques and takes a big leap beyond simpler projects like the Pets Shop, showcasing dynamic content handling and improved functionality.",
            image: 'https://i.ibb.co/tDx0v9b/Store-01-24-2025-10-59-AM.png',
            link: 'https://xpertdude.github.io/Store'
        },
        {
            id: 9,
            title: 'Web Resume',
            description: "A professional web CV showcasing my portfolio, certifications, and contact information. Visitors can explore my completed projects, view earned certifications, and easily reach out to me through the integrated contact form. Fully responsive and designed for a seamless user experience on any device.",
            image: 'https://i.ibb.co/GMkSSmn/Personal-CV-01-28-2025-02-32-PM.png',
            link: 'https://xpertdude.github.io/Personal-web-cv/'
        },
        {
            id: 10,
            title: 'Pokémon-Search-App',
            description: "A Pokémon Search App that allows users to search for any Pokémon by name or ID. It fetches data from the PokéAPI and displays the Pokémon’s image, stats, type, and abilities in a clean, user-friendly interface. Perfect for quickly looking up Pokémon details!",
            image: 'https://i.ibb.co/DDRzpVfS/Pok-mon-Search-App-01-29-2025-03-28-PM.png',
            link: 'https://xpertdude.github.io/Pokemon-Search-App/'
        }
    ]
    const [modalProject, setModalProject] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const DisplayProjectModal = () => {
        return (
            <>
                <Modal show={show} onHide={handleClose} centered>
                    <img src={modalProject.image} alt="" />
                    <Modal.Header closeButton>
                        <Modal.Title className="text-black">{modalProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-black">
                    {modalProject.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );

    }
    return <>
        <NavBar />
        <h1 className="mb-4 text-center">Portfolio</h1>
        <section className="container-fluid gap-5 row modal-container">
            {handleShow && <DisplayProjectModal />}
            {portfolio.length > 0 &&
                portfolio.map(item => (
                    <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-4 cart">
                        <div className="card">
                            <img width={200} height={200} src={item.image} alt={item.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description.slice(0, 60)}... <button className="text-primary read-more" onClick={() => {
                                    setModalProject(item)
                                    handleShow()
                                }}>Read More</button></p>
                                <Link to={item.link} target="_blank" className="btn btn-success link">View Project</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    </>
}