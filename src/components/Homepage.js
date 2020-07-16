import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import SanphamPhobien from "../components/SanphamPhobien"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";




export default function Homepage() {

    const [categoryList, setCategoryList] = useState([])
    const getCategories = async () => {
        const data = await fetch('http://localhost:5000/category');
        const category = await data.json();
        console.log(category)
        setCategoryList(category.data)

    }
    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div>
            
            <div>
                <h2>{categoryList.map((e) => e.name)}</h2>

            </div>

            <div>
                <h2>Sản phẩm phổ biến</h2>
                <SanphamPhobien />
            </div>


            <h2>footer</h2>


            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    )
}
