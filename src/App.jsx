import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from './pages/payment/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
