import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { product } from "../data/products";

import "../styles/custom-styles.css";

const products = product[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={products.id}
        product={products}
        className="bg-dark text-whvite"
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, count, maxCount, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {/* si no se ha llegado al valor maximo entonces mostrar el jsx o button */}
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}

            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
