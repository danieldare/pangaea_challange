import { bool, func, object, string } from 'prop-types';
import React from 'react';
import ProductCard from '../ProductCard';
import Spinner from '../Spinner';

export default function Shop({
    products: productsData,
    handleAddToCart,
    loading,
    activeCurrency,
    error,
    refetch
}) {
    return (
        <div className="shop" id="shop">
            <div className={`products ${loading ? 'd-flex' : ''}`}>
                {error && (
                    <div className={`${loading ? 'error' : ''}`}>
                        <div>An Unknown Error occured!. Kindly refresh the page</div>
                        <button onClick={() => refetch()}>Click to refresh</button>
                    </div>
                )}

                {loading ? (
                    <Spinner />
                ) : (
                    productsData?.products?.map((product) => (
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
    products: object,
    handleAddToCart: func.isRequired,
    loading: bool.isRequired,
    activeCurrency: string.isRequired,
    error: bool,
    refetch: func.isRequired
};
