import React from 'react'
import Product from './Product'
import products from './products'


const ProductList = () => {

    const styles = {
        div: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
        }
    }
  return (
    <div style={styles.div}>
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