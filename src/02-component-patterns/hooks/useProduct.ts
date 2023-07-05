import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);
  // ! si no existe = false
  // !! negación de false = true
  const isControlled = useRef(!!onChange);

  console.log("isControlled", isControlled.current);

  // console.log({ value });
  const increaseBy = (value: number) => {
    if (isControlled.current && onChange) {
      // && que siempre exista
      // type script confie en que siempre va a tener un valor en el onChange!
      return onChange({ count: value, product });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { counter, increaseBy };
};
