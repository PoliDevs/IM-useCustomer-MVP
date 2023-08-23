import { ProductsInfo } from "../../../utils/Constants";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import s from "./Products.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions";

export default function Products() {
    const dispatch = useDispatch();

    const handleClick = (name, price) => {
      const product = { name: name, price: price };
      dispatch(addProduct(product));
    };
  return (
    <ScrollContainer className={s.productsContainer}>
      {ProductsInfo?.map((i, index) => (
        <Product
          key={index}
          name={i.name}
          description={i.description}
          price={i.price}
          bg={i.src}
          handleClick={handleClick}
        />
      ))}
    </ScrollContainer>
  );
}
