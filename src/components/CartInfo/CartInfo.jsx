import React from "react";
import {
  SCartCardTable,
  SCartCardTableBody,
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
  SCartCardTablleRemove,
  SCartEmpty,
  SCartInfo,
  SCartInfoHeaderClose,
  SCartInfoHeaderContainer,
  SCartInfoHeaderIconContent,
} from "./CartInfo.styled";
import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";
import { CartInfoOverlay } from "./CartInfoOverlay/CartInfoOverlay";

export const CartInfo = ({
  cart,
  removeFromCart,
  setIsCartClicked,
  isCartClicked,
}) => {
  console.log(cart);
  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };
  const handleCartClick = () => {
    setIsCartClicked(!isCartClicked);
  };
  return (
    <>
    <SCartInfo
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
    >
      <SCartInfoHeaderContainer>
        <SCartInfoHeaderIconContent>
          <img src="assets/svg/cart.svg" alt="cart icon" />
          <h3>კალათა</h3>
        </SCartInfoHeaderIconContent>
        <SCartInfoHeaderClose>
          <img
            src="assets/svg/close.svg"
            alt="close icon"
            onClick={() => setIsCartClicked(false)}
          />
        </SCartInfoHeaderClose>
      </SCartInfoHeaderContainer>
      <SCartCardTable>
        <SCartCardTableBody>
          {cart.map((item, index) => (
            <SCartCardTableBox key={index}>
              <SCartCardTableBoxImageContent>
                <img src={item.productImage} height={"100%"} alt={item.alt} />
              </SCartCardTableBoxImageContent>
              <SCartCardTableBoxNameContent>
                <div>{item.productName}</div>
                <div>
                  {item.productQuantity} x{" "}
                  <span>
                    {item.currentPrice}
                    <img src="assets/svg/lari.svg" alt="lari icon" />
                  </span>
                </div>
              </SCartCardTableBoxNameContent>
              <SCartCardTablleRemove onClick={() => handleRemoveClick(item)}>
                <img src="assets/svg/trash.svg" alt="remove" />
              </SCartCardTablleRemove>
            </SCartCardTableBox>
          ))}
        </SCartCardTableBody>
      </SCartCardTable>
      
    </SCartInfo>
    {isCartClicked && (
      <>
        <CartInfoOverlay
          isCartClicked={isCartClicked}
          handleCartClick={handleCartClick}
        />
      </>
    )}
  </>
  );
};

// import React from "react";
// import {
//   SCartCardTable,
//   SCartCardTableBody,
//   SCartCardTableBox,
//   SCartCardTableBoxImageContent,
//   SCartCardTableBoxNameContent,
//   SCartCardTableBoxQuantityContent,
//   SCartCardTableBoxTotalContent,
//   SCartCardTablleRemove,
//   SCartEmpty,
//   SCartInfo,
// } from "./CartInfo.styled";
// import { SStyledLink } from "../DropdownMenu/DropdownMenu.styled";

// export const CartInfo = ({ cart, removeFromCart }) => {
//   const handleRemoveClick = (item) => {
//     removeFromCart(item);
//   };
//   return (
//     <SCartInfo
//       initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 1 }}
//       animate={{
//         clipPath: "inset(0% 0% 0% 0%)",
//         opacity: 1,
//         transition: { duration: 0.3, delay: 0.2 },
//       }}
//       exit={{
//         clipPath: "inset(0% 0% 100% 0%)",
//         opacity: 1,
//         transition: { delay: 0.1, duration: 0.3 },
//       }}
//       transition={{ type: "tween", duration: 0.4, delay: 0.1 }}
//     >
//       {cart.length === 0 ? (
//         <SCartEmpty>კალათა ცარიელია</SCartEmpty>
//       ) : (
//         <>
// <SCartCardTable>
//   <SCartCardTableBody>
//     {cart.map((item, index) => (
//       <SCartCardTableBox key={index}>
//         <SCartCardTableBoxImageContent>
//           <img
//             src={item.productImage}
//             height={"100%"}
//             alt={item.alt}
//           />
//         </SCartCardTableBoxImageContent>
//         <SCartCardTableBoxNameContent>
//           {item.productName}
//         </SCartCardTableBoxNameContent>
//         <SCartCardTableBoxQuantityContent>
//           {item.productQuantity} ცალი
//         </SCartCardTableBoxQuantityContent>
//         <SCartCardTableBoxTotalContent>
//           {item.currentPrice * item.productQuantity}
//         </SCartCardTableBoxTotalContent>
//         <SCartCardTablleRemove
//           onClick={() => handleRemoveClick(item)}
//         >
//           <img src="assets/svg/trash.svg" alt="remove" />
//         </SCartCardTablleRemove>
//       </SCartCardTableBox>
//     ))}
//   </SCartCardTableBody>
// </SCartCardTable>
//           <div style={{ padding: "10px 0 0", textAlign: "end" }}>
//             <SStyledLink to="/checkout">
//               <strong style={{ cursor: "pointer" }}>გაგრძელება</strong>
//             </SStyledLink>
//           </div>
//         </>
//       )}
//     </SCartInfo>
//   );
// };
