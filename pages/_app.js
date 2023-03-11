import { useEffect } from "react";
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require('bootstrap/dist/css/bootstrap.css');
    require('bootstrap/dist/js/bootstrap.bundle.min');
  },[])

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
