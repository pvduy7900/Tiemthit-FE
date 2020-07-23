import React, { useState, useEffect } from 'react'
import { Navbar, Nav, DropdownButton, Dropdown, Button, Form, FormControl } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const NavbarApp = (props) => {
    let history = useHistory();
    const [nameProduct, setNameProduct] = useState("")
    const userName = props.userName;

    const sendProductName = (e) => {
        e.preventDefault();
        props.sendProductName(nameProduct);

    }

    const logOut = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        console.log("token", token)
        await fetch(`http://localhost:5000/auth/logout`, {
            token: token
        });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        props.onLogout();
        history.push("/home")
    };
    console.log(props)

    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="home">Tiệm thịt</Navbar.Brand>

                <Nav className="mr-auto">
                    <Nav.Link href="home">Trang chủ</Nav.Link>
                    <Nav.Link href="price">Bảng giá</Nav.Link>
                    <Nav.Link href="delicious">Món ngon</Nav.Link>
                </Nav>

                <Nav className="ml-auto">

                    {userName ?
                        <DropdownButton title={userName} id="bg-vertical-dropdown-1">
                            <Dropdown.Item onClick={(e) => logOut(e)}>Log out</Dropdown.Item>
                        </DropdownButton>
                        :
                        <Nav.Link id="bg-vertical-dropdown-1" href="login">Tài khoản</Nav.Link>}
                </Nav>

                <Button variant="outline-primary"> <Nav.Link href="signup">Sign up</Nav.Link></Button>
                <Button variant="outline-primary"> <Nav.Link href="cart"> Giỏ hàng </Nav.Link></Button>

                <Form inline onSubmit={sendProductName}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setNameProduct(e.target.value)} />
                    <Button variant="outline-primary">Tìm kiếm</Button>
                </Form>

            </Navbar>
        </div>
    )
}
export default NavbarApp