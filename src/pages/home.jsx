import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    return (
        <>
    <div
            className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: 400 }}
        >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Group 7's AMAZING app</h1>
                        <h2 className='mb-3'>This is the front page of Group 7's AMAZING app</h2>
                       
                    </div>
                </div>
            </div>
        </div>
    
        <Container fluid>
            <Row>
                <Col>

                    <h1>Front page</h1>

                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Main;