import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './feedbackForm.css';

function FeedbackForm() {
    const [selected, setSelected] = useState(null);
    const [hasTechnicalIssue, setHasTechnicalIssue] = useState(false);

    const handleThumbClick = (thumb) => {
        setSelected(thumb);
    };

    const handleTechnicalIssueChange = (event) => {
        setHasTechnicalIssue(event.target.value === 'yes');
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Feedback Form</h1>
            <Form>
                <Form.Group>
                    <label>
                        <span className="required-field">
                            Would you recommend this resource?
                        </span>
                    </label>
                    <Row style={{ marginTop: 10 }}>
                        <Col xs="auto">
                            <Button
                                variant={selected === 'up' ? 'success' : 'secondary'}
                                onClick={() => handleThumbClick('up')}
                                className="me-2">
                                <FaThumbsUp />
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Button
                                variant={selected === 'down' ? 'danger' : 'secondary'}
                                onClick={() => handleThumbClick('down')}>
                                <FaThumbsDown />
                            </Button>
                        </Col>
                    </Row>
                    <br />
                </Form.Group>
                <p className="mb-4">
                    Please take a minute to fill out the rest of the feedback form. We greatly appreciate it as it will help us and other users find the best art resources!
                </p>
                <Form.Group>
                    <Form.Label>1. What did you use this resource for?</Form.Label>
                    <Form.Check label="Primary Teaching Materials" />
                    <Form.Check label="Supplemental Teaching Materials" />
                    <Form.Check label="Entertainment" />
                    <Form.Check label="Personal" className="form-check" />
                    <Form.Control placeholder="Other" className="mt-2" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>2. What did you like the most about this resource?</Form.Label>
                    <Form.Check label="Accessible" />
                    <Form.Check label="Engaging" />
                    <Form.Check label="Informational" />
                    <Form.Check label="Relevant" />
                    <Form.Control placeholder="Other" className="mt-2" />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>3. Did you have any technical issues? If yes, please explain.</Form.Label>
                    <Form.Check
                        type="radio"
                        label="No"
                        value="no"
                        name="technicalIssue"
                        onChange={handleTechnicalIssueChange}
                        checked={!hasTechnicalIssue}
                    />
                    <Form.Check
                        type="radio"
                        label="Yes"
                        value="yes"
                        name="technicalIssue"
                        onChange={handleTechnicalIssueChange}
                        checked={hasTechnicalIssue}
                    />
                    <Form.Control
                        placeholder="Yes, please explain"
                        className="mt-2"
                        as="textarea"
                        rows={3}
                        disabled={!hasTechnicalIssue}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Additional Comments:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

export default FeedbackForm;
