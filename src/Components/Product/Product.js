import CandleChart from "Charts/CandleChart";
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import ProductTable from "./ProductTable";
import style from "./Style/Product.module.css";
const Product = () => {
  const { id } = useParams();

  return (
    <section className={style.product}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4">
            <ProductTable />
          </div>
          <div className="col-lg-8">
           <div className="col-12">
           <ProductDetail name={id} />
           </div>
            <div className="col-12">
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
