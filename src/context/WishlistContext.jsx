import { createContext, useState, useContext, useEffect } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({children}) => {

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    return storedWishlist;
  });
  const addToWishlist = (product) => {
    setWishlist(prev => [...prev, product]);
  }

  const removeFromWishlist = (item) => {
    setWishlist(prev => prev.filter((wishlistItem) => wishlistItem.id !== item.id))
  }

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  )
}

export { WishlistProvider, WishlistContext };

