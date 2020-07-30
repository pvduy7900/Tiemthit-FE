import React, { useState } from 'react'
import { Navbar, Nav, DropdownButton, Dropdown, Button, Form, FormControl } from 'react-bootstrap'

const NavbarApp = (props) => {
    const [nameProduct, setNameProduct] = useState("")

    const user = props.user;
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const sendProductName = (e) => {
        e.preventDefault();
        props.sendProductName(nameProduct);
    }
    const logOut = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        const res = await fetch(`http://localhost:5000/auth/logout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: token }),
        });
        if (res.status === 200) {
            localStorage.removeItem("token");
            localStorage.removeItem("cart");

            window.location.replace("/")
        } else {
            return
        }
    };

    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="home">Tiệm thịt</Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="home">Trang chủ</Nav.Link>
                    <Nav.Link href="price">Bảng giá</Nav.Link>
                    {user && user.role === "admin" ?
                        <Nav.Link href="createNewProduct">Create new products</Nav.Link>
                        :
                        null
                    }
                </Nav>

                <Nav className="ml-auto">

                    {user && user.name ?
                        <DropdownButton title={user.name} id="bg-vertical-dropdown-1">
                            <Dropdown.Item onClick={(e) => logOut(e)}>Log out</Dropdown.Item>
                        </DropdownButton>
                        :
                        <Nav.Link id="bg-vertical-dropdown-1" href="login">Tài khoản</Nav.Link>}
                </Nav>

                <Button variant="outline-primary"> <Nav.Link href="signup">Sign up</Nav.Link></Button>

                <Button variant="outline-primary"> <Nav.Link href="cart"> Giỏ hàng </Nav.Link></Button>
                <span class='badge badge-warning' id='lblCartCount'> {props.quan} </span>
                <Form inline onSubmit={sendProductName}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setNameProduct(e.target.value)} />
                    <Button variant="outline-primary">Tìm kiếm</Button>
                </Form>

            </Navbar>
        </div>
    )
}
export default NavbarApp