/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsAdmin from '../components/adminProducts';
import { getProducts } from '../services/BDsRequests';

function AdminProducts() {
    const [Prods, setProds] = useState(null);

    const request = async () => {
        const response = await getProducts();
        return setProds(response.data);
    };

    useEffect(() => {
        request();
    }, []);

    return (
        <div className="AdminProducts">
            <Header />
            {Prods && <ProductsAdmin setProds={ setProds } Prods={ Prods } />}
            <Footer />
        </div>
    );
}

export default AdminProducts;