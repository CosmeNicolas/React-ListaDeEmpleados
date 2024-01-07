const Employee = ({empleado}) => {
  return (
    <>
      <div key={empleado.id}>
      <h4>{empleado.title}</h4>
      <h5>{empleado.fullName}</h5>
      <p className='text-light bg bg-black'>
        {empleado.department}
      </p>
    </div>
    </>
  );
};

export default Employee;