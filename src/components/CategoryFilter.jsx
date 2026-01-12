const CategoryFilter = ({categories,setCategory}) => {
    return (
        <div>
            {categories.map(category => (
                <button key={category.id} onClick={()=>setCategory(category.id)} >{category.name}</button>
            ))}
        </div>
    )
}

export default CategoryFilter