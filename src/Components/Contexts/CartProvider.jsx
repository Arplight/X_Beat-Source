import { createContext, useEffect, useState } from "react";
import productsData from "../../data/productsData";

export const CartContext = createContext();
export default function CartProvider(Props) {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart_Items") !== null
      ? JSON.parse(localStorage.getItem("cart_Items"))
      : []
  );
  const [summaryList, setSummaryList] = useState(
    localStorage.getItem("summary_List") !== null
      ? JSON.parse(localStorage.getItem("summary_List"))
      : []
  );
  const [summaryTotal, setSummaryTotal] = useState({
    totalOriginalPrice: 0,
    totalFinalPrice: 0,
    totalDiscount: 0,
  });
  // local storage
  useEffect(() => {
    localStorage.setItem("cart_Items", JSON.stringify(cartItems));
    localStorage.setItem("summary_List", JSON.stringify(summaryList));
  }, [cartItems, summaryList]);

  function addCartItem(currentId) {
    setCartItems(
      [...cartItems, productsData.filter((n) => n.id === currentId)].flat()
    );
  }
  function removeCartItem(currentId) {
    setCartItems(cartItems.filter((n) => n.id !== currentId));
    setSummaryList(summaryList.filter((n) => n.itemId !== currentId));
    localStorage.removeItem(`item_${currentId}_quantity`);
  }

  function summaryListHandler(currentItem) {
    setSummaryList((prevState) => {
      if (prevState.some((n) => n.itemId === currentItem.itemId)) {
        let nextState = prevState.filter(
          (i) => i.itemId !== currentItem.itemId
        );
        return [...nextState, currentItem];
      } else {
        return [...prevState, currentItem];
      }
    });
  }

  // Total Calculations
  useEffect(
    () =>
      setSummaryTotal({
        totalOriginalPrice: summaryList.reduce(
          (acc, current) => acc + current.itemTotalOriginal,
          0
        ),
        totalFinalPrice: summaryList.reduce(
          (acc, current) => acc + current.itemTotalFinal,
          0
        ),
        totalDiscount: summaryList.reduce(
          (acc, current) => acc + current.itemTotalDiscount,
          0
        ),
      }),
    [summaryList, cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addCartItem,
        removeCartItem,
        summaryListHandler,
        summaryList,
        summaryTotal,
      }}
    >
      {Props.children}
    </CartContext.Provider>
  );
}
