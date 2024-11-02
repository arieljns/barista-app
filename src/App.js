import './App.css';
import BaristaApp from './home/Home';
import OrderDetails from './recipeCreation/orderDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './context/orderContext';
import OrderHistory from './orderHistory/OrderHistory';
import InitialBaristaApp from './initial page/InitialBaristaApp';
function App() {
  return (
    <OrderProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<InitialBaristaApp />} />
            <Route path="/request/:id" element={<OrderDetails />} />
            <Route path='/history' element={<OrderHistory />} />
            <Route path='/order' element={<BaristaApp />} />
          </Routes>
        </Router>

      </div>
    </OrderProvider>
  );
}

export default App;
