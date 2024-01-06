import { Image } from 'react-bootstrap';
import Avatar1 from '../assets/img/avataaars1.png'

const EmployeeAvatar = () => {
  return (
    <div>
      <Image className='img' src={Avatar1} roundedCircle />
    </div>
  );
};

export default EmployeeAvatar;