import React from "react";
import { useState } from "react";
const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: "url('https://img.thuthuatphanmem.vn/uploads/2018/10/11/anh-dep-may-bay-cuoi-chieu_041751300.jpg')" }}
    >
      <div className="bg-blue-900 p-8 rounded-lg shadow-lg text-white w-96">
        <h1 className="text-3xl mb-6 text-center">FlyWithMe</h1>
        <div className="flex justify-center mb-6">
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              isLogin ? "bg-blue-600" : "bg-transparent"
            } text-white`}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              !isLogin ? "bg-blue-600" : "bg-transparent"
            } text-white`}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </button>
        </div>

        {isLogin ? (
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">
                Nhập tên/email
              </label>
              <input
                type="text"
                id="email"
                placeholder="mylinh051004@gmail.com"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-left mb-2">
                Nhập mật khẩu
              </label>
              <input
                type="text"
                id="password"
                placeholder
                className="w-full px-3 py-2 rounded-full border border-gray-300 color: black;"
              />
            </div>
            <button
              type="button"
              id="submitButton"
              className="w-full py-2 bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
            >
              Đăng nhập
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">
                Nhập tên/email
              </label>
              <input
                type="text"
                id="email"
                placeholder="mylinh051004@gmail.com"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sdt" className="block text-left mb-2">
                Nhập số điện thoại
              </label>
              <input
                type="text"
                id="sdt"
                placeholder="090********"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-left mb-2">
                Nhập mật khẩu
              </label>
              <input
                type="text"
                id="password"
                placeholder="********************"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rtpassword" className="block text-left mb-2">
                Nhập lại mật khẩu
              </label>
              <input
                type="text"
                id="rtpassword"
                placeholder="********************"
                className="w-full px-3 py-2 rounded-full border border-gray-300"
              />
            </div>
            <button
              type="button"
              id="submitButton"
              className="w-full py-2 bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
            >
              Đăng ký
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
