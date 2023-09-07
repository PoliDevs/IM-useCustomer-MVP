import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import s from "./Products.module.scss";
import Modal from "../Modal/Modal";

export default function Products({ changeStyle, commercePlan }) {
  const allproducts = useSelector((state) => state.allProducts);
  const { isOpen, openModal, closeModal, productData } = useModal(false);

  //! Reemplazar los productos precargados por los productos del comercio
  return (
    <>
      <ScrollContainer className={s.productsContainer}>
        {allproducts?.map((i, index) => (
          <Product
            key={index}
            name={i.altName}
            // name={i.name}
            description={i.description}
            price={i.price}
            // price={i.cost}
            bg={i.src}
            //bg={i.photo}
            openModal={openModal}
          />
        ))}
      </ScrollContainer>
      {commercePlan !== "m1" && (
        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          productData={productData}
          changeStyle={changeStyle}
        />
      )}
    </>
  );
}
