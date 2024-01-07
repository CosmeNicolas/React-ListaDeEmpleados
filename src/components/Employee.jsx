
const Employee = ({empleado}) => {
  return (
    <>
      <div className="text-light"  key={empleado.id}>
      <h4 className="text-center">{empleado.title}</h4>
        <h5 className="name text-center ">{empleado.fullName}</h5>
      <p className='name  text-center deparment '>
        {empleado.department}
      </p>
    </div>
    </>
  );
};

export default Employee;