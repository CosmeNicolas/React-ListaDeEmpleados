import {Container} from 'react-bootstrap'
import EmployeeAvatar from './EmployeeAvatar';
import ListaEmpleados from './data/ListaEmpleados'



const ContainerList = () => {
  return (
    <Container fluid >
      <div className='d-flex flex-column'>
        <div className='d-flex bg-light rounded-top-1'>
          <EmployeeAvatar empleados={ListaEmpleados}/>
          </div>
        </div>
    </Container>
  );
};

export default ContainerList;