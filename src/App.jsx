
import { useState,useEffect } from "react"
import ProductList from "./components/ProductList"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));

  }, [])

  console.log(products);

  if (products.length === 0) {
        return <h2>Загрузка данных...</h2>
    }

  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
