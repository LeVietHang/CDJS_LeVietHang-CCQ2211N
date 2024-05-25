import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Slider from "../../components/Slider.jsx";
import ChinhSachItem from "../../components/ChinhSachItem.jsx";

import a1 from "../../assets/images/a1.png";
import a2 from "../../assets/images/a2.png";
import a3 from "../../assets/images/a3.png";
import a4 from "../../assets/images/a4.png";
import a5 from "../../assets/images/a5.png";

import { FaBell } from "react-icons/fa";
import { Children } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
const Home = () => {
  return (
  
      <>
       <Header />
        <Outlet/>
        <main>
          <Slider />
          <div className="ChinhSach">
            <div className="row py-5">
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1712652027135"
                  alt="chinhsach1"
                  title="Miễn Phí Vận Chuyển"
                  des="Cho đơn hàng từ 5000000"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_2.png?1712652027135"
                  alt="chinhsach1"
                  title="Đổi Hàng Tận Nhà"
                  des="Trong vòng 7 ngày"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_3.png?1712652027135"
                  alt="chinhsach1"
                  title="Thanh Toán COD"
                  des="Hoặc thanh toán quét mã QR"
                />
              </div>
              <div className="col-md-3">
                <ChinhSachItem
                  image="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_4.png?1712652027135"
                  alt="chinhsach1"
                  title="Hotline: 1900 12345"
                  des="Hỗ trợ từ 08h00 đến 22h00"
                />
              </div>
            </div>
            <hr />
          </div>

          <div>
            <h1 class="text-center mt-3">New Product</h1>
            <div class="row">
              <div class="col-md-3">
                <div class="card">
                  <img src={a2} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a1} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a2} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a3} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-3">
                <div class="card">
                  <img src={a4} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a5} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a1} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a2} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 class="text-center mt-3">Best Seller</h1>
            <div class="row">
              <div class="col-md-3">
                <div class="card">
                  <img src={a4} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a5} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a3} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a5} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-3">
                <div class="card">
                  <img src={a1} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a5} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a4} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  <img src={a2} alt="logo" />
                  <div class="card-body">
                    <h5 class="card-title">Tên sản phẩm</h5>
                    <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                    <a href="#" class="btn btn-primary">
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      <Outlet />
      </>
  );
};
export default Home;
