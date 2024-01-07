import { Image } from 'react-bootstrap';
import Employee from './Employee';

const EmployeeAvatar = ({ ListaDeEmpleados }) => {
 
  return (
    <>
    {ListaDeEmpleados.map((empleado)=>
    <div className='br bg-light' key={empleado.id}>
        <Image className='img' src={empleado.pic} roundedCircle />
        <Employee empleado={empleado} />
    </div>
      )}
    </>
  )
};

export default EmployeeAvatar;