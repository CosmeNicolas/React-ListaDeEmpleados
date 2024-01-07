import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import ContainerList from './components/ContainerList';
import imgList from './assets/img/img-list.png'



function App() {
  
  return (
    <>
    <Container fluid className='main mb-3'>
      <div className='text-center'>
       <img className='img-list' src={imgList} alt=""  />
      </div>
        <ContainerList />
    </Container>
    <Footer/>
    </>
  )
}

export default App
