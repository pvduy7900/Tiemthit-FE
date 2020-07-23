import React, { useEffect, useState } from 'react'
import "./homepage.css";
import { Row, Col, Jumbotron, Button, Nav } from 'react-bootstrap'
import ProductComponent from './Product'
import Footer from "./Footer"

export default function Homepage(props) {
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
    const getProductByName = name => {
        const filter = productList.filter(e => e.name.includes(name))
        setDisplayList(filter)
    }
    useEffect(()=>{
        getProductByName(props.productName)
    }, [props.nameProduct])


    useEffect(() => {
        getCategories()
        getProduct()

    }, [])

    return (
        <div>
            {/* jumbotron here */}
            <Jumbotron className="jumbo text-center bgImage">
               
                    <h1>Chào mừng</h1>
                    <h2>
                        Cho bữa ăn của bạn trở nên phong phú với nguồn nguyên liệu sạch và giá cả vừa phải.
                </h2>
                    <p>
                        <Button variant="outline-primary"><Nav.Link href="login">Đăng nhập để được giảm ngay 15% hóa đơn</Nav.Link></Button>
                    </p>
            </Jumbotron>
                {/* ket thuc jumbotron */}
                
                <div className="container">
                    <div className="danhmuc d-flex">
                        {categoryList.map((e) => <h5 onClick={() => {

                            getProductByCategory(e._id)

                        }} style={{ marginLeft: "30px" }}>{e.name} | </h5>)}
                    </div>

                    <div>
                        <h4 className="sanphamphobien">Sản phẩm</h4>
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


