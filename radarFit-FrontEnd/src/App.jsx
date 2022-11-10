/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router';
import './App.css';
import Ofertas from './pages/Ofertas';
import ProductDetails from './pages/ProductsDetails';
import Cart from './pages/Cart';
import MeusPedidos from './pages/MeusPedidos';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Ofertas />}> </Route>
                <Route path="/products" element={<Ofertas />}> </Route>
                <Route path="/products/details/:id" element={<ProductDetails />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>
                <Route path="/pedidos" element={<MeusPedidos />}> </Route>
            </Routes>
        </div>
    );
}

export default App;
