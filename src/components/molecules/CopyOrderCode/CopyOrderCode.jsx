import React from 'react';
import { ReactComponent as Copy } from '../../../assets/Copy.svg';
import { useState } from 'react';
import s from './CopyOrderCode.module.scss';
export default function CopyOrderCode() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const element = document.querySelector(".copyText");
    const text = element.textContent;
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button onClick={handleCopy} style={{backgroundColor: "transparent", border: "none", display: "flex"}}>
      <Copy className={s.copyIcon}/>
    </button>
  );
}
