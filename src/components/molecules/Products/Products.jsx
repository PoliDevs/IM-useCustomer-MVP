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
      <Modal isOpen={isOpen}closeModal={closeModal} productData={productData} />
    </>
  );
}
