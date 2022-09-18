import './App.css';
import { HomeComponent, NavBarComponent, TableAppoimentComponent } from './components';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

//Rutas a componentes
const Home = () => <HomeComponent/>
const TableAppoiment = () => <TableAppoimentComponent/>



function App() {
  return (
    <div>
      <NavBarComponent titleButton={ window.location.href.includes("/tarotapp") ? 'Ingresar' : 'Inicio'}/>
      <Routes>
        <Route path='/tarotapp' element={<Home/>}/>
        <Route path='/tableAppoiment' element={<TableAppoiment/>}/>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
