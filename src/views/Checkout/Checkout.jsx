import React, { useContext } from "react";
import {
  SCheckout,
  SCheckoutForm,
  SCheckoutInfo,
  SCheckoutInputs,
  SCheckoutInputsLabel,
  SCheckoutPricing,
  SCheckoutPricingTable,
  SCheckoutPricingTableBody,
  SCheckoutPricingTableRow,
  SCheckoutProduct,
  SCheckoutProductImg,
  SCheckoutProductNameQuantity,
  SCheckoutProductTotal,
  SCompanyNameInput,
  SCountrySelect,
  SDistrictInput,
  SFirstLastnameContainer,
  SFirstnameInput,
  SFormSubmitButton,
  SFormSubmitButtonContainer,
  SLastnameInput,
  SMailInput,
  SPhoneInput,
  SPopulatedAreaInput,
  SPostalCodeInput,
  SRegionSelect,
  SStreetAddress,
} from "./Checkout.styled";
import { CheckoutContext } from "../../context/CheckoutContext";

export const Checkout = () => {
  const { cart, removeFromCart } = useContext(CheckoutContext);
  console.log(cart);
  const totalPrice = cart.reduce((sum, item) => {
    const productPrice = item.productQuantity * item.currentPrice;
    return sum + productPrice;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SCheckout>
      <SCheckoutInputs>
        <SCheckoutForm onSubmit={handleSubmit}>
          <SCheckoutInputsLabel>გადახდის დეტალები</SCheckoutInputsLabel>
          <SFirstLastnameContainer>
            <SFirstnameInput type="text" placeholder="სახელი" />
            <SLastnameInput type="text" placeholder="გვარი" />
          </SFirstLastnameContainer>
          <SCompanyNameInput
            type="text"
            placeholder="კომპანიის სახელი (არასავალდებულო)"
          />
          <SCountrySelect name="" id="" disabled>
            <option value="">საქართველო</option>
          </SCountrySelect>
          <SRegionSelect name="regions" id="" defaultValue="">
            <option value="" disabled hidden>
              აირჩიე რეგიონი
            </option>
            <option value="apkhazeti">აფხაზეთი</option>
            <option value="achara">აჭარა</option>
            <option value="guria">გურია</option>
            <option value="imereti">იმერეთი</option>
            <option value="kakheti">კახეთი</option>
            <option value="mtskheta mtianeti">მცხეთა მთიანეთი</option>
            <option value="racha lechkhumi kvemo svaneti">
              რაჭა-ლეჩხუმი ქვემო სვანეთი
            </option>
            <option value="samegrelo zemo svaneti">
              სამეგრელო-ზემო სვანეთი
            </option>
            <option value="samtskhe javakheti">სამცხე-ჯავახეთი</option>
            <option value="kvemo kartli">ქვემო ქართლი</option>
            <option value="shida kartli">შიდა ქართლი</option>
          </SRegionSelect>
          <SDistrictInput type="text" placeholder="რაიონი" />
          <SPopulatedAreaInput
            type="text"
            placeholder="დასახლებული პუნქტი(ქალაქი, სოფელი, დაბა...)"
          />
          <SStreetAddress type="text" placeholder="ქუჩის მისამართი" />
          <SPostalCodeInput type="text" placeholder="საფოსტო ინდექსი" />
          <SPhoneInput type="text" placeholder="ტელეფონის ნომერი" />
          <SMailInput type="text" placeholder="ელფოსტის მისამართი" />
          <SFormSubmitButtonContainer>
            <SFormSubmitButton type="submit">
              შეკვეთის განთავსება
            </SFormSubmitButton>
          </SFormSubmitButtonContainer>
        </SCheckoutForm>
      </SCheckoutInputs>
      <SCheckoutInfo>
        {cart.length === 0 ? (
          <div>კალათა ცარიელია</div>
        ) : (
          <>
            <label htmlFor="">თქვენი შეკვეთა</label>
            {cart.map((item) => (
              <SCheckoutProduct>
                <SCheckoutProductImg src={item.productImage} alt="" />
                <SCheckoutProductNameQuantity>
                  <span>{item.productName}</span>
                  <span>რაოდენობა: {item.productQuantity}</span>
                </SCheckoutProductNameQuantity>
                <SCheckoutProductTotal>
                  {item.productQuantity * item.currentPrice}
                </SCheckoutProductTotal>
              </SCheckoutProduct>
            ))}
            <SCheckoutPricing>
              <SCheckoutPricingTable>
                <SCheckoutPricingTableBody>
                  <SCheckoutPricingTableRow>
                    <td>სულ ფასი:</td>
                    <td>{totalPrice} ლარი</td>
                  </SCheckoutPricingTableRow>
                  <SCheckoutPricingTableRow>
                    <td>მიწოდების საფასური:</td>
                    <td>15 ლარი</td>
                  </SCheckoutPricingTableRow>
                  <SCheckoutPricingTableRow>
                    <td>გადასახდელი თანხა:</td>
                    <td>{totalPrice + 15} ლარი</td>
                  </SCheckoutPricingTableRow>
                </SCheckoutPricingTableBody>
              </SCheckoutPricingTable>
            </SCheckoutPricing>
          </>
        )}
      </SCheckoutInfo>
    </SCheckout>
  );
};
