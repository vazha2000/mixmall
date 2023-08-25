import React, { useContext } from "react";
import {
  SCheckout,
  SCheckoutForm,
  SCheckoutInfo,
  SCheckoutInputs,
  SCheckoutInputsLabel,
  SCheckoutPricing,
  SCheckoutPricingRow,
  SCheckoutPricingRowContainer,
  SCheckoutPricingRowTotal,
  SCheckoutProduct,
  SCheckoutProductButtonsContainer,
  SCheckoutProductImg,
  SCheckoutProductLeftButton,
  SCheckoutProductNameQuantity,
  SCheckoutProductQuantity,
  SCheckoutProductRightButton,
  SCheckoutProductTable,
  SCheckoutProductTableBody,
  SCheckoutProductTableBox,
  SCheckoutProductTableBoxImageContent,
  SCheckoutProductTableBoxNameContent,
  SCheckoutProductTablePrice,
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
import { useForm } from "react-hook-form";
import {
  SCartCardTable,
  SCartCardTableBody,
  SCartCardTableBox,
  SCartCardTableBoxImageContent,
  SCartCardTableBoxNameContent,
  SCartCardTablleRemove,
} from "../../components/CartInfo/CartInfo.styled";

export const Checkout = () => {
  const { cart, setCart, removeFromCart, updateProductQuantity } =
    useContext(CheckoutContext);

  const totalPrice = cart.reduce((sum, item) => {
    const productPrice = item.productQuantity * item.currentPrice;
    return sum + productPrice;
  }, 0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const validateOnlyLetters = (value) => {
    const onlyLetters = /^[A-Za-z]+$/;
    return (
      onlyLetters.test(value) || "Please enter a valid input with only letters"
    );
  };

  const validatePhoneNumber = (value) => {
    const phoneNumberPattern = /^[0-9\s\-()+]+$/;

    return (
      phoneNumberPattern.test(value) || "Please enter a valid phone number"
    );
  };

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(value) || "Please enter a valid email address";
  };

  const handleRemoveClick = (item) => {
    removeFromCart(item);
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          productQuantity: Math.min(item.productQuantity + 1, 99), // Make sure it doesn't exceed 99
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          productQuantity: Math.max(item.productQuantity - 1, 1), // Make sure it doesn't go below 1
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <SCheckout>
      <SCheckoutInputs>
        <SCheckoutForm
          onSubmit={handleSubmit((data) => {
            reset();
          })}
        >
          <SCheckoutInputsLabel>გადახდის დეტალები</SCheckoutInputsLabel>
          <SFirstLastnameContainer>
            <SFirstnameInput
              isError={!!errors.firstname}
              {...register("firstname", {
                required: "firstname is required",
                validate: validateOnlyLetters,
              })}
              placeholder="სახელი"
            />
            <SLastnameInput
              {...register("lastname", {
                required: "lastname is required",
                validate: validateOnlyLetters,
              })}
              isError={!!errors.lastname}
              placeholder="გვარი"
            />
          </SFirstLastnameContainer>
          {/* {errors.firstname && <div>{errors.firstname?.message}</div>} */}
          {/* {errors.lastname && <div>{errors.lastname?.message}</div>} */}

          <SCompanyNameInput
            placeholder="კომპანიის სახელი (არასავალდებულო)"
            {...register("companyName")}
          />
          <SCountrySelect disabled>
            <option value="">საქართველო</option>
          </SCountrySelect>
          <SRegionSelect
            name="regions"
            {...register("region", { required: "region is required" })}
            defaultValue=""
            isError={!!errors.region}
          >
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
          {/* {errors.region && <div>{errors.region?.message}</div>} */}
          <SDistrictInput
            {...register("district", {
              required: "district is required",
              validate: validateOnlyLetters,
            })}
            placeholder="რაიონი"
            isError={!!errors.district}
          />
          {/* {errors.district && <div>{errors.district?.message}</div>} */}
          <SPopulatedAreaInput
            {...register("populatedArea", {
              required: "populated area is required",
              validate: validateOnlyLetters,
            })}
            isError={!!errors.populatedArea}
            placeholder="დასახლებული პუნქტი(ქალაქი, სოფელი, დაბა...)"
          />
          {/* {errors.populatedArea && <div>{errors.populatedArea?.message}</div>} */}
          <SStreetAddress
            {...register("streetAddress", {
              required: "street address is required",
            })}
            isError={!!errors.streetAddress}
            placeholder="ქუჩის მისამართი"
          />
          {/* {errors.streetAddress && <div>{errors.streetAddress?.message}</div>} */}
          <SPostalCodeInput
            {...register("postalCode")}
            isError={!!errors.postalCode}
            placeholder="საფოსტო ინდექსი"
          />
          <SPhoneInput
            {...register("phoneNumber", {
              required: "phone number is required",
              validate: validatePhoneNumber,
            })}
            isError={!!errors.phoneNumber}
            placeholder="ტელეფონის ნომერი"
          />
          {/* {errors.phoneNumber && <div>{errors.phoneNumber?.message}</div>} */}
          <SMailInput
            {...register("email", {
              required: "email field is required",
              validate: validateEmail,
            })}
            isError={!!errors.email}
            placeholder="ელფოსტის მისამართი"
          />
          {/* {errors.email && <div>{errors.email?.message}</div>} */}
          <SFormSubmitButtonContainer>
            <SFormSubmitButton type="submit" disabled={cart.length === 0}>
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
            <SCheckoutProductTable>
              <SCheckoutProductTableBody>
                {cart.map((item, index) => (
                  <SCheckoutProductTableBox key={index}>
                    <SCheckoutProductTableBoxImageContent>
                      <img
                        src={item.productImage[0]}
                        height={"100%"}
                        alt={item.alt}
                      />
                    </SCheckoutProductTableBoxImageContent>
                    <SCheckoutProductTableBoxNameContent>
                      <div>{item.productName}</div>
                      <SCheckoutProductButtonsContainer>
                        <SCheckoutProductLeftButton
                          onClick={() => handleDecrement(item.id)}
                        >
                          <img
                            src="assets/svg/minus.svg"
                            alt="minus"
                            width={18}
                          />
                        </SCheckoutProductLeftButton>
                        <SCheckoutProductQuantity>
                          {item.productQuantity}
                        </SCheckoutProductQuantity>
                        <SCheckoutProductRightButton
                          onClick={() => handleIncrement(item.id)}
                        >
                          <img
                            src="assets/svg/plus.svg"
                            alt="plus"
                            width={20}
                          />
                        </SCheckoutProductRightButton>
                      </SCheckoutProductButtonsContainer>
                      <img
                        src="assets/svg/trash.svg"
                        alt="remove"
                        onClick={() => handleRemoveClick(item)}
                        width={20}
                      />
                    </SCheckoutProductTableBoxNameContent>
                    <SCheckoutProductTablePrice>
                      <span>
                        {item.currentPrice}.
                        <img src="assets/svg/lari.svg" alt="lari icon" />
                      </span>
                      <span>
                        {item?.oldPrice}.
                        <img src="assets/svg/lari.svg" alt="lari icon" />
                      </span>
                      <hr />
                    </SCheckoutProductTablePrice>
                  </SCheckoutProductTableBox>
                ))}
              </SCheckoutProductTableBody>
            </SCheckoutProductTable>
            <SCheckoutPricingRowContainer>
              <SCheckoutPricingRow>
                <span>სულ ფასი:</span>
                <span>{totalPrice} ლარი</span>
              </SCheckoutPricingRow>
              <SCheckoutPricingRow>
                <span>მიწოდების საფასური:</span>
                <span>15 ლარი</span>
              </SCheckoutPricingRow>
              <SCheckoutPricingRowTotal>
                <span>ჯამი</span>
                <span>{totalPrice + 15} ლარი</span>
              </SCheckoutPricingRowTotal>
            </SCheckoutPricingRowContainer>

            {/* <SCheckoutPricing>კოკო</SCheckoutPricing> */}
          </>
        )}
      </SCheckoutInfo>
    </SCheckout>
  );
};
