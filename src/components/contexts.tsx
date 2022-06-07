import React from "react";
import { DTO } from "types/dto.d";

export const CatalogContext = React.createContext<DTO.Catalog | undefined>(
  undefined
);
