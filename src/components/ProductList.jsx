import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {


    return (
        <div className=" container  mx-auto grid grid-cols-7 gap-5 ">
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))
            }</div>
    )


}

export default ProductList