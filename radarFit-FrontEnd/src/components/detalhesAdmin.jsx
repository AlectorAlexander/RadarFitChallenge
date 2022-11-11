/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Modal } from 'react-bootstrap';

function ModalAdminDetails({ show, setShow, Item }) {
    const [Produto, setProduto] = useState('');
    const [UrlImage, setUrlImage] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Valor, setValor] = useState('');

    useEffect(() => {
        console.log(Item);
        if (Item) {
            setProduto(Item.produto);
            setUrlImage(Item.url_image);
            setDescricao(Item.descricao);
            setValor(Item.valor);
        }
    }, [Item]);

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <img className="thumb-admin" src={UrlImage} alt={ Produto } />
            </Modal.Header>
            <Modal.Body>
                <FormGroup>
                    <Form.Control
                        type="text"
                        value={ Produto }
                        onChange={ ({target}) => setProduto(target.value) }
                    />
               
                    <Form.Control
                        type="number"
                        value={ Valor }
                        onChange={ ({target}) => setValor(target.value) }
                    />
                    <Form.Control
                        type="text"
                        value={ Descricao }
                        onChange={ ({target}) => setDescricao(target.value) }
                    />
                    <Form.Control
                        type="text"
                        value={ UrlImage }
                        onChange={ ({target}) => setUrlImage(target.value) }
                    />
          
    
                </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setShow(false)}>
                        Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ModalAdminDetails.propTypes = {
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    Item: PropTypes.shape().isRequired,
};

export default ModalAdminDetails;
