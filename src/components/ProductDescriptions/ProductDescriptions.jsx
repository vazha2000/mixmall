import React, { useState } from "react";
import {
  SProductDescription,
  SProductDescriptionTable,
  SProductDescriptionTableHeader,
  SProductDescriptionTableRow,
  SShowButtonContainer,
} from "./ProductDescriptions.styled";

export const ProductDescriptions = ({ product }) => {
  const [showAllDescriptions, setShowAllDescriptions] = useState(false);

  const keys = Object.keys(product.descriptions[0]);
  const values = Object.values(product.descriptions[0]);

  const numDescriptionsToShow = showAllDescriptions ? keys.length : 5;

  return (
    <SProductDescription>
      <SProductDescriptionTable>
        <tbody>
          <SProductDescriptionTableHeader>
            <td>DETAILED SPECIFICATIONS</td>
          </SProductDescriptionTableHeader>
          {keys.slice(0, numDescriptionsToShow).map((item, index) => (
            <SProductDescriptionTableRow
              key={index}
              isLast={
                showAllDescriptions ? index === keys.length - 1 : index === 4
              }
              isEven={index % 2 === 0}
            >
              <td>{item}</td>
              <td>{values[index]}</td>
            </SProductDescriptionTableRow>
          ))}
        </tbody>
      </SProductDescriptionTable>
      {keys.length > 5 && (
        <SShowButtonContainer>
          {!showAllDescriptions ? (
            <button onClick={() => setShowAllDescriptions(true)}>
              SHOW MORE
            </button>
          ) : (
            <button onClick={() => setShowAllDescriptions(false)}>
              ნაკლების ჩვენება
            </button>
          )}
        </SShowButtonContainer>
      )}
    </SProductDescription>
  );
};
