import { Row } from 'react-bootstrap';
import './App.css';
import { CardComponent, CarouselComponent, NavBarComponent } from './components';

function App() {
  return (
    <>
      <NavBarComponent titleButton='Ingresar'/>
      <div className="App-header" style={{justifyContent:'flex-start'}}>
        <div style={{textAlign:'center', margin:'10px'}}>
          <h1 style={{color:"#C1FE00"}}>Mejora tu relación</h1>
          <h3 style={{color:"#C1FE00"}}>Perfecciona tu tarot</h3>
          <h5 style={{color:"#C1FE00"}}>Maestro Espiritual Angel</h5>
        </div>
        <CarouselComponent style={{margin:'0px'}}/>
        <Row style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
          <CardComponent image = '/tarotCartas.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Lectura de cartas'></CardComponent>
          <CardComponent image = '/amarres.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Amarres'></CardComponent>
          <CardComponent image = '/tarotCartas.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Otros'></CardComponent>
        </Row>
      </div>
    </>
  );
}

export default App;
