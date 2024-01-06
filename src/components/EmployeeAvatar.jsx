import { Image } from 'react-bootstrap';
/* import Avatar1 from '../assets/img/avataaars1.png' */
import Employee from './Employee';

const EmployeeAvatar = ({empleados}) => {
  return (
    <div>
      <Image className='img' src={empleados.pic} roundedCircle />
      <Employee/>
    </div>
  );
};

export default EmployeeAvatar;