
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



  const [searchValue, setSearchValue] = useState('')

  const resultProducts = products.filter(prod => (prod.category === category || category === 'all') && prod.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  
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
        setSearchValue={setSearchValue}
        categories={categories}
        setCategory={setCategory}
      />

      <ProductList products={resultProducts} />

    </>
  )
}

export default App
