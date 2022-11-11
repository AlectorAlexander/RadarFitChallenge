/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Table } from 'react-bootstrap';

function ProductsAdmin({ Prods, setProds }) {
    /*  const { setDetails } = useContext(Context); */

    const [search, setSearch] = useState('');
    const [data, _setData] = useState(Prods);

    useEffect(() => {
        if (search.length > 0) {
            const value = search.toLowerCase();
            const searchFilter = data
                .filter((prod) => (prod.produto.toLowerCase()).includes(value));
    
            setProds(searchFilter);
        } else { setProds(data); }
    }, [search]);


    /*     const pageChangeToDetails = (item, _id) => {
        setDetails(item);
        history(`/products/details/${_id}`);
    }; */

    return (
        <div className="Products d-flex flex-wrap justify-content-center container-fluid">
            <Form.Control
                placeholder="Pesquise por nome do Produto"
                value={ search }
                className='w-25 m-3'
                onChange={({target}) => setSearch(target.value)}
                type="email"
            />
            <Table className="mt-5">
               
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {Prods && Prods.map((item, i) => {
                        const { _id, produto, valor, url_image } = item;
                        const image = (<img 
                            src={ url_image }
                            className='min-thumb' 
                            alt={ produto } /> );
                        return (
                            <tr key={i}>
                                <td>{_id}</td>
                                <td>{ produto }</td>
                                <td>{ valor.toFixed(2,2).replace('.', ',') }</td>
                                <td>{ image }</td>
                            </tr>
                        );
                    })}
                </tbody>

            </Table>
        </div>
    );
}

ProductsAdmin.propTypes = {
    Prods: PropTypes.shape().isRequired,
    setProds: PropTypes.shape().isRequired,
};
  

export default ProductsAdmin;