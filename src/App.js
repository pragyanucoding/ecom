import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import KishanDashbord from './pages/Iot/KishanDashbord';
import Mart from './pages/mart/Mart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Learn */}
        <Route path='learn/' element={<>learn</>}/>
        {/* Mart */}
        <Route path='mart/' element={<Mart/>}/>
        {/* Iot */}
        <Route path='/' element={<KishanDashbord/>}/>
        <Route path='iot/' element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
