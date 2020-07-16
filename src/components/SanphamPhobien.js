import React, { useEffect, useState } from 'react'

export default function SanphamPhobien() {

    const [productList, setProductList] = useState([])
    const getProduct = async () => {
        const data = await fetch('http://localhost:5000/product');
        const product = await data.json();
        console.log(product)
        setProductList(product.data)
    }
    console.log(productList)
    useEffect(() => {
        getProduct()
    }, [])

   
    return (
        <div>
            <h1>{productList.map((e) => e.name)}</h1>
        </div>
    )
}
