const CategoryFilter = ({categories,setCategory}) => {
    return (
        <div className="flex flex-col justify-start" >
            {categories.map(category => (
                <button key={category.id} onClick={()=>setCategory(category.id)} >{category.name}</button>
            ))}
        </div>
    )
}

export default CategoryFilter