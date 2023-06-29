import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "id",
  tittle: "Coffee Mug - Card ",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title tittle={""} />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle tittle="hola mundo" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
