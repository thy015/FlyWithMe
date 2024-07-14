import React from "react";
import "../index.css";
import { useEffect } from "react";

const Home = () => {
  return (
    useEffect(() => {
        const dropdown = document.getElementById("passengerDropdown");
        const button = document.getElementById("passengerButton");
    
        button.addEventListener("click", function () {
          dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
        });
    
        document.addEventListener("click", function (e) {
          if (!e.target.closest(".dropdown") && !e.target.closest(".dropbtn")) {
            dropdown.style.display = "none";
          }
        });
    
        const plusButtons = document.querySelectorAll(".plus");
        const minusButtons = document.querySelectorAll(".minus");
        const counts = document.querySelectorAll(".count");
    
        plusButtons.forEach((btn, index) => {
          btn.addEventListener("click", function (e) {
            e.stopPropagation();
            let count = parseInt(counts[index].textContent);
            if (count < 9) {
              counts[index].textContent = count + 1;
              updateButtonLabel();
            }
          });
        });
    
        minusButtons.forEach((btn, index) => {
          btn.addEventListener("click", function (e) {
            e.stopPropagation();
            let count = parseInt(counts[index].textContent);
            if (count > 0) {
              counts[index].textContent = count - 1;
              updateButtonLabel();
            }
          });
        });
    
        function updateButtonLabel() {
          const adultCount = parseInt(counts[0].textContent);
          const childCount = parseInt(counts[1].textContent);
          const infantCount = parseInt(counts[2].textContent);
    
          let label = `${adultCount} Người lớn`;
          if (childCount > 0) {
            label += `, ${childCount} Trẻ em`;
          }
          if (infantCount > 0) {
            label += `, ${infantCount} Trẻ sơ sinh`;
          }
    
          button.textContent = label;
        }
      }, []),
    (
      <div>
        <div>
          <img
            className="h-96 w-full object-cover"
            src="https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2017/07/6d0843c31c1cfa00c9b5b3ed28b041c9.jpg"
            alt="beach"
          ></img>
        </div>
        <div class="container mx-auto bg-white shadow-lg p-6 mt-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2>Đặt chỗ chuyến bay</h2>
          <p>
            Tìm kiếm các chuyến bay Emirates và đặt vé trực tuyến. Xem các tuyến
            đường và lịch trình của chúng tôi, đồng thời khám phá thêm về trải
            nghiệm bạn có thể mong đợi trên chuyến bay.
          </p>

          <form id="booking-form">
            <div class="form-row">
              <div class="form-group">
                <label for="origin">Sân bay khởi hành:</label>
                <input
                  type="text"
                  id="origin"
                  value="Thành phố Hồ Chí Minh (SGN)"
                  readonly
                />
              </div>

              <div class="form-group">
                <label for="destination">Sân bay đến:</label>
                <input
                  type="text"
                  id="destination"
                  value="Hà Nội(HAN)"
                  readonly
                />
              </div>

              <div class="form-group">
                <label for="departure">Khởi hành:</label>
                <input type="date" id="departure" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="return">Khứ hồi:</label>
                <input type="date" id="return" />
              </div>

              <div class="form-group">
                <label for="passengers">Hành khách:</label>
                <div class="dropdown">
                  <button id="passengerButton" class="dropbtn" type="button">
                    1 Người lớn
                  </button>
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
                    <p>
                      Vui lòng lưu ý: Bạn có thể đặt chỗ tối đa cho 9 hành khách
                      trong mỗi lần đặt chỗ.
                    </p>
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
            <div className="float-right">
            <button type="submit">Tìm kiếm chuyến bay</button></div>
          </form>
          <p>Đăng nhập để tích lũy và sử dụng Dặm thưởng Skywards</p>
          <p>
            Tìm kiếm nâng cao: nhiều thành phố, mã khuyến mãi, hãng hàng không
            đối tác{" "}
          </p>
          
        </div>
        <div className=" h-[600px]"></div>

        <div className="container bg-white shadow-lg  absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2 top-[90%]">
          <h3>Cách đặt vé máy bay với Emirates</h3>
          <h4 className="justify-center text-center">Đặt vé máy bay trực tuyến</h4>
          <p>
            Để tìm vé máy bay phù hợp cho chuyến đi của bạn, chỉ cần nhập địa
            điểm mà bạn khởi hành và điểm đến của chuyến bay. Nhập ngày tháng,
            hạng bay và số lượng hành khách. Chọn 'Tìm kiếm chuyến bay' để tiếp
            tục quy trình đặt vé máy bay trực tuyến và đặt vé máy bay phù hợp
            với kế hoạch du lịch của bạn.
          </p>
          <h4 className="justify-center text-center">So sánh giá vé máy bay</h4>
          <p>
            Hãy chú ý nhãn Đảm bảo giá tốt nhất của chúng tôi để đảm bảo bạn sẽ
            nhận được giá vé máy bay tốt nhất khi đặt chuyến bay với Emirates.
          </p>
        </div>
        <div>
        <div class="w-[60%] mx-auto flex flex-wrap justify-center p-4">
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPWem2wxv-S9SvbwOIEGu0o08xqWWOn6OEg&s" alt="Dubai" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Dubai</h2>
    <p class="text-lg">Từ VNĐ 19,460,000*</p>
    <p class="text-lg">Các tiểu vương quốc ả rập thống nhất</p>
  </div>
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://dulichsaigonstar.com/wp-content/uploads/2023/10/frankfurt1.jpg" alt="Frankfurt" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Frankfurt</h2>
    <p class="text-lg">Từ VNĐ 22,620,000*</p>
    <p class="text-lg">Đức</p>
  </div>
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/04/ciudad-vieja-praga.jpg" alt="Pragute" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Pragute</h2>
    <p class="text-lg">Từ VNĐ 23,560,000*</p>
    <p class="text-lg">Cộng hòa Séc</p>
  </div>
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://cdn.britannica.com/45/196945-050-CCF8BD72/Temple-of-Saturn-Arch-Septimius-Severus-Forum.jpg" alt="Rome" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Rome</h2>
    <p class="text-lg">Từ VNĐ 24,380,000*</p>
    <p class="text-lg">Ý</p>
  </div>
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg" alt="Paris" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Paris</h2>
    <p class="text-lg">Từ VNĐ 18,380,000*</p>
    <p class="text-lg">Pháp</p>
  </div>
  <div class="card w-72 m-2 border border-gray-300 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-md">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8Nbi3bakSMjLeNzT4ibxscN-yYdbicYiBg&s" alt="Japan" class="w-full h-48 object-cover rounded-lg"/>
    <h2 class="text-xl mt-2">Japan</h2>
    <p class="text-lg">Từ VNĐ 12,500,000*</p>
    <p class="text-lg">Nhật bản</p>
  </div>
</div>

        </div>
      </div>
    )
  );
};

export default Home;
