import React from 'react'

import { FaYoutube, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
<footer className="bg-light">
<section class="hdl-footer pb-4">
  <div class="footer_container">
    <div class="row">
      <div class="col-md-4 pt-4">
        <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
        <p class="pt-1">
          <i>
            {" "}
            Copyright@ CELAH Shop chủ trương bắt nhịp theo xu hướng
            trang sức thời trang thế giới. Tất cả những thiết kế trang
            sức ra đời đều đạt đến sự hoàn hảo và tinh xảo lý tưởng,
            phù hợp với nhiều đối tượng khách hàng khác nhau, hướng
            đến sự trẻ trung, hiện đại và thanh lịch.
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
    Thiết kế bởi: Lê Việt Hằng - Phone: 0816 949 555
  </div>
</section>
</footer>
    );
};
export default Footer;
