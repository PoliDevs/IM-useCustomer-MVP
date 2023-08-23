import { ProductsInfo } from "../../../utils/Constants";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import s from "./Products.module.scss";

export default function Products({ addProduct }) {
  return (
    <ScrollContainer className={s.productsContainer}>
      {ProductsInfo?.map((i, index) => (
        <Product
          key={index}
          name={i.name}
          description={i.description}
          price={i.price}
          bg={i.src}
          addProduct={addProduct}
        />
      ))}
    </ScrollContainer>
  );
}
