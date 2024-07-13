import React from 'react'
import '../index.css'
const Header = ({children}) => {
  return (
    <div>
      <nav class="bg-gray-800 flex justify-between items-center p-4">
                <ul class="flex space-x-5">
                    <li><p class="text-white font-bold">ĐẶT CHỖ</p></li>
                    <li><p class="text-white font-bold">QUẢN LÝ</p></li>
                    <li><p class="text-white font-bold">TRẢI NGHIỆM</p></li>
                    <li><p class="text-white font-bold">CÁC ĐIỂM ĐẾN CỦA CHÚNG TÔI</p></li>
                    <li><p class="text-white font-bold">KHÁCH HÀNG THÂN THIẾT</p></li>
                    <li><p class="text-white font-bold">TRỢ GIÚP</p></li>
                </ul>
                <ul class="flex space-x-5">
                    <li><p class="text-white font-bold">VN</p></li>
                    <li><p class="text-white font-bold">&#128269;</p></li>
                    <li><p class="text-white font-bold">&#128100; ĐĂNG NHẬP</p></li>
                </ul>
            </nav>
            {children}
    </div>
  )
}

export default Header
