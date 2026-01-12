
import { useState, useEffect } from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {

  const [products, setProducts] = useState([])

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'electronics', name: 'Электроника' },
    { id: 'jewelery', name: 'Ювелирка' },
  ];

  const [category, setCategory] = useState('all')

  const filteredProducts = products.filter(prod => prod.category === category)


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));

  }, [])



  if (products.length === 0) {
    return <h2>Загрузка данных...</h2>
  }

  return (
    < >
     
        <Header
          categories={categories}
          setCategory={setCategory}
        />

        <ProductList products={category !== 'all'
          ? filteredProducts
          : products
        } />

    </>
  )
}

export default App
