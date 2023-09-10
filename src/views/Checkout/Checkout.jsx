import React, { useContext } from "react";
import {
  SCheckout,
  SCheckoutCartEmpty,
  SCheckoutForm,
  SCheckoutInfo,
  SCheckoutInputs,
  SCheckoutInputsLabel,
  SCheckoutPricingRow,
  SCheckoutPricingRowContainer,
  SCheckoutPricingRowTotal,
  SCheckoutProductButtonsContainer,
  SCheckoutProductLeftButton,
  SCheckoutProductQuantity,
  SCheckoutProductRightButton,
  SCheckoutProductTable,
  SCheckoutProductTableBody,
  SCheckoutProductTableBox,
  SCheckoutProductTableBoxImageContent,
  SCheckoutProductTableBoxNameContent,
  SCheckoutProductTablePrice,
  SCheckoutStyledLink,
  SCompanyNameInput,
  SCountrySelect,
  SDistrictInput,
  SFirstLastnameContainer,
  SFirstnameInput,
  SFormSubmitButton,
  SFormSubmitButtonContainer,
  SLastnameInput,
  SMailInput,
  SPaymentSelect,
  SPhoneInput,
  SPopulatedAreaInput,
  SPostalCodeInput,
  SRegionSelect,
  SStreetAddress,
} from "./Checkout.styled";
import { CheckoutContext } from "../../context/CheckoutContext";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { SStyledLink } from "../../components/DropdownMenu/DropdownMenu.styled";

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
    const onlyLetters = /^[A-Za-z\u10A0-\u10FF]+$/;
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
          productQuantity: Math.min(item.productQuantity + 1, 99),
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
          productQuantity: Math.max(item.productQuantity - 1, 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const sendEmail = (formData) => {
    // e.preventDefault();
    const serviceID = "service_m4wjaqi";
    const templateID = "template_673scd6";
    const userID = "1djXRcgUQ3KyzVEvg";

    const products = cart.map((item) => ({
      productName: item.productName,
      price: item.currentPrice,
      oldPrice: item.oldPrice,
      quantity: item.productQuantity,
    }));

    const length = products.length

    const emailData = {
      firstname: formData?.firstname,
      lastname: formData?.lastname,
      companyName: formData?.companyName,
      region: formData?.region,
      populatedArea: formData?.populatedArea,
      streetAddress: formData?.streetAddress,
      postalCode: formData?.postalCode,
      phoneNumber: formData?.phoneNumber,
      email: formData?.email,
      paymentMethod: formData?.paymentMethod,
      totalPrice: totalPrice,
      productName1: products[0]?.productName,
      productName2: products[1]?.productName,
      productName3: products[2]?.productName,
      productName4: products[3]?.productName,
      productName5: products[4]?.productName,
      productName6: products[5]?.productName,
      productName7: products[6]?.productName,
      productName8: products[7]?.productName,
      productName9: products[8]?.productName,
      productName10: products[9]?.productName,
      quantity1: products[0]?.quantity,
      quantity2: products[1]?.quantity,
      quantity3: products[2]?.quantity,
      quantity4: products[3]?.quantity,
      quantity5: products[4]?.quantity,
      quantity6: products[5]?.quantity,
      quantity7: products[6]?.quantity,
      quantity8: products[7]?.quantity,
      quantity9: products[8]?.quantity,
      quantity10: products[9]?.quantity,
      price1: products[0]?.price * products[0]?.quantity,
      price2: products[1]?.price * products[1]?.quantity,
      price3: products[2]?.price * products[2]?.quantity,
      price4: products[3]?.price * products[3]?.quantity,
      price5: products[4]?.price * products[4]?.quantity,
      price6: products[5]?.price * products[5]?.quantity,
      price7: products[6]?.price * products[6]?.quantity,
      price8: products[7]?.price * products[7]?.quantity,
      price9: products[8]?.price * products[8]?.quantity,
      price10: products[9]?.price * products[9]?.quantity,
    };

    emailjs.send(serviceID, templateID, emailData, userID).then(
      (result) => {
        console.log("Success!!!", result.text);
      },
      (error) => {
        console.log("Error!!!", error.text);
      }
    );
  };

  const onSubmit = (data) => {
    sendEmail(data)
    setCart([])
    reset();
  };

  return (
    <>
      {cart.length === 0 ? (
        <SCheckoutCartEmpty>
          <h2>თქვენი კალათა ცარიელია</h2>
          <div>
            <SCheckoutStyledLink to="/">
              <h4>მთავარ გვერდზე დაბრუნება</h4>
            </SCheckoutStyledLink>
            <Link to="/">
              <img src="assets/svg/home.svg" alt="" />
            </Link>
          </div>
        </SCheckoutCartEmpty>
      ) : (
        <SCheckout>
          <SCheckoutInputs>
            <SCheckoutForm onSubmit={handleSubmit(onSubmit)}>
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
              <SPaymentSelect
                name="paymentMethod"
                {...register("paymentMethod", {
                  required: "გადახდის მეთოდის მონიშვნა აუცილებელია",
                })}
                isError={!!errors.paymentMethod}
              >
                <option value="" hidden>
                  აირჩიე გადახდის მეთოდი
                </option>
                <option value="ქეში">ნაღდი ანგარიშსწორება</option>
                <option value="ბარათი">ანგარიშზე დარიცხვა</option>
              </SPaymentSelect>
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
              <div>
                <h5 style={{ paddingTop: "15px", paddingLeft: "10px" }}>
                  თქვენი შეკვეთა
                </h5>
                <SCheckoutProductTable>
                  <SCheckoutProductTableBody>
                    {cart.map((item, index) => (
                      <SCheckoutProductTableBox
                        isFirst={index === 0}
                        isLast={index === cart.length - 1}
                        key={index}
                      >
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
                          <img
                            src="assets/svg/trash.svg"
                            alt="remove"
                            onClick={() => handleRemoveClick(item)}
                            width={20}
                          />
                          <span>
                            {item.currentPrice.toFixed(2)}
                            <img src="assets/svg/lari.svg" alt="lari icon" />
                          </span>
                          <span>
                            {item?.oldPrice.toFixed(2)}
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
              </div>
            )}
          </SCheckoutInfo>
        </SCheckout>
      )}
    </>
  );
};
