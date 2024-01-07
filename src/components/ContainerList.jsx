import {Container} from 'react-bootstrap'
import EmployeeAvatar from './EmployeeAvatar'
import ListaDeEmpleados from './data/ListaEmpleados';




const ContainerList = () => {
  return (
    <Container fluid>
          <EmployeeAvatar  ListaDeEmpleados={ListaDeEmpleados}/>
    </Container>
  );
};

export default ContainerList;