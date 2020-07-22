import React, { useEffect, useState } from 'react'
import "./homepage.css";
import { Row, Col } from 'react-bootstrap'
import ProductComponent from './Product'
import Footer from "./Footer"

export default function Homepage() {
    const [productList, setProductList] = useState([])
    const [displayList, setDisplayList] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/product');
        const product = await data.json();
        console.log(product)
        setProductList(product.data)
        setDisplayList(product.data)
    }
    const getCategories = async () => {
        const data = await fetch('http://localhost:5000/category');
        const category = await data.json();
        console.log(category)
        setCategoryList(category.data)
    }
    // tối xem lại
    const getProductByCategory = async (categoryID) => {
        const filterProductList = productList.filter(item => item.categoryID === categoryID)
        setDisplayList(filterProductList)
    }
    useEffect(() => {
        getCategories()
        getProduct()

    }, [])

    return (
        <div>
            <div className="container">
                <div className="danhmuc d-flex">
                    {categoryList.map((e) => <h5 onClick={() => {

                        getProductByCategory(e._id)

                    }} style={{ marginLeft: "30px" }}>{e.name} | </h5>)}
                </div>

                <div>
                    <h4 className="sanphamphobien">Sản phẩm phổ biến</h4>
                    <Row>
                        {displayList.map((e) => {
                            return (
                                <Col lg={3}>
                                    <ProductComponent data={e} key={e._id} />
                                </Col>
                            );
                        })}
                    </Row>
                </div>

            </div>

            <div>
                <Footer bgColor="black" author="Duy" />
            </div>

        </div>
    )
}


