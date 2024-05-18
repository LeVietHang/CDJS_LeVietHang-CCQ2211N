import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/images/logo.webp";
import Slider from "./components/Slider.jsx";
import ChinhSachItem from "./components/ChinhSachItem.jsx";
import Database from "./data_fake.json";
import Product from "./components/Product.jsx";

import a1 from "./assets/images/a1.png";
import a2 from "./assets/images/a2.png";
import a3 from "./assets/images/a3.png";
import a4 from "./assets/images/a4.png";
import a5 from "./assets/images/a5.png";


import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaYoutube, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
function App() {
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} alt="logo" />
            </div>
            <div className="col-md-7">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Navbar
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Home
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Link
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                          Disabled
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-2 mt-1">
              <FaRegUser style={{ fontSize: "20px", marginRight: "15px" }} />
              <CiHeart style={{ fontSize: "20px", marginRight: "15px" }} />
              <MdLocalGroceryStore
                style={{ fontSize: "20px", marginRight: "15px" }}
              />
            </div>
          </div>
        </div>
      </header>
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
          <h1 class="text-center mt-3">Sản phẩm bán chạy</h1>
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
      <footer className="bg-light">
        <section class="hdl-footer pb-4">
          <div class="footer_container">
            <div class="row">
              <div class="col-md-4 pt-4">
                <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                <p class="pt-1">
                  <i>
                    {" "}
                    Copyright@ CELAH Shop chủ trương bắt nhịp theo xu hướng trang sức thời trang thế giới. Tất cả những thiết kế trang sức ra đời đều đạt đến sự hoàn hảo và tinh xảo lý tưởng, phù hợp với nhiều đối tượng khách hàng khác nhau, hướng đến sự trẻ trung, hiện đại và thanh lịch.
                  </i>
                </p>
                <p class="pt-1">
                  Địa chỉ: 79, ĐS 6, P.Phước Long B ,Q9,TP. Thủ Đức
                </p>
                <p class="pt-1">
                 Điện thoại: 0816 949 555 (call, zalo) - Email:
                  Viethang642@gmail.com
                </p>
                <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                <div class="social my-3">
                  <FaFacebook />
                  <FaInstagram />
                  <FaGoogle />
                  <FaYoutube />
                </div>
              </div>
              <div class="col-md-4 pt-4">
                <h3 class="widgettilte">
                  <strong>Liên hệ</strong>
                </h3>
              </div>
              <div class="col-md-4 pt-4 text-end">
                <h3 class="fs-5 text-end">
                  <strong>Lượt truy cập</strong>
                </h3>
                <p class="my-1">9999 lượt</p>
              </div>
            </div>
          </div>
        </section>
        <section class="dhl-copyright bg-dark py-3">
          <div class="container text-center text-white">
            Thiết kế bởi: Lê Việt Hằng- Phone: 0816 949 555
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
