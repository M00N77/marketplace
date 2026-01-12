const ProductCard = ({product}) => {
    
    return (       
            <div className="flex flex-col justify-between border-2 border-red-500 w-40  text-center  ">
                <img src={product.image} alt="" className="h-40 p-5" />
                <p className="p-5 line-clamp-1" >{product.title}</p>
                <p className="font-bold text-2xl py-5">{product.price}</p>
                <button className="text-center bg-red-500 w-full h-10 font-bold" >Buy</button>
            </div>
    )
}

export default ProductCard