import React from "react"
import './SearchProduct.css'
const SearchProducts = ({setFilter, filter}) => {
    return <div class="search-wrapper">
        <input
            className="search-box"
            placeholder="Поиск..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
        />
    </div>
}

export default SearchProducts