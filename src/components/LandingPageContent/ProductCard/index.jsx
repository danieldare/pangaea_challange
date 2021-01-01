import { func, objectOf, string } from 'prop-types';
import React from 'react';

export default function ProductCard({ product }) {
    const { title, price, image_url, handleAddToCart } = product;

    return (
        <div className="product">
            <div className="img-holder">
                <img src={image_url} alt="product" className="product-image" />
            </div>

            <div className="product-name">{title}</div>
            <div className="product-price">From {price}</div>
            <button className="btn" onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

ProductCard.propTypes = {
    product: objectOf({
        image_url: string.isRequired,
        title: string.isRequired,
        price: string.isRequired,
        handleAddToCart: func.isRequired
    })
};
