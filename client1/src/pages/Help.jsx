import React from 'react';
import '../index.css'
const Help = () => {
  return (
    <div className="font-sans bg-gray-100">
      
      <div 
        className="relative h-96 flex justify-center items-center text-center text-white" 
        style={{ background: "url('https://www.aman.com/sites/default/files/styles/full_site_width/public/2023-07/amanoi-vietnam.jpg?itok=19RBZrw7') no-repeat center center/cover" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg max-w-3xl mx-auto text-black">
          <h1 className="text-3xl font-bold mb-4">Trợ giúp và hỗ trợ</h1>
          <p className="mb-6">Bạn có thể sử dụng phần này để tìm cách liên hệ với chúng tôi phù hợp nhất để được hỗ trợ.</p>
          <div className="flex justify-center mt-4">
            <input 
              type="text" 
              placeholder="Bạn cần giúp gì?" 
              className="w-full max-w-xl p-2 border border-gray-300 rounded-l-md" 
            />
            <button className="bg-red-700 text-white py-2 px-4 rounded-r-md">Tìm kiếm</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto my-10 max-w-7xl flex-wrap gap-4">
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=111425&format=png&color=000000" 
            alt="Dubai Connect" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Dubai Connect</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=23&format=png&color=000000" 
            alt="Hủy/Thay đổi chuyến bay" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Hủy/Thay đổi chuyến bay</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=ZphXEvsblErk&format=png&color=000000" 
            alt="Quản lý đặt chỗ" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Quản lý đặt chỗ</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=23&format=png&color=000000" 
            alt="Yêu cầu hoàn tiền" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Yêu cầu hoàn tiền</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=36172&format=png&color=000000" 
            alt="Sức khỏe trong chuyến đi" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Sức khỏe trong chuyến đi</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=Dd8LD_j20IiH&format=png&color=000000" 
            alt="Truy vấn về hành lý" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Truy vấn về hành lý</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=53514&format=png&color=000000" 
            alt="Cập nhật về tình trạng gián đoạn dịch vụ" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Cập nhật về tình trạng gián đoạn dịch vụ</p>
        </div>
        <div className="bg-white rounded-lg p-5 text-center w-36 shadow-md">
          <img 
            src="https://img.icons8.com/?size=100&id=10568&format=png&color=000000" 
            alt="Khiếu nại & phản hồi" 
            className="h-12 mx-auto mb-4" 
          />
          <p>Khiếu nại & phản hồi</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
