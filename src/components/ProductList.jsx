import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {


    return (
        <div className="w-full ">
        <div className="container mx-auto  grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 pt-20">
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))
            }</div>
            </div>
    )


}

export default ProductList