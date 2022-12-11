import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Update from './Update';

const Member = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Digambar Tupurwadi</Card.Title>
                <hr />
                <Card.Text>
                    <p>Batch : 5-6PM</p>
                    <p>Fee Status : Paid</p>
                    <p>Email : digambartu@gmail.com</p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="info" onClick={() => { setModalShow(true) }} size='sm'>Update</Button>
                </div>
            </Card.Body>
            <Update
                // member={member}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Card>
    )
}

export default Member