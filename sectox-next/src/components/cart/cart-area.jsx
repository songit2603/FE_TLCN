import Link from "next/link";
import React, { useState } from "react";

const CartArea = () => {

  // const [minus, setMinus]  = useState(3)
  // const [plus, setPlus]  = useState(3)

  const [value, setValue]  = useState(1)

  const addValue = () => {
    setValue(value + 1);
  };
  
  const subtractValue = () => {
    if(value > 1 ){ 
      setValue(value - 1);
    }  
  };



  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Hình ảnh</th>
                        <th className="cart-product-name">Sản phẩm</th>
                        <th className="product-price">Đơn giá</th>
                        <th className="product-quantity">Số lượng</th>
                        <th className="product-subtotal">Tổng tiền</th>
                        <th className="product-remove">Loại bỏ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img
                              src="/assets/img/shop/shop-1.jpg"
                              alt="theme-pure"
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="#">
                            Black+Decker 4 Inch 820W
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus" onClick={subtractValue}>-</span>
                          <input className="cart-input" type="text" placeholder={value} />
                          <span className="cart-plus" onClick={addValue}>+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$130.00</span>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="fa fa-times"></i>
                          </a>
                        </td>                        
                      </tr>

                      {/* <tr>
                        <td className="product-thumbnail">
                          <Link href="#">
                            <img
                              src="/assets/img/shop/shop-2.jpg"
                              alt="theme-pure"
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="#">
                            DEWALT 20V Max Cordless
                          </Link>
                        </td>
                        <td className="product-price">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-quantity">
                          <span className="cart-minus">-</span>
                          <input className="cart-input" type="text" placeholder="1" />
                          <span className="cart-plus">+</span>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">$120.50</span>
                        </td>
                        <td className="product-remove">
                          <a href="#">
                            <i className="fa fa-times"></i>
                          </a>
                        </td>
                      </tr> */}

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <h3>Mã giảm giá</h3>
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                        //   value=""
                          type="text"
                        />
                        <button
                          className="tp-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Áp dụng mã giảm giá
                        </button>
                      </div>
                      <div className="coupon2">
                        <Link
                          className="tp-btn"
                          name="update_cart"
                          type="submit"
                          href="/shop"
                        >
                          Tiếp tục mua hàng
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div className="col-md-5 ">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>$250.00</span>
                        </li>
                        <li>
                          Tổng <span>$250.00</span>
                        </li>
                      </ul>
                      <Link className="tp-btn" href="/checkout">
                        Tiến hành đặt hàng
                      </Link>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;
