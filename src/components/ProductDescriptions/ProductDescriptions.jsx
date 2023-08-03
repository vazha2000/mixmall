import React from "react";
import { SProductDescription, SProductDescriptionTable, SProductDescriptionTableRow } from "./ProductDescriptions.styled";

export const ProductDescriptions = () => {
  return (
    <SProductDescription>
      <SProductDescriptionTable>
        <tbody>
          <SProductDescriptionTableRow>
            <td>koko</td>
            <td>koko</td>
          </SProductDescriptionTableRow>
        </tbody>
      </SProductDescriptionTable>
    </SProductDescription>
  );
};
