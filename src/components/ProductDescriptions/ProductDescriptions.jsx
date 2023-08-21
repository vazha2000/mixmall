import React, { useState } from "react";
import {
  SProductDescription,
  SProductDescriptionTable,
  SProductDescriptionTableHeader,
  SProductDescriptionTableRow,
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
            <td>დეტალური მახასიათებლები</td>
          </SProductDescriptionTableHeader>
          {keys.slice(0, numDescriptionsToShow).map((item, index) => (
            <SProductDescriptionTableRow key={index} isEven={index % 2 === 0}>
              <td>{item}</td>
              <td>{values[index]}</td>
            </SProductDescriptionTableRow>
          ))}
        </tbody>
      </SProductDescriptionTable>
      {keys.length > 5 && (
        <div>
          {!showAllDescriptions ? (
            <button onClick={() => setShowAllDescriptions(true)}>Show More</button>
          ) : (
            <button onClick={() => setShowAllDescriptions(false)}>Show Less</button>
          )}
        </div>
      )}
    </SProductDescription>
  );
};
