import { useState } from "react"

const CategoryFilter = ({ categories, setCategory }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)

    }


    return (
        <div className="flex  justify-center  gap-x-3" >
            <button onClick={toggleMenu} className="flex items-center  ">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="50px" width="50px"
                    xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path></svg>
            </button>
            
            {isOpen ? categories.map(category => (
                <button key={category.id} onClick={() => setCategory(category.id)} >{category.name}</button>
            )) : ''}
        </div>
    )


}

export default CategoryFilter