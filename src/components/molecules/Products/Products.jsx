import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import LoadingPage from "../LoadingPage/LoadingPage";
import s from "./Products.module.scss";

export default function Products({ changeStyle, commercePlan, aditionals }) {
  const allproducts = useSelector((state) => {
    const { allProducts, filtroPor, allAditionals, products, search } = state;
    if (search.length) return search;
    
    if (!filtroPor && !aditionals) {
      return allProducts.concat(products);
    }
    if (!filtroPor && aditionals) return allAditionals;

    return allProducts.filter((item) => item.category.id === filtroPor);
  });
  const { isOpen, openModal, closeModal, productData } = useModal(false);
  return (
    <>
      {allproducts.length ? (
        <ScrollContainer className={s.productsContainer}>
          {allproducts?.map((i, index) => (
            <Product
              //? commentado momentaneamente para mostrar productos del back
              key={index}
              // name={i.altName}
              name={i.name}
              description={i.description ? i.description : ""}
              // price={i.price}
              price={i.cost}
              // bg={i.src}
              bg={i.photo}
              id={i.id}
              promotion={i.promotion}
              discount={i.discount}
              surcharge={i.surcharge}
              openModal={openModal}
              product={i.product}
              aditional={i.aditional}
              menuTypeId={i.menuType ? i.menuType.id : ""}
              categoryId={i.category ? i.category.id : ""}
              unitTypeId={i.unitType ? i.unitType.id : ""}
              productTypeId={i.productType ? i.productType.id : ""}
              supplierId={i.supplier ? i.supplier.id : ""}
              allergenType={i.allergenType ? i.allergenType : ""}
              careful={i.careful ? i.careful : ''}
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
