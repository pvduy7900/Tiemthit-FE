import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'


const ProductComponent = (props) => {
    const [errorMsg, setErrorMsg] = useState("")
    const count = 1;
    const postItemToCart = (data) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        // nếu trong localstoreag đã có sãn cái cart nay thì báo rằng sản phẩm này đã có trong giỏ hàng và có thể điều chính số lượng trong đó
        // test whether cart contains the product already
        for (let index = 0; index < cart.length; index++) {
            if (cart[index]._id === data._id) {
                // if yes -> alert: Product already in the cart, you can change the quantity there
                setErrorMsg("Product already in the cart, you can change the quantity there")
                return
            }
        }
        // if no -> add to cart
        cart.push(data)
        localStorage.setItem("cart", JSON.stringify(cart))

        console.log(cart)
    }

    return (
        <Card style={{ maxWidth: '20rem' }} className="card">
            <Card.Img
                variant="top"
                resizeMode='cover'
                src={props.data.img}
                alt="something"
                className="card-img"
            />

            <Card.Body>
                <Card.Text className="country">{props.data.name}</Card.Text>
                <Card.Text>
                    Giá: {props.data.price}
                </Card.Text>
                <Button variant="primary" onClick={() => postItemToCart(props.data)}>
                    Mua hàng
                    </Button>
                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}
                {/* <Button variant="primary" onClick={() => showProductDetails(props.data)}    >
                    Chi tiết
                    </Button> */}
            </Card.Body>
        </Card>
    );
};


export default ProductComponent;