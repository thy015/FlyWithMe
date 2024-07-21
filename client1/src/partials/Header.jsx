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
          <Link to="/Control" className="no-underline">
            <p class="text-white font-bold">QUẢN LÝ</p>
            </Link>
          </li>
          <li>
          <Link to="/IpFutures" className="no-underline">
            <p class="text-white font-bold">TRẢI NGHIỆM</p>
            </Link>
          </li>
          <li>
          <Link to="/PlaceToCome" className="no-underline">
            <p class="text-white font-bold">CÁC ĐIỂM ĐẾN CỦA CHÚNG TÔI</p>
            </Link>
          </li>
          <li>
          <Link to="/Help" className="no-underline">
            <p class="text-white font-bold">TRỢ GIÚP</p>
            </Link>
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
