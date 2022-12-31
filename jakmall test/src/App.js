import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DeliveryDetails from './component/DeliveryDetails'
import ShipmentDetails from './component/ShipmentDetail'
import Finish from './component/Finish'

const App = () => {
  return (

    <BrowserRouter>
            <Routes>
                <Route path="/" element={<DeliveryDetails />}></Route>
                <Route path="/ShipmentDetail" element={<ShipmentDetails />}></Route>
                <Route path="/Finish" element={<Finish />}></Route>
            </Routes>
        </BrowserRouter>

  );
}

export default App;

