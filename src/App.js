import { Row } from 'react-bootstrap';
import './App.css';
import { CardComponent, CarouselComponent, NavBarComponent } from './components';

function App() {
  return (
    <>
      <NavBarComponent titleButton='Ingresar'/>
      <div className="App-header" style={{justifyContent:'flex-start'}}>
        <CarouselComponent style={{margin:'0px'}}/>
        <div>
          <Row style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
            <CardComponent image = '/tarotCartas.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Lectura de cartas'></CardComponent>
            <CardComponent image = '/amarres.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Amarres'></CardComponent>
            <CardComponent image = '/tarotCartas.jpg' description = 'Breve descripción de lo que se realiza.' titleButton = 'Ingresar' title='Otros'></CardComponent>
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
