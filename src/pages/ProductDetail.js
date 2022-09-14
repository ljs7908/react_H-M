import React, { useEffect, useState } from 'react'
import {
    Row,
    Col,
    Container,
    Button,
    DropdownButton,
    Dropdown,
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState(null)

    let { id } = useParams()
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/ljs7908/react_H-M/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div className="choice">
                        {product?.choice ? 'Conscious Choice' : ''}
                    </div>
                    <div className="price">{product?.price}</div>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="사이즈선택"
                    >
                        {product?.size.map((size) => (
                            <Dropdown.Item href="#/action-1">
                                {size}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <Button variant="dark">추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
