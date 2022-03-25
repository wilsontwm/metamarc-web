let API_ROOT_URL = "";
let INFURA_KEY = "60ab76e16df54c808e50a79975b4779f";
let isProduction = false;
let isDev = false;

const isBrowser = () => typeof window !== "undefined";

if (isBrowser()) {
  if ((window.location.href.indexOf("http://127.0.0.1") > -1) | (window.location.href.indexOf("http://localhost") > -1)) {
    //API_ROOT_URL = "https://sb-api.metamarc.com";
    API_ROOT_URL = "http://localhost:5000";
    isDev = true;
  } else if (window.location.href.indexOf("https://sb.metamarc.com/") > -1) {
    API_ROOT_URL = "https://sb-api.metamarc.com";
    isDev = true;
  } else {
    isProduction = true;
    API_ROOT_URL = "https://api.metamarc.com";
  }
}

export default {
  isProduction,
  isDev,
  API_ROOT_URL: `${API_ROOT_URL}`,
  INFURA_KEY,
};
