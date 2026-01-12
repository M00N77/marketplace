
import { useState,useEffect } from "react"
import ProductList from "./components/ProductList"
import CategoryFilter from "./components/CategoryFilter"

function App() {

  const [products, setProducts] = useState([])

  const categories = [
   { id: 'all', name: 'Все' },
   { id: 'electronics', name: 'Электроника' },
   { id: 'jewelery', name: 'Ювелирка' },
];

  const [category,setCategory] = useState('all')

  const filteredProducts = products.filter(prod => prod.id === category)


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));

  }, [])

  

  if (products.length === 0) {
        return <h2>Загрузка данных...</h2>
    }

  return (
    <>
      
      <CategoryFilter categories = {categories} />

      
      <ProductList products={category!=='all'?filteredProducts:products} />
    </>
  )
}

export default App
