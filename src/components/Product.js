import React, { useState } from 'react'
import { Card, Button, Alert, Modal, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const ProductComponent = (props) => {
    const [errorMsg, setErrorMsg] = useState("")
    const user = props.user;
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const token = localStorage.getItem("token")

    // modal start
    const [show, setShow] = useState(false);
    const handleClose1 = () => {
        setShow(false);
    }
    const handleClose = async (e) => {

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
            body: JSON.stringify({ name, price, token, id: e })
        })
        const res = await data.json() // this is new product list from now
        if (res.status === 200) {
            console.log("update thanh cong")
        } else {
            console.log("res", res.status)
        }
        props.getProduct(res.data)
        setShow(false);

    }
    const handleShow = () => setShow(true);

    // modal end

    const Delete = async (e) => {

        const data = await fetch("http://localhost:5000/product", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, id: e })
        })

        const res = await data.json()
        if (res.status === 200) {
            console.log("delete thanh cong")
        } else {
            console.log("res", res.status)
        }
        console.log("delete", res.data)
        props.getProduct()
        setShow(false);
    }

    const postItemToCart = (data) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        for (let index = 0; index < cart.length; index++) {
            if (cart[index]._id === data._id) {
                setErrorMsg("Product already in the cart, you can change the quantity there")
                return
            }
        }
        data.count = 1;
        cart.push(data)
        localStorage.setItem("cart", JSON.stringify(cart))
        props.getQuantity(cart.length)

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
                        <Modal show={show} onHide={handleClose1} animation={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Modal</Modal.Title>
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
                                <Button variant="secondary" onClick={handleClose1}>
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
                {user && user.role === "admin" ?
                    <Button variant="primary" onClick={() => Delete(props.data._id)}>
                        Delete
                </Button>
                    : null
                }
                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}
            </Card.Body>
        </Card>
    );
};
export default ProductComponent;