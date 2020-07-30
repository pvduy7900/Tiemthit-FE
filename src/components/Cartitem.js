import React, { useState } from 'react'

const Cartitem = (props) => {

    const [countItem, setCountItem] = useState([1])
    const totalItemPrice = countItem * props.data.price

    return (

        <div>
            {/* code cũ */}
            <div className="container">
                <div>
                    
                    <div className="row spaceFormat">
                        <div className="col-6 sanpham">
                            <img src={props.data.img} alt="product" width="100px" />
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
            {/* end code cũ */}

            {/* code mới */}
            {/* <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs">
                            <img
                                src={props.data.img}
                                alt="..."
                                className="img-responsive pixFormat"
                            />
                        </div>
                        <div className="col-sm-10">
                            <h4 className="cartText">{props.data.name}</h4>
                        </div>
                    </div>
                </td>
                
                <td data-th="Quantity">
                    <input
                        type="number"
                        className="form-control text-center"
                        value={1}
                        onChange={(e) => setCountItem(e.target.value)}
                    />
                </td>
            </tr> */}
            {/* end code mới */}
        </div>
    );
};


export default Cartitem;

