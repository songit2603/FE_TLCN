import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Register from "./Register";
import Footer from "@/src/layout/footers/footer";

const RegisterPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb title="Đăng ký" innertitle="Hãy để chúng tôi đáp ứng nhu cầu của bạn." />
        <Register />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;