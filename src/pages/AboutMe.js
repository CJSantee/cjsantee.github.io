// Bootstrap Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AboutMe() {
    return (
        <Row className="section justify-content-center" id="AboutMe">
            <Col md>
                <h2 className="text-primary">About Me</h2>
                <p>Hi! I'm Colin.</p>
                <p>I'm a creative and technically minded student inspired by software solutions with significant societal impact. Passionate about projects in web engineering, mobile applications, and full-stack development.</p>
                <Button variant="outline-primary" href="../assets/Santee-Resume-2022-PDF.pdf" download>Resume</Button>
            </Col>
            <Col md>
                <Row className="justify-content-center">
                    <div className="graphic" />
                </Row>
            </Col>
        </Row>
    );
}

export default AboutMe;