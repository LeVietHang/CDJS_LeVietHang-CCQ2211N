import React from 'react'
import Hearder from "../../components/Header";
import MainDetail from "../../components/mainDetail";
import Footer from "../../components/Footer";

const ProductDetail = () => {
  return (
    <div>
      <>
      {/* header */}
      <div className="Header"> <Hearder /> </div>
      {/* main */}
      <div className="Main"> <MainDetail/>  </div>
      {/* footer */}
      <div className="Footer"> <Footer/> </div>
    </>
    </div>
  );
};

export default ProductDetail;
