import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import months from './Months';
import Update from './Update';

const Member = (props) => {
    const { firstName, lastName, batch, email, paidMonth } = props.member;
    const [modalShow, setModalShow] = useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{firstName + ' ' + lastName}</Card.Title>
                <hr />
                <Card.Text>
                    <p>Batch : {batch}</p>
                    <p>Fee Status : {paidMonth == months[new Date().getMonth()] ? 'Paid' : 'Not Paid'}</p>
                    <p>Email : {email}</p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="info" onClick={() => { setModalShow(true) }} size='sm'>Update</Button>
                </div>
            </Card.Body>
            <Update
                member={member}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Card>
    )
}

export default Member