import {Container} from 'react-bootstrap'
import {Image} from 'react-bootstrap';
import Avatar1 from '../assets/img/avataaars1.png'


const ContainerList = () => {
  return (
    <Container fluid >
      <div className='d-flex flex-column'>
        <div className='d-flex bg-light rounded-top-1'>
          <Image className='img' src={Avatar1} roundedCircle />
          <div>
          <h4>ceo</h4>
          <h5>nombre empleado</h5>
          <p className='text-light bg bg-black'>Marketing </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContainerList;