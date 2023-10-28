
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.scss';
import './scss/semantic-ui/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './redux/store/index.js';
// import { I18nextProvider } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_Es from './translations/es/global.json';
import global_En from './translations/en/global.json';
import global_Pt from './translations/por/global.json';
import global_Pt_bra from './translations/pt-br/global.json';

i18next.init({
  interpolation:{escapeValue:false},
  lng: localStorage.getItem("Lang") ? localStorage.getItem("Lang") : "Es",
  resources:{
    es:{
      global:global_Es
    },
    en:{
      global:global_En
    },
    por:{
      global:global_Pt
    },
    bra:{
      global:global_Pt_bra
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
/*   <React.StrictMode> */
<Provider store={store} >
    <BrowserRouter>
    <I18nextProvider i18n={i18next} >
    <App />
    </I18nextProvider>
    </BrowserRouter>
</Provider>
/*   </React.StrictMode>, */
)
