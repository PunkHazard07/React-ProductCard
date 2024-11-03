import React from 'react'
import Product from './Product'
import products from './products'


const ProductList = () => {
  return (
    <div>
        {products.map((product, index) => (
        <Product
    key={index}
    image={product.image}
    name={product.name}
    price={product.price}
    description={product.description}
    
        />
        ))}
    </div>
  )
}

export default ProductList