import { array, bool, func, string } from 'prop-types';
import React from 'react';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

export default function Shop({ products, handleAddToCart, loading, activeCurrency, error }) {
    return (
        <div className="shop" id="shop">
            <div className={`products ${loading ? 'd-flex' : ''}`}>
                {error && (
                    <div className={`${loading ? 'error' : ''}`}>
                        <div>An Unknown Error occured!. Kindly refresh the page</div>
                    </div>
                )}

                {loading ? (
                    <Spinner />
                ) : (
                    products?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            handleAddToCart={() => handleAddToCart(product)}
                            activeCurrency={activeCurrency}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

Shop.propTypes = {
    products: array,
    handleAddToCart: func.isRequired,
    loading: bool.isRequired,
    activeCurrency: string.isRequired,
    error: bool
};
