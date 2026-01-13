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

        <div className=" flex flex-row">

          <div className="w-20" >

            <img src="https://basket-15.wbbasket.ru/vol2215/part221514/221514365/images/c246x328/1.webp" alt="" className="" />
            <div className="flex justify-between" >
              <button className="w-6 h-6 flex justify-center text-center bg-yellow-100 rounded-md  " ><img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Minus-.svg" alt="" /></button>
              <p>1</p>
              <button className="w-6 h-6 bg-yellow-100 rounded-md "><img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Plus_font_awesome.svg" alt="" /></button>
            </div>

          </div>

          <div>
            <p className="text-red-500 font-bold" >579 ₽</p>
            <p>Ирригатор для носа</p>
            <p   className="  text-gray-300 text-xs font-thin" >19 января</p>
          </div>

        </div>

      </div>




    </div>
  )
}

export default CartPage
