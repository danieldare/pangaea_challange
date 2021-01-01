import { array } from 'prop-types';
import React from 'react';
import ProductCard from '../ProductCard';

export default function Shop({ products: productsData }) {
    return (
        <div className="shop">
            <div className="products">
                {productsData?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

Shop.propTypes = {
    products: array.isRequired
};
