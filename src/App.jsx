import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import ContainerList from './components/ContainerList';


function App() {
  
  return (
    <>
    <Container fluid className='main'>
        <h1 className='text-center mt-5 text-light'>list of employeess</h1>
        <ContainerList/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
