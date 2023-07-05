import { Props as ProductCardProsp } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  tittle: string;
  img?: string;
  className?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProsp {
  ({ children, product }: ProductCardProsp): JSX.Element;
  Title: (
    Props: ProductTitleProps
    // Props: { tittle?: string; className?: string }
  ) => JSX.Element;
  Image: (
    Props: ProductImageProps
    //Props: { img?: string; className?: string }
  ) => JSX.Element;
  Buttons: (
    Props: ProductButtonsProps
    // { className }: { className?: string }
    // Props: { className?: string }
  ) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
