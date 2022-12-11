import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    return (
        <Container className='my-3 px-5 w-75' >
            <h1 className='pt-3'>Join us...</h1>
            <Form>
                <Row className='my-3'>
                    <Col>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col><Form.Label >Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Email</Form.Label>
                        <Form.Control type='email' placeholder="Email" />
                    </Col>
                    <Col><Form.Label >Contact No</Form.Label>
                        <Form.Control type='tel' placeholder="Contact No" />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Date of Birth</Form.Label>
                        <Form.Control type='date' placeholder="Date of Birth" />
                    </Col>
                    <Col><Form.Label >Gender</Form.Label>
                        <Form.Select placehoder="Gender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >City</Form.Label>
                        <Form.Control placeholder="City" />
                    </Col>
                    <Col><Form.Label >Batch</Form.Label>
                        <Form.Select placehoder="Gender">
                            <option>6-7AM</option>
                            <option>7-8AM</option>
                            <option>8-9AM</option>
                            <option>5-6PM</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Button className='my-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Register;

// @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private long id;
//     @Embedded
//     private Name name;   ddfa
//     private String email;faasfa
//     private LocalDate dob;dasafa
//     private LocalDate doj;fafafas
//     private LocalDate dateOfChange;fafafa
//     private String contactno;fafafa
//     private String paidMonth;affaa
//     private String gender;fafa
//     private String city;safafa
//     private String currBatch; dsfsa
//     private String nextBatch;