import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import ProductInfo from "./ProductInfo";

const Home = (props) => {
  const { getProductById } = useContext(ProductsContext);
  const [productInfo, setProductInfo] = useState(null);
  let location = useLocation();

  useEffect(() => {
    if (location.state) {
      const product = getProductById(location.state.qrId);
      product.then((prod) => setProductInfo(prod));
      // setProductInfo(product);
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/qr-scan">
        <button>Scan QR code</button>
      </Link>
      <ProductInfo productInfo={productInfo} />
    </div>
  );
};

export default Home;