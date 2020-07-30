import React, { useState, useEffect } from 'react'
import "./CreateProduct.css"
import { Form, Button, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom";


export default function CreateProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [preparing, setPreparing] = useState("")
    const [img, setImg] = useState("")

    const [categoryID, setCategoryId] = useState("")
    const [categoryList, setCategoryList] = useState([])

    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState("")



    let history = useHistory();

    const createProducts = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token")

        if (!name || !price || !description || !preparing || !categoryID || !img || !token) {
            console.log("Need more details");
            return;
        }

        const data = await fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price, description, preparing, categoryID, img, token: token })
        })

        const res = await data.json()
        if (res.status === 200) {
            console.log("không thành công",res.status)
            setMsg("không Thành công")
        } else {
            console.log("Thành công",res.status)
            setMsg("Thành công")
        }

    }

    const getCategories = async () => {
        const data = await fetch('http://localhost:5000/category');
        const category = await data.json();
        console.log('categories', category)
        setCategoryList(category.data)
    }
    const fun = (e) => {
        setShow(true)
        createProducts(e);
        
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className="onTop">

            <Form className="sizeForm">
                <div className="d-flex justify-content-center">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control type="text" placeholder="nhập tên sản phẩm" onChange={(e) => setName(e.target.value)} />
                        <Form.Text className="text-muted">
                            Sth here.
                    </Form.Text>

                        <Form.Label>Giá</Form.Label>
                        <Form.Control type="number" placeholder="nhập giá" onChange={(e) => setPrice(e.target.value)} />
                        <Form.Text className="text-muted">
                            Sth here.
                    </Form.Text>

                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="mô tả" onChange={(e) => setDescription(e.target.value)} />
                        <Form.Text className="text-muted">
                            Sth here.
                    </Form.Text>

                        <Form.Label>Preparing</Form.Label>
                        <Form.Control type="text" placeholder="chuẩn bị" onChange={(e) => setPreparing(e.target.value)} />
                        <Form.Text className="text-muted">
                            Sth here.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" onChange={e => setCategoryId(e.target.value)}>
                            {categoryList.map((e) => <option value={e._id}>{e.name}
                            </option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>HÌnh ảnh</Form.Label>
                        <Form.Control type="text" placeholder="Link hình" onChange={(e) => setImg(e.target.value)} />
                        <Form.Text className="text-muted">
                            Sth here.
                        </Form.Text>

                        <Form.File label="Tải ảnh lên" />

                    </Form.Group>
                </div>
                <Alert show={show} variant={"dark"} dismissible onClose={() => setShow(false)}>
                    {msg}
                </Alert>
                <Button variant="primary" onClick={(e) => fun(e)}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}
