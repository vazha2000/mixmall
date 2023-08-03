import React from "react";
import {
  SProductDescription,
  SProductDescriptionTable,
  SProductDescriptionTableHeader,
  SProductDescriptionTableRow,
} from "./ProductDescriptions.styled";

export const ProductDescriptions = ({ product }) => {
  
  const keys = Object.keys(product.descriptions[0]);
  const values = Object.values(product.descriptions[0]);

  return (
    <SProductDescription>
      <SProductDescriptionTable>
        <tbody>
          <SProductDescriptionTableHeader>
            <td>დეტალური მახასიათებლები</td>
          </SProductDescriptionTableHeader>
          {keys.map((item, index) => (
            <SProductDescriptionTableRow key={index}>
              <td>{item}</td>
              <td>{values[index]}</td>
            </SProductDescriptionTableRow>
          ))}
        </tbody>
      </SProductDescriptionTable>
    </SProductDescription>
  );
};
