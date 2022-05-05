import React from "react";
import { useParams } from "react-router-dom";
import ProductTable from "./ProductTable";
import style from "./Style/Product.module.css";
const Product = () => {
  const { id } = useParams();

  return (
    <section className={style.product}>
      <div className="container">
        <div className="row-g-3">
          <div className="col-lg-3">
            <ProductTable />
          </div>
          <div className="col-lg-9"></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
