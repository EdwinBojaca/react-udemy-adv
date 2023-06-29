import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  tittle?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({
  tittle,
  className,
  style,
}: // {
// tittle?: string;
// className?: string;
// }
Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {" "}
      {tittle ? tittle : product.tittle}{" "}
    </span>
  );
};
