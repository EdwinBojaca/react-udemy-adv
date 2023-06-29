import { ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  tittle: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProsp {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ tittle }: { tittle?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
