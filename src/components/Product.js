import React from 'react'
import { Card, Button } from 'react-bootstrap'


const ProductComponent = (props) => {
    const count = 1;
    const postItemToCart = (data) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || []
        cart.push(data)
        localStorage.setItem("cart", JSON.stringify(cart))

        // nếu trong localstoreag đã có sãn cái cart nay thì báo rằng sản phẩm này đã có trong giỏ hàng và có thể điều chính số lượng trong đó
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
                    mua hàng
                    </Button>
            </Card.Body>
        </Card>
    );
};


export default ProductComponent;