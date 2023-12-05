import { createContext } from "react";

export const ProductContext = createContext({
  products: [],
  handleFilter: () => {},
  cardItems: [],
  addCard: (id) => {},
  showCardCount: () => {},
  handleFilterForType: (type, values) => {},
  filteredProducts: [],
});
