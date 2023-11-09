import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import CartArea from "./cart-area";
import Footer from "@/src/layout/footers/footer";

const Cart = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Giỏ hàng" innertitle="Giỏ hàng của tôi" />
      <CartArea />
      <Footer />
    </>
  );
};

export default Cart;
