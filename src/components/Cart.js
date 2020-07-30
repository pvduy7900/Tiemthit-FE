import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'
import { Button, Nav, Alert } from 'react-bootstrap'


export default function Cart() {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState("")
    const [show, setShow] = useState(false);

    const getCartList = () => {
        const cartListFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || []
        setCartList(cartListFromLocalStorage)
    }
    if (cartList) {
        console.log("arr here", cartList)

    }

    useEffect(() => {
        getCartList()
    }, [])

    useEffect(() => {
        setTotal(cartList.reduce((acc, el) => {
            return acc + el.price * el.count * 1
        }, 0))
    }, [cartList])

    return (
        <div className="cartSpacing">
            <div className="container cartHeight">
                <table id="cart" className="table table-hover table-condensed">
                    <h2>Giỏ hàng</h2>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">Sản phẩm</div>
                            <div className="col-2">Giá</div>
                            <div className="col-2">Số lượng</div>
                            <div className="col-2">
                                tổng
                            </div>
                            <div />
                        </div>
                    </div>
                    <hr />
                    <tbody>
                        {cartList.map((e) => {
                            return (
                                <Cartitem data={e} key={e._id} cartList={cartList} setCartList={setCartList} />
                            );
                        })}
                         <Alert show={show} variant={"dark"} dismissible onClose={() => setShow(false)}>
                                    Thành công
                                </Alert>
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <Button variant="outline-primary"> <Nav.Link href="home">Quay lại cửa hàng</Nav.Link></Button>
                            <div className="d-flex">
                                <div>
                                    {total}
                                </div>
                               
                                <Button variant="outline-primary" onClick={() => setShow(true)}>

                                <Nav.Link href="home">Thanh toán</Nav.Link>
                                </Button>
                               
                                
                            </div>
                        </div>
                    </tbody>
                </table>
            </div >
        </div >
    )
}
