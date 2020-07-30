import React, { useEffect, useState } from 'react'
import "./homepage.css";
import { Row, Col, Jumbotron, Button, Nav, Container } from 'react-bootstrap'
import ProductComponent from '../Product'
import Footer from "../Footer/Footer"

export default function Homepage(props) {
    const [productList, setProductList] = useState([])
    const [displayList, setDisplayList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const user = props.user

    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/product');
        const product = await data.json();
        setProductList(product.data)
        setDisplayList(product.data)
    }
    const getCategories = async () => {
        const data = await fetch('http://localhost:5000/category');
        const category = await data.json();
        setCategoryList(category.data)
    }
    // tối xem lại
    const getProductByCategory = (categoryID) => {
        const filterProductList = productList.filter(item => item.categoryID === categoryID)
        setDisplayList(filterProductList)
    }
    const getProductByName = name => {
        const filter = productList.filter(e => e.name.includes(name))
        setDisplayList(filter)
    }
    useEffect(() => {
        getProductByName(props.nameProduct)
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
                    Phục vụ thực phẩm sạch và rẻ
                </h2>
                <p>
                    <Button variant="outline-primary"><Nav.Link href="login" style={{ color: "black" }}>Click vào đây để được giảm ngay 15% hóa đơn</Nav.Link></Button>
                </p>
            </Jumbotron>
            {/* ket thuc jumbotron */}
            {/* code mới */}
            <Container>

                <div className="filter-section">
                    <h1
                        style={{
                            fontWeight: "bold",
                            color: "#black",
                            marginBottom: "40px",
                            textAlign: "center",
                        }}
                    >
                        Filter Product
                    </h1>
                    <Row className="filter-row">
                        <div className="filter">
                            {categoryList.map((e) => <button type="button"
                                className="btn btn-amber" onClick={() => {

                                    getProductByCategory(e._id)

                                }} style={{ marginLeft: "30px", color: "white", background: "red" }}>{e.name}</button>)}
                        </div>
                        {/* nút tất cả */}
                    </Row>
                </div>
                <div className="result-section">
                    <Row>
                        {displayList.map((e) => {
                            return (
                                <Col sm={3} className="result-items">
                                    <ProductComponent user={user} data={e} key={e._id} />
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </Container>
            {/* end code mới */}
            <div>
                <Footer />
            </div>

        </div>
    )
}


