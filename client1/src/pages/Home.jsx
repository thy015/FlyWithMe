import React from 'react'
import '../index.css'
const Home = () => {
  return (
    <div>
        <div>
            <img className='h-72 w-full relative'src='https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/07/6d0843c31c1cfa00c9b5b3ed28b041c9.jpg' alt='beach'></img>
        </div>
    <div class="container">
                <h2>Đặt chỗ chuyến bay</h2>
                <p>Tìm kiếm các chuyến bay Emirates và đặt vé trực tuyến. Xem các tuyến đường và lịch trình của chúng
                    tôi, đồng thời khám phá thêm về trải nghiệm bạn có thể mong đợi trên chuyến bay.</p>

                <form id="booking-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="origin">Sân bay khởi hành:</label>
                            <input type="text" id="origin" value="Thành phố Hồ Chí Minh (SGN)" readonly/>
                        </div>

                        <div class="form-group">
                            <label for="destination">Sân bay đến:</label>
                            <input type="text" id="destination"/>
                        </div>

                        <div class="form-group">
                            <label for="departure">Khởi hành:</label>
                            <input type="date" id="departure"/>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="return">Khứ hồi:</label>
                            <input type="date" id="return"/>
                        </div>

                        <div class="form-group">
                            <label for="passengers">Hành khách:</label>
                            <div class="dropdown">
                                <button id="passengerButton" class="dropbtn" type="button">1 Người lớn</button>
                                <div id="passengerDropdown" class="dropdown-content">
                                    <h3>Hành khách</h3>
                                    <div class="passenger-type">
                                        <span>1 Người lớn</span>
                                        <div class="controls">
                                            <button class="minus">-</button>
                                            <span class="count">1</span>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <div class="passenger-type">
                                        <span>0 Trẻ em</span>
                                        <div class="controls">
                                            <button class="minus">-</button>
                                            <span class="count">0</span>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <div class="passenger-type">
                                        <span>0 Trẻ sơ sinh</span>
                                        <div class="controls">
                                            <button class="minus">-</button>
                                            <span class="count">0</span>
                                            <button class="plus">+</button>
                                        </div>
                                    </div>
                                    <p>Vui lòng lưu ý: Bạn có thể đặt chỗ tối đa cho 9 hành khách trong mỗi lần đặt chỗ.</p>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="class">Hạng:</label>
                            <select id="class">
                                <option value="economy">Hạng Phổ thông</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit">Tìm kiếm chuyến bay</button>
                </form>

                <p>Đăng nhập để tích lũy và sử dụng Dặm thưởng Skywards</p>
                <p>Tìm kiếm nâng cao: nhiều thành phố, mã khuyến mãi, hãng hàng không đối tác </p>
            </div>
            <div class="container">
                <h3>Cách đặt vé máy bay với Emirates</h3>
                <h4>Đặt vé máy bay trực tuyến</h4>
                <p>Để tìm vé máy bay phù hợp cho chuyến đi của bạn, chỉ cần nhập địa điểm mà bạn khởi hành và điểm đến
                    của chuyến bay. Nhập ngày tháng, hạng bay và số lượng hành khách. Chọn 'Tìm kiếm chuyến bay' để tiếp
                    tục quy trình đặt vé máy bay trực tuyến và đặt vé máy bay phù hợp với kế hoạch du lịch của bạn.</p>
                <h4>So sánh giá vé máy bay</h4>
                <p>Hãy chú ý nhãn Đảm bảo giá tốt nhất của chúng tôi để đảm bảo bạn sẽ nhận được giá vé máy bay tốt nhất
                    khi đặt chuyến bay với Emirates.</p>
            </div>
            </div>
  
);
};


export default Home
