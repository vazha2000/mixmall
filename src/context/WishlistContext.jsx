import { createContext, useState, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    // if(wishlist.some((item) => item.productName === product.productName)) {
    //   console.log("product is already in the wishlist");
    //   return;
    // }
    setWishlist(prev => [...prev, product]);
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

