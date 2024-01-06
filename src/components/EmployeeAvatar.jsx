import { Image } from 'react-bootstrap';
import Avatar1 from '../assets/img/avataaars1.png'
import Employee from './Employee';

const EmployeeAvatar = () => {
  return (
    <div>
      <Image className='img' src={Avatar1} roundedCircle />
      <Employee/>
    </div>
  );
};

export default EmployeeAvatar;