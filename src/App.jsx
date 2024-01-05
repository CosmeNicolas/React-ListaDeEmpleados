import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from './Footer';

function App() {
  
  return (
    <>
    <Container fluid className='main'>
        <h1 className='text-center mt-5 text-light'>list of employeess</h1>
    </Container>
    <Footer/>
    </>
  )
}

export default App
