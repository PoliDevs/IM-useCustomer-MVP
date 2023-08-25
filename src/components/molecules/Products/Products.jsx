import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProducts, removeProduct } from "../../../redux/actions";
import { useEffect } from "react";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import s from "./Products.module.scss";
import Modal from "../Modal/Modal";

export default function Products() {
    const allproducts = useSelector(state=> state.allProducts);
    const dispatch = useDispatch();
    const { isOpen, openModal, closeModal, productData } = useModal(false);
    useEffect(() => {
      dispatch(getAllProducts())
    }, [])
    

    const addToCart = (name, price, amount, comment) => {
      const product = {
        name: name,
        price: price,
        amount: amount,
        comment: comment,
      };
      dispatch(addProduct(product));
    };

    const removeFromCart = (name) => {
      dispatch(removeProduct(name))
    }


  return (
    <>
      <ScrollContainer className={s.productsContainer}>
        {allproducts?.map((i, index) => (
          <Product
            key={index}
            name={i.altName}
            description={i.description}
            price={i.price}
            bg={i.src}
            openModal={openModal}
          />
        ))}
      </ScrollContainer>
      <Modal isOpen={isOpen} addToCart={addToCart} removeFromCart={removeFromCart} closeModal={closeModal} productData={productData} />
    </>
  );
}
