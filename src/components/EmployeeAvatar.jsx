import { Image } from 'react-bootstrap';
import Employee from './Employee';

const EmployeeAvatar = ({ ListaDeEmpleados }) => {
 
  return (
    <>
    {ListaDeEmpleados.map((empleado)=>
      <div className='fondo-card d-flex my-1 rounded-1 justify-content-center ' key={empleado.id}>
        <div>
        <Image className='img mt-2' src={empleado.pic} roundedCircle />
        </div>
        <div className='p-1'>
        <Employee empleado={empleado} />
        </div>
    </div>
      )}
    </>
  )
};

export default EmployeeAvatar;