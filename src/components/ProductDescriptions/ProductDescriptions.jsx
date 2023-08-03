import React from "react";
import { SProductDescription, SProductDescriptionTable, SProductDescriptionTableHeader, SProductDescriptionTableRow } from "./ProductDescriptions.styled";

export const ProductDescriptions = () => {
  return (
    <SProductDescription>
      <SProductDescriptionTable>
        <tbody>
          <SProductDescriptionTableHeader>
            <td>დეტალური მახასიათებლები</td>
          </SProductDescriptionTableHeader>
          <SProductDescriptionTableRow>
            <td>koko</td>
            <td>koko</td>
          </SProductDescriptionTableRow>
        </tbody>
      </SProductDescriptionTable>
    </SProductDescription>
  );
};
