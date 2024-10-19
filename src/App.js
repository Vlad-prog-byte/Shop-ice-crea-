import { useEffect, useState } from "react"
import axios from "axios"
import ProductList from "./ProductList/ProductList";
import SearchProducts from "./SearchProduct/SearchProducts"
import Basket from "./Basket/Baket"
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const apiUrl = 'https://webapi.omoloko.ru/api/v1/products'
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data
      setProducts(allPersons.products)
    });
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket]);

  return <div className="App">
    <header>
      <div className="header-name">
        <h1>Магазин мороженого</h1>
      </div>
      <SearchProducts filter={filter} setFilter={setFilter}/>
      <Basket basket={basket} />
    </header>
    <ProductList products={products} setBasket={setBasket} basket={basket} filter={filter.toLocaleLowerCase().trim()}/>
    <footer>
      <p>Автор: Владислав Брониславович Мицкевич</p>
      <a href="https://disk.yandex.ru/i/x-oBw2HL3tzOHQ">Просмотреть резюме</a>
    </footer>
  </div>
}

export default App;
