import CategoryFilter from "./CategoryFilter"



const Header = ({ categories, setCategory,setSearchValue }) => {



    return (
        <header className="w-full" >
            <div className="container mx-auto  flex justify-between py-5">

                <div >
                    <button className="flex gap-x-1 text-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                            </path>
                        </svg>
                        <span>Москва</span>
                    </button>
                    <img src="https://static-basket-01.wbbasket.ru/vol2/site/i/v3/header/logo-new-year-2026.webp" alt="" className="w-[200px]"/>
                </div>

                <div className="flex-1 flex">
                    <CategoryFilter
                        categories={categories}
                        setCategory={setCategory}
                    />
                    <input 
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="search" 
                    placeholder="Найти на Wildberries" 
                    className="w-full p-5" />
                </div>

                <div className="flex">
                    <button className="flex flex-col justify-center items-center">
                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                            </path>
                        </svg>
                        <span>Адреса</span>
                    </button>

                    <button className="flex flex-col justify-center items-center">
                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                            </path>
                        </svg>
                        <span>Адреса</span>
                    </button>

                    <button className="flex flex-col justify-center items-center">
                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z">
                            </path>
                        </svg>
                        <span>Адреса</span>
                    </button>
                    </div>

            </div>
        </header>
    )
}
export default Header