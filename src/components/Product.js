import React, { useState } from 'react'
import { Card, Button, Alert, Modal, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const ProductComponent = (props) => {
    const [errorMsg, setErrorMsg] = useState("")
    const user = props.user;
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")


    // modal start
    const [show, setShow] = useState(false);

    const handleClose = async (e) => {

        const token = localStorage.getItem("token")

        if (!name || !price || !token) {
            console.log("Need more details");
            return;
        }

        const data = await fetch("http://localhost:5000/product", {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, token, id:e })
        })
        const res = await data.json()
        if (res.status === 200) {
            console.log("update thanh cong")
        } else {
            console.log("res", res.status)
        }
        
        setShow(false);

    }
    const handleShow = () => setShow(true);

    // modal end

    const postItemToCart = (data) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        for (let index = 0; index < cart.length; index++) {
            if (cart[index]._id === data._id) {
                setErrorMsg("Product already in the cart, you can change the quantity there")
                return
            }
        }
        cart.push(data)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    return (
        <Card style={{ maxWidth: '20rem' }} className="card">
            <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={props.data.img}
            />

            <Card.Body className="breed-name">
                <Link
                    to="/"
                    style={{ color: "#d44f4e", fontWeight: "bolder" }}
                >
                    {props.data.name}
                </Link>
                <Card.Text> <span>Giá: </span>
                    <NumberFormat value={props.data.price} displayType={'text'} thousandSeparator={true} />
                    <span> VND</span>
                </Card.Text>
                <Button variant="primary" onClick={() => postItemToCart(props.data)}>
                    Mua hàng
                </Button>
                {user && user.role === "admin" ?
                    <div>
                        <Button variant="primary" onClick={handleShow} >
                            Update
                        </Button>
                        <Modal show={show} onHide={handleClose} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="container">

                                    <Form.Group>
                                        <img src={props.data.img} alt="product" width="100px" />

                                        <Form.Label>Tên sản phẩm:</Form.Label>
                                        <Form.Control type="text" placeholder={props.data.name} onChange={(e) => setName(e.target.value)} />

                                        <Form.Label>Giá:</Form.Label>
                                        <Form.Control type="number" placeholder={props.data.price} onChange={(e) => setPrice(e.target.value)} />

                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                            </Button>
                                <Button variant="primary" onClick={() => handleClose(props.data._id)}>
                                    Save Changes
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    :
                    null
                }
                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}
            </Card.Body>
        </Card>
    );
};
export default ProductComponent;