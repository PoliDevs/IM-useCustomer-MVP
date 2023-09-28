import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import LoadingPage from "../LoadingPage/LoadingPage";
import s from "./Products.module.scss";

export default function Products({ changeStyle, commercePlan }) {
  const allproducts = useSelector((state) => {
    const { allProducts, filtroPor } = state;
    if (!filtroPor) {
      return allProducts;
    }
    return allProducts.filter((item) => item.category.id === filtroPor);
  });
  const { isOpen, openModal, closeModal, productData } = useModal(false);

  return (
    <>
      {allproducts ? (
        <ScrollContainer className={s.productsContainer}>
          {allproducts?.map((i, index) => (
            <Product
              //? commentado momentaneamente para mostrar productos del back
              key={index}
              // name={i.altName}
              name={i.name}
              description={i.description}
              // price={i.price}
              price={i.cost}
              // bg={i.src}
              bg={i.photo}
              openModal={openModal}
            />
          ))}
        </ScrollContainer>
      ) : (
        <LoadingPage />
      )}

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
