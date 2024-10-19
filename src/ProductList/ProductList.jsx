import React, {useMemo} from 'react';
import './ProductList.css';
import Card from '../Card/Card';

const ProductList = ({ products, setBasket, basket, filter }) => {
    const filteredProducts = useMemo(() => {
        if (filter === '')
            return products

        const result = []
        products.forEach((product, i) => {
            let searchTitle = -1
            let searchSubTitle = -1

            if (product.title)
                searchTitle = product.title.toLowerCase().indexOf(filter)
            if (product.subtitle)
                searchSubTitle = product.subtitle.toLowerCase().indexOf(filter)

            if (searchTitle !== -1 || searchSubTitle !== -1)
                result.push(product)
        })
        return result
    }, [products, filter])


    const addToBasket = (product) => {
        const id = product.id
        if (basket.some(value => value.id === id)) {
            const newbasket = basket.filter(value => value.id !== id)
            setBasket(newbasket)
            return
        }

        setBasket((prevBasket) => [...prevBasket, product])
    }

    return <section id="products">
        {
            filteredProducts.map(filteredProduct => <Card
                product={filteredProduct}
                addToBasket={() => addToBasket(filteredProduct)}
                basket={basket}
                filter={filter}
            />)
        }
    </section>
}

export default ProductList