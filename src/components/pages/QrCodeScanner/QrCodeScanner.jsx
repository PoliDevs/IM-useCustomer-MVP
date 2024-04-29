/* eslint-disable react/prop-types */
import {
  Html5QrcodeScanType,
  Html5QrcodeScanner,
  Html5QrcodeSupportedFormats,
} from "html5-qrcode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import s from "./QrCodeScanner.module.scss";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import { useSelector } from "react-redux";
export default function Qr({ scanResult, setScanResult }) {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation(["global"]);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 400,
        height: 450,
      },
      fps: 10,
      disableFlip: false,
      rememberLastUsedCamera: true,
      aspectRatio: 1.0,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      showTorchButtonIfSupported: true,
    });

    scanner.render(success);
    //{ facingMode: "environment" } para preferir camara trasera
    function success(result) {
      scanner.clear();
      const partesURL = result.split("/");
      console.log("partesurl", partesURL);
      const indexLanguage = partesURL.indexOf("language");
      console.log("indexLanguage", indexLanguage);
      if (indexLanguage !== -1 && indexLanguage < partesURL.length - 1) {
        const loQueVieneDespués = partesURL
          .slice(indexLanguage, partesURL.length)
          .join("/");
        console.log("loquevienedespues", loQueVieneDespués);
        navigate(loQueVieneDespués);
      } else {
        return;
      }
    }

    // function error(error) {
    //   console.warn(error);
    // }
  }, []);

  return (
    <div className={s.mainContainer}>
      <div id="reader" className={s.scannerContainer}></div>
      <SubTitle text={t("QrScanner.title")} />
    </div>
  );
}
