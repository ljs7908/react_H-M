import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div onClick={showDetail}>
            <img className="productCardImg" src={item?.img} />
            <div className="choice">
                {item?.choice ? 'Conscious Choice' : ''}
            </div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div className="new-product">{item?.new ? '신제품' : ''}</div>
        </div>
    )
}

export default ProductCard
