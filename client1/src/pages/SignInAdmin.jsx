import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { Form, Input, Button, notification } from 'antd';
const SignInAdmin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        passWord: "",
        name: "",
        phoneNum: "",
        rtpassword: ""
    });
    const { login, isAdmin } = useAuth();
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async () => {
        const url = isLogin ? "http://localhost:4000/api/signInAdmin" : "http://localhost:4000/api/signup";
        try {
            const response = await axios.post(url, formData);
            setNotification(isLogin ? "Đăng nhập thành công!" : "Đăng ký thành công!");

            if (isLogin) {
                login(response.data);
                if (isAdmin()) {
                    navigate("/Admin");
                } 
            }
        } catch (error) {
            setNotification(isLogin ? "Đăng nhập thất bại. Vui lòng kiểm tra lại!" : "Đăng ký thất bại. Vui lòng kiểm tra lại!");
            console.error("Error during submission:", error);
        }
    };

    return (
        <div
            className="flex items-center justify-center h-screen bg-cover"
            style={{ backgroundImage: "url('https://img.thuthuatphanmem.vn/uploads/2018/10/11/anh-dep-may-bay-cuoi-chieu_041751300.jpg')" }}
        >
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg text-white w-96">
                <h1 className="text-3xl mb-6 text-center">FlyWithMe</h1>
                <div className="flex justify-center mb-6">
                    <button
                        className={`mx-2 px-4 py-2 rounded-full ${isLogin ? "bg-blue-600" : "bg-transparent"} text-white`}
                        onClick={() => {
                            setIsLogin(true);
                            setFormData({ email: "", passWord: "" }); // Reset form data for login
                            setNotification("");
                        }}
                    >
                        Đăng nhập
                    </button>
                    <button
                        className={`mx-2 px-4 py-2 rounded-full ${!isLogin ? "bg-blue-600" : "bg-transparent"} text-white`}
                        onClick={() => {
                            setIsLogin(false);
                            setFormData({ email: "", passWord: "", name: "", phoneNum: "", rtpassword: "" }); // Reset form data for signup
                            setNotification("");
                        }}
                    >
                        Đăng ký
                    </button>
                </div>

                {notification && (
                    <div className="mb-4 text-center text-green-500">
                        {notification}
                    </div>
                )}

                {isLogin ? (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left mb-2">
                                Nhập email
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="mylinh051004@gmail.com"
                                className="w-full px-3 py-2 rounded-full border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="passWord" className="block text-left mb-2">
                                Nhập mật khẩu
                            </label>
                            <Input.Password
                                type="text" 
                                id="passWord"
                                value={formData.passWord}
                                onChange={handleChange}
                                placeholder="********"
                                className="w-full px-3 py-2 rounded-full border border-gray-300"
                            />
                        </div>
                        <button
                            type="button"
                            className="w-full py-2 bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
                            onClick={handleSubmit}
                        >
                            Đăng nhập
                        </button>
                    </div>
                ) : (
                    <div>
                       <h1>Just a fun button, you cant register admin :)
                        but you can join us by
                        Contact our email flywithme@gmail.com
                       </h1>
                    </div>
                )}
                <Link to='/SignUp'>      
                <div className="float-right mt-8 cursor-pointer text-[#003278]">User</div>
            </Link>
                 </div>
        </div>
    );
};

export default SignInAdmin;
