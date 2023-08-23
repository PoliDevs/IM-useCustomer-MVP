import { useState } from "react";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import s from "./Modal.module.scss";
import TextArea from "../../atoms/TextArea/TextArea";

export default function Modal({ image, name, description, price }) {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  return <section className={s.modal}>
    <img src={image} alt={`${name} icon`} />
   <HugeTitle text={name}/>
   <Paragraph text={description}/>
   <SubTitle text={`$ ${price}`} />
   <TextArea text={comment} onChange={handleChange}/>
  </section>;
}
