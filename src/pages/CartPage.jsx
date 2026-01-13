const CartPage = () => {
  return (
    <div className="flex-1 text-center" >

      <div>

        <div>
          <h1>Корзина</h1>
          <span>15 товаров</span>
        </div>

        <button>Выбрать все</button>
        

      </div>

      <div>

        <div className="w-20 flex flex-col">
          <img src="https://basket-15.wbbasket.ru/vol2215/part221514/221514365/images/c246x328/1.webp" alt="" className=""/>
          <div className="flex justify-between" >
            <button className="w-6 h-6 flex justify-center text-center bg-yellow-100 rounded-md  " >-</button>
            <p>1</p>
            <button className="w-6 h-6 bg-yellow-100 rounded-md ">+</button>
          </div>
        </div>

      </div>

      

      
    </div>
  )
}

export default CartPage
