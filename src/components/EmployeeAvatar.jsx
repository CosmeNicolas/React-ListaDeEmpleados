import { Image } from 'react-bootstrap';
import Avatar1 from '../assets/img/avataaars1.png'
import Employee from './Employee';

const EmployeeAvatar = ({ ListaDeEmpleados }) => {
  return (
    <div>
      <Image className='img' src={Avatar1} roundedCircle />
      <Employee ListaDeEmpleados={ListaDeEmpleados}/>
    </div>
  );
};

export default EmployeeAvatar;