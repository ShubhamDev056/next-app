import React from 'react'

const ProductDetails = ({params}) => {
    console.log(params.productid)
  return (
    <div>ProductDetails with productid {params.productid}</div>
  )
}

export default ProductDetails