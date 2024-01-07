import { Image } from 'react-bootstrap';
import Employee from './Employee';

const EmployeeAvatar = ({ ListaDeEmpleados }) => {
  return (
    <>
    {ListaDeEmpleados.map((empleado)=>
    <div key={empleado.id}>
        <Image className='img' src={`../components/data/${empleado.pic}`} roundedCircle />
        <Employee empleado={empleado} />
    </div>
      )}
    </>
  )
};

export default EmployeeAvatar;