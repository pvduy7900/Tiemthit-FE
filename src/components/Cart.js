import React, { useState, useEffect } from 'react'
import Cartitem from './Cartitem'
import { Button, Nav } from 'react-bootstrap'


export default function Cart() {
    const [cartList, setCartList] = useState([])

    const getCartList = () => {
        const cartListFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || []
        setCartList(cartListFromLocalStorage)
    }
    if (cartList) {
        console.log(cartList)
    }
    useEffect(() => {
        getCartList()
    }, [])

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
                                <Cartitem data={e} key={e._id} />
                            );
                        })}
                        <div className="d-flex" style={{ justifyContent: "space-between" }}>
                            <Button variant="outline-primary"> <Nav.Link href="home">Quay lại cửa hàng</Nav.Link></Button>
                            <div className="d-flex">
                                <div>
                                    {/* {cartList.map((e) => e.totalItemPrice).reduce()} */}
                                </div>
                                <Button variant="outline-primary" onClick={() => <h4 class="alert-heading">Thành công</h4>}>
                                    <Nav.Link href="home">Thanh toán</Nav.Link>
                                </Button>
                            </div>
                        </div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
