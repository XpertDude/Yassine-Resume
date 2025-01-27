import { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import NavBar from './Layout'
function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false); // To handle errors
    const formRef = useRef();
    console.log(document.querySelectorAll('.input').value);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
const resetForm = () => {
    setFormData({
        name: "",
        email: "",
        message: "",
    });
    document.querySelectorAll('.input')[0].value = "";
    document.querySelectorAll('.input')[1].value = "";
    document.querySelectorAll('.input')[2].value = "";
};
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            //e.stopPropagation();
        } else {
            emailjs.sendForm(
                    "service_lo0s2rg", // Replace with your service ID
                    "template_5ksjnna", // Replace with your template ID
                    formRef.current,
                    "9ECYgoX2aOx9R2vRp" // Replace with your user ID
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setShowAlert(true); // Show success alert
                        resetForm();
                    },
                    (error) => {
                        console.log(error.text);
                        setErrorAlert(true); // Show error alert
                    }
                );
        }
        setValidated(true);
    };

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h1>Contact Us</h1>
                {/* Success Alert */}
                {showAlert && (
                    <Alert
                        variant="success"
                        onClose={() => setShowAlert(false)}
                        dismissible
                    >
                        Your message has been sent successfully!
                    </Alert>
                )}

                <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            className="input"
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter your name.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Email Field */}
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="input"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* Message Field */}
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            className="resize input"
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default ContactForm;
