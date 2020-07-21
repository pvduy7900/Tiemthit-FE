import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'
import { Button, Nav } from 'react-bootstrap'


export default function Cart() {
    const [cartList, setCartList] = useState([])

    const getCartList = () => {
        const cartListFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || []
        setCartList(cartListFromLocalStorage)
    }
    useEffect(() => {
        getCartList()
    }, [])

    return (
        <div>
            <h2>Giỏ hàng</h2>
            {cartList.map((e) => {
                return (
                    <Cartitem data={e} key={e._id} />
                );
            })}
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <Button variant="outline-primary"> <Nav.Link href="home">Quay lại cửa hàng</Nav.Link></Button>
                <div className="d-flex">
                    <div>
                        {/* Tổng tiền :{cartList.reduce(previousScore, currentScore, index)=> previousScore.+currentScore} */}
                    </div>
                    <Button variant="outline-primary"> <Nav.Link href="home">Thanh toán</Nav.Link></Button>
                </div>
            </div>

        </div>
    )
}
