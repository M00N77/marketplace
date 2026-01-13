import { Routes,Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import HomePage from './pages/HomePage'
import CartPage from "./pages/CartPage"


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

      <Routes>
        
        <Route path="/" element={<HomePage products={resultProducts} />} />
        <Route path="cart" element={<CartPage/>} />  

      </Routes>

    </>
  )
}

export default App
