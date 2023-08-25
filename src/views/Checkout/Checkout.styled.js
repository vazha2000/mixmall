import styled from "styled-components";

export const SCheckout = styled.div`
  display: flex;
  margin-top: 50px;
  box-sizing: border-box;
  padding: 0 40px;
  gap: 50px;
`;

export const SCheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SCheckoutInputs = styled.div`
  width: 60%;
`;

const InputBase = styled.input`
  padding: 0 20px;
  font-family: inherit;
  font-size: 13px;
  outline: none;
  border-radius: 4px;
  border: ${({isError}) => (isError ? "1px solid red" : "1px solid #d3d3d3")};
  height: 40px;

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

export const SCheckoutInputsLabel = styled.label`
  font-size: 30px;
  margin-bottom: 20px;
`;


export const SFirstLastnameContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const SFirstnameInput = styled(InputBase)`
  width: 50%;
`;

export const SLastnameInput = styled(InputBase)`
  width: 50%;
`;

export const SCompanyNameInput = styled(InputBase)`
`;

export const SCountrySelect = styled.select`
  height: 40px;
  font-family: inherit;
  padding: 0 18px;
  border: ${({isError}) => (isError ? "1px solid red" : "1px solid #d3d3d3")};
`

export const SRegionSelect = styled(SCountrySelect)`
`

export const SDistrictInput = styled(InputBase)`

`

export const SPopulatedAreaInput = styled(InputBase)`
`

export const SStreetAddress = styled(InputBase)`
`

export const SPostalCodeInput = styled(InputBase)`

`
export const SPhoneInput = styled(InputBase)``

export const SMailInput = styled(InputBase)`
`

export const SFormSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SFormSubmitButton = styled.button`
  height: 40px;
  background-color: #df3d41;
  
  color: #fff;
  padding: 0 5px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;

  &:hover {
    cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
    background-color: ${({disabled}) => (disabled ? "gray" : "#ff494e")};
  }
`

export const SCheckoutInfo = styled.div`
  width: 40%;
`;

export const SCheckoutProduct = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0,0,0, 0.5);
  display: flex;
  margin: 5px 0;
`

export const SCheckoutProductImg = styled.img`
  width: 80px;
`

export const SCheckoutProductNameQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid rgba(0,0,0, 0.5);
  border-right: 1px solid rgba(0,0,0, 0.5);
  flex: 1;
`

export const SCheckoutProductTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`

export const SCheckoutPricing = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
`

export const SCheckoutPricingTable = styled.table`
  border-spacing: 0;
  width: inherit;

`

export const SCheckoutPricingTableBody = styled.tbody`
  border: 1px solid rgba(0,0,0, 0.5);
`

export const SCheckoutPricingTableRow = styled.tr`
`