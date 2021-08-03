import { useState, useEffect } from "react";

function getSavedBasket() {
  const savedBasket = JSON.parse(localStorage.getItem("basket"));
  if (savedBasket) return savedBasket;
}

const useBasketStorage = () => {
  const [basket, setBasket] = useState(() => {
    return getSavedBasket();
  });

  function setBasketItem(item) {
    basket?.map((x) => x.id !== item.id && x.id);
  }

  function findBasketItem(id) {
    basket.find((item) => item.id === id);
  }

  function removeBasketItem(id) {
    setBasket(basket.filter((item) => item.id !== id));
  }

  function clearBasket() {
    setBasket([]);
  }

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return [basket, setBasketItem, removeBasketItem, findBasketItem, clearBasket];
};

export default useBasketStorage;
