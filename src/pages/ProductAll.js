import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ProductAll = () => {
    const [productList, setProductList] = useState([])

    const [query, setQuery] = useSearchParams()
    const getProducts = async () => {
        let searchQuery = query.get('q') || ''
        let url = `https://my-json-server.typicode.com/ljs7908/react_H&M/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
    }

    useEffect(() => {
        getProducts()
    }, [query])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3} sm={6}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll
