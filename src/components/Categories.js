import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
        <div className='lmj-categories'>
            <p>Categories</p>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')} className='btn-color'>Réinitialiser</button>
        </div>
    )
}

export default Categories