import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {

    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER',
        'NOVEMBER', 'DECEMBER']

    const [member, setMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        contactno: '',
        gender: 'Male',
        city: '',
        batch: '6-7AM',
    })

    const [feeStatus, setFeeStatus] = useState(false)

    const handleMember = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    }
    const handlePayment = () => {
        setFeeStatus(!feeStatus);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerMember(member);
        console.log(member)
    }

    // Register Member API
    const registerMember = async (member) => {
        const response = await fetch('http://localhost:8080/api/v1/register', {
            method: "POST",
            body: member
        })
        const json = await response.json();
        console.log(json)
    }

    return (
        <Container className='my-3 px-5 w-75' >
            <h1 className='pt-3'>Join us...</h1>
            <Form>
                <Row className='my-3'>
                    <Col>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control placeholder="First name" value={member.firstName} name='firstName' onChange={handleMember} />
                    </Col>
                    <Col><Form.Label >Last Name</Form.Label>
                        <Form.Control placeholder="Last name" value={member.lastName} name='lastName' onChange={handleMember} />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Email</Form.Label>
                        <Form.Control type='email' value={member.email} placeholder="Email" name='email' onChange={handleMember} />
                    </Col>
                    <Col><Form.Label >Contact No</Form.Label>
                        <Form.Control type='tel' value={member.contactno} placeholder="Contact No" name='contactno' onChange={handleMember} />
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >Date of Birth</Form.Label>
                        <Form.Control type='date' value={member.dob} placeholder="Date of Birth" name='dob' onChange={handleMember} />
                    </Col>
                    <Col><Form.Label >Gender</Form.Label>
                        <Form.Select name='gender' value={member.gender} onChange={handleMember} >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to say</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='my-3'>
                    <Col><Form.Label >City</Form.Label>
                        <Form.Control name='city' value={member.city} placeholder="City" onChange={handleMember} />
                    </Col>
                    <Col><Form.Label >Batch</Form.Label>
                        <Form.Select defaultValue="choose" name='batch' value={member.batch} onChange={handleMember}>
                            <option>6-7AM</option>
                            <option>7-8AM</option>
                            <option>8-9AM</option>
                            <option>5-6PM</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='my-3' variant="primary" onClick={handlePayment} disabled={feeStatus}>
                            {feeStatus ? 'Fees Paid' : 'Pay Fees : 500'}
                        </Button>
                    </Col>
                    <Col>
                        <Button className='my-3' variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
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