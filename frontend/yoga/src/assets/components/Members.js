import React from 'react'
import Member from './Member'
import Container from 'react-bootstrap/Container';

const Members = () => {
    return (
        <Container  >
            <h1 className='text-center pt-3'>Healthy Members of Yoga Academy</h1>
            <div className='row'>
                {/* {clients.map((client) => {
                    return <div className='col-md-4 my-3' key={client.acc}>
                        <Member className="col-md-4" />
                    </div>
                })} */}
                <Member />
            </div>
        </Container >
    )
}

export default Members