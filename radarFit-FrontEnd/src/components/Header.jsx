/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Context from '../context/Context';

function Header() {

    const history = useNavigate();
    const { setPage } = useContext(Context);

    const Logout = () => {
        setPage('login');
        localStorage.clear();
        history('/');
    };
    return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/products">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/cart">Carrinho</Nav.Link>
                        <Nav.Link href="/pedidos">Meus Pedidos</Nav.Link>
                    </Nav>
                    <Button  onClick={ Logout }>Logout</Button>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;