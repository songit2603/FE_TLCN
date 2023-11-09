import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Login from "./Login";
import Footer from "@/src/layout/footers/footer";

const LoginPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb title="Đăng nhập" innertitle="Chào mừng bạn đến với Sectox." />
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;