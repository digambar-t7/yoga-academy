import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const Update = (props) => {
    const submit = () => {
        props.onHide();
        console.log("submitted")
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextBalance">
                        <Form.Label column sm="4">
                            Name
                        </Form.Label>
                        <Col sm="8">
                            {/* <Form.Control type="text" plaintext readOnly value={`$${client.bal}`} /> */}
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                            Email
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="email" defaultValue="email@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPin">
                        <Form.Label column sm="4">
                            Fees paid for
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type='text' defaultValue="December" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Batch
                        </Form.Label>
                        <Col sm="8">
                            <Form.Select>
                                <option>6-7AM</option>
                                <option>7-8AM</option>
                                <option>8-9AM</option>
                                <option>5-6PM</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={submit}>Pay Fees</Button>
                <Button onClick={submit}>Update</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Update