import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductInfo from "./ProductInfo";
import "./HomeStyle.css";

const SideBar = ({ camera, qrId, prodInfo }) => {
  const [productInfo, setProductInfo] = useState(null);
  const { getProductById } = useContext(ProductsContext);
  //   console.log(qrId);

  useEffect(() => {
    const product = getProductById(qrId);
    product.then((prod) => setProductInfo(prod));
    // setProductInfo(product);
  }, [qrId]);

  return (
    <div className="sidebar">
      <section className="cameras">
        <h2>Cameras</h2>
        <ul>
          {camera ? (
            <li className="active">Integrated Camera</li>
          ) : (
            <li className="empty">No Cameras found</li>
          )}
        </ul>
      </section>
      <section className="scans">
        <h2>Scans</h2>
        <ul>
          {!qrId ? (
            <li className="empty">No Scan found</li>
          ) : (
            <li className="scans-enter">{qrId}</li>
          )}
        </ul>
      </section>
      <section className="items">
        <h2>Product Information</h2>
        <ProductInfo productInfo={productInfo} />
      </section>
    </div>
  );
};

export default SideBar;
