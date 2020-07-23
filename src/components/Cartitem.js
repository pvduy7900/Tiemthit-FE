import React, { useState } from 'react'

const Cartitem = (props) => {
 
    const [countItem,setCountItem] = useState([1])
    const totalItemPrice = countItem * props.data.price
    
    return (

        <div>
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-6">
                            sản phẩm
                            </div>
                        <div className="col-2">giá</div>
                        <div className="col-2">số lượng</div>
                        <div className="col-2">tổng</div>
                    </div>
                    <div className="row">
                        <div className="col-6 sanpham">
                            <img src={props.data.img} width="100px" />
                            <p>{props.data.name}</p>

                        </div>

                        <div className="col-2">{props.data.price}</div>
                        <div className="col-2">
                            <input
                                type="number"
                                className="form-control text-center"
                                defaultValue="1"
                                onChange={(e) => setCountItem(e.target.value)}
                            />
                        </div>
                        <div className="col-2">{totalItemPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cartitem;

