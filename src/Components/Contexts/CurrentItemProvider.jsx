// React Router
import { useParams } from "react-router-dom";
// Data
import productsData from "../../data/productsData";
// Context
import { createContext } from "react";
export const CurrentItemContext = createContext();
export default function CurrentItemProvider(Props) {
  const productId = Number(useParams().id);
  const currentItem = productsData.filter((item) => item.id === productId)[0];
  return (
    <CurrentItemContext.Provider value={currentItem}>
      {Props.children}
    </CurrentItemContext.Provider>
  );
}
