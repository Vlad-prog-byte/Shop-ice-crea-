import React from 'react';
import './Basket.css'

const correctInclination = (number, wordForms) => {
  const array = [2,3,4]
  if([...array].includes(number % 10) && parseInt(`${number / 10}`) % 10 !== 1) return wordForms[1]
  else if(parseInt(`${number % 10}`) === 1 && parseInt(`${number % 100}`) !== 11) return wordForms[0]
  else return wordForms[2]
}


const Basket = ({ basket }) => {
  const totalItems = basket.length

  const totalPrice = basket.reduce((sum, item) => sum + item.cost, 0)

  return (
    <div className="basket-info">
      <span>{totalItems} {correctInclination(totalItems, ['товар', 'товара', 'товаров'])}</span>
      <span> Сумма: {totalPrice} ₽</span>
    </div>
  );
};

export default Basket
