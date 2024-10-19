import './Card.css'
import { useMemo } from 'react'


const HighlightedText = ({children}) => {
    return <span
        style={{
            backgroundImage: 'linear-gradient(to right, #F27121cc, #E94057cc, #8A2387cc)',
            borderRadius: '6px',
            color: 'white',
            padding: '3px',
    }}>
        {children}
    </span>
}

const HighlightedFilterText = ({text, filter}) => {
    const found = useMemo(() => {
        if (filter === '' || text === '') {
            return -1
        }

        const query = filter.toLowerCase()
        return text.toLowerCase().indexOf(query)
    }, [filter, text])

    if (found === -1) {
        return <>{text}</>
    }

    return <>
        {text.substring(0, found)}
        <HighlightedText>{text.substring(found, found + filter.length)}</HighlightedText>
        {text.substring(found + filter.length)}
    </>
}


const Card = ({product, addToBasket, basket, filter}) => {
    const basketText = basket.some(value => value.id === product.id) ? 'Убрать из корзины' : 'Добавить в корзину'

    return <div class="product-item">
        <img src={product.image}/>
        <div class="product-info">
            <button class="button" onClick={addToBasket}>{basketText}</button>
            <h3><HighlightedFilterText text={product.title || ''} filter={filter}/></h3>
            <h4><HighlightedFilterText text={product.subtitle || ''} filter={filter}/></h4>
            <span class="price">{product.cost} ₽</span>
        </div>
  </div>
}

export default Card