import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist(prev => [...prev, item]);
  }

  const removeFromWishlist = (item) => {
    setWishlist(prev => prev.filter((wishlistItem) => wishlistItem.id !== item.id))
  }

  return (
    <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}

export { WishlistProvider, WishlistContext };

