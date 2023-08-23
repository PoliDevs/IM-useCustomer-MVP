import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProducts } from "../../../redux/actions";
import { useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import s from "./Products.module.scss";

export default function Products() {
    const allproducts = useSelector(state=> state.allProducts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllProducts())
    }, [])
    

    const handleClick = (name, price) => {
      const product = { name: name, price: price };
      dispatch(addProduct(product));
    };
  return (
    <ScrollContainer className={s.productsContainer}>
      {allproducts?.map((i, index) => (
        <Product
          key={index}
          name={i.altName}
          description={i.description}
          price={i.price}
          bg={i.src}
          handleClick={handleClick}
        />
      ))}
    </ScrollContainer>
  );
}
