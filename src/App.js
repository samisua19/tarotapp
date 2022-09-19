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
      <NavBarComponent titleButton={ window.location.href.includes("/tableAppoiment") ? 'Inicio' : 'Ingresar'}/>
      <Routes>
        <Route path='/tarotapp' element={<Home/>}/>
        <Route path='/tarotapp/tableAppoiment' element={<TableAppoiment/>}/>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
