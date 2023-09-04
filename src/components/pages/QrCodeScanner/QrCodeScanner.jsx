/* eslint-disable react/prop-types */
import { Html5QrcodeScanType, Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HugeTitle from "../../atoms/HugeTitle/HugeTitle";
import s from "./QrCodeScanner.module.scss";

export default function Qr({scanResult, setScanResult}) {
  // const [scanResult, setScanResult] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 400,
        height: 450,
      },
      fps: 10,
      disableFlip: false,
      rememberLastUsedCamera: false,
      aspectRatio: 1.0,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
      formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
      showTorchButtonIfSupported: true,
    });

    scanner.render(success, error);
    //{ facingMode: "environment" } para preferir camara trasera
    function success(result) {
      scanner.clear(); //desinyecta el scanner del dom
      setScanResult(JSON.parse(result));
      localStorage.setItem("commerce", result);
      navigate('/welcome')
    }

    function error(error) {
      console.warn(error);
    }
  }, []);

  return (
    <div
      className={s.mainContainer}
    >
      <div
        id="reader"
        className={s.scannerContainer}
      ></div>
      <HugeTitle text={"Escanea un Qr"}/>
    </div>
  );
}
