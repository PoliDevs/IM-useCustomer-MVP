import { useSelector } from "react-redux";
import useModal from "../../../utils/Functions";
import ScrollContainer from "react-indiana-drag-scroll";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import LoadingPage from "../LoadingPage/LoadingPage";
import s from "./Products.module.scss";
import productDataMock from "../../../data.json";
import SubTitle from "../../atoms/SubTitle/SubTitle";
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
  // const allproducts = productDataMock.Products.allproducts;
  // console.log(allproducts);
  console.log(allproducts)
  const productsByCategory = allproducts.reduce((acc, product) => {
    if (!acc[product.category.id]) {
      acc[product.category.id] = [];
    }
    acc[product.category.id].push(product);
    return acc;
  }, {});
  const { isOpen, openModal, closeModal, productData } = useModal(false);
  return (
    <>
      {Object.keys(productsByCategory).length ? (
        <ScrollContainer className={s.productsContainer}>
          {Object.keys(productsByCategory).map((categoryId) => (
            <div key={categoryId} className={s.titleConteiner}>
              <SubTitle alignment={"left"}>{allproducts.find(product => product.category.id === categoryId)?.category.name}</SubTitle>
              {productsByCategory[categoryId].map((product, index) => (
                <Product
                  key={index}
                  name={product.name || ""}
                  description={product.description || ""}
                  price={product.cost || 0}
                  bg={product.photo || ""}
                  id={product.id || ""}
                  promotion={product.promotion || false}
                  discount={product.discount || 0}
                  surcharge={product.surcharge || 0}
                  openModal={openModal}
                  product={product.product || false}
                  aditional={product.aditional || false}
                  menuTypeId={product.menuType ? product.menuType.id : ""}
                  categoryId={product.category ? product.category.id : ""}
                  unitTypeId={product.unitType ? product.unitType.id : ""}
                  productTypeId={
                    product.productType ? product.productType.id : ""
                  }
                  supplierId={product.supplier ? product.supplier.id : ""}
                  allergenType={product.allergenType || ""}
                  careful={product.careful || false}
                />
              ))}
            </div>
          ))}
        </ScrollContainer>
      ) : (
        <LoadingPage small={true} />
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
    // <>
    //   {allproducts.length ? (
    //     <ScrollContainer className={s.productsContainer}>
    //       {allproducts?.map((i, index) => (
    //         <Product
    //           //? commentado momentaneamente para mostrar productos del back
    //           key={index}
    //           // name={i.altName}
    //           name={i.name}
    //           description={i.description ? i.description : ""}
    //           // price={i.price}
    //           price={i.cost}
    //           // bg={i.src}
    //           bg={i.photo}
    //           id={i.id}
    //           promotion={i.promotion}
    //           discount={i.discount}
    //           surcharge={i.surcharge}
    //           openModal={openModal}
    //           product={i.product}
    //           aditional={i.aditional}
    //           menuTypeId={i.menuType ? i.menuType.id : ""}
    //           categoryId={i.category ? i.category.id : ""}
    //           unitTypeId={i.unitType ? i.unitType.id : ""}
    //           productTypeId={i.productType ? i.productType.id : ""}
    //           supplierId={i.supplier ? i.supplier.id : ""}
    //           allergenType={i.allergenType ? i.allergenType : ""}
    //           careful={i.careful ? i.careful : ""}
    //         />
    //       ))}
    //     </ScrollContainer>
    //   ) : (
    //     <LoadingPage small={true} />
    //   )}

    //   {commercePlan !== "m1" && (
    //     <Modal
    //       isOpen={isOpen}
    //       closeModal={closeModal}
    //       productData={productData}
    //       changeStyle={changeStyle}
    //     />
    //   )}
    // </>
  );
}
