import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DeliveryDetails from './component/DeliveryDetails'
import ShipmentDetails from './component/ShipmentDetail'
import Finish from './component/Finish'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState()

  return (

    <BrowserRouter>
            <Routes>
                <Route path="/" element={<DeliveryDetails useDetails={data} getDetails={(value) => setData(value)} />}></Route>
                <Route path="/ShipmentDetail" element={<ShipmentDetails />}></Route>
                <Route path="/Finish" element={<Finish />}></Route>
            </Routes>
        </BrowserRouter>

  );
}

export default App;

