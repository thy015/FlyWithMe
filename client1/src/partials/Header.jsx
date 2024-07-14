import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const Header = ({ children }) => {
  return (
    <div>
      <nav class="bg-gray-800 flex justify-between items-center p-4">
        <ul class="flex space-x-5">
          <li>
            {" "}
            <Link to="/" className="no-underline">
              <p class="text-white font-bold">ĐẶT CHỖ</p>
            </Link>
          </li>
          <li>
            <p class="text-white font-bold">QUẢN LÝ</p>
          </li>
          <li>
            <p class="text-white font-bold">TRẢI NGHIỆM</p>
          </li>
          <li>
            <p class="text-white font-bold">CÁC ĐIỂM ĐẾN CỦA CHÚNG TÔI</p>
          </li>
          <li>
            <p class="text-white font-bold">KHÁCH HÀNG THÂN THIẾT</p>
          </li>
          <li>
            <p class="text-white font-bold">TRỢ GIÚP</p>
          </li>
        </ul>
        <ul class="flex space-x-5">
          <li>
            <p class="text-white font-bold">VN</p>
          </li>
          <li>
            <Link to="/SignUp" className="no-underline text-white font-bold">
              ĐĂNG NHẬP
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Header;
