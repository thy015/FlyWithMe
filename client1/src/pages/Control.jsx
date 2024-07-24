import React from "react";

const Control = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.hdqwalls.com/download/maldives-resorts-huts-over-water-22-1920x1080.jpg"
          className="h-[500px]  w-full"
        ></img>
      </div>
      <div class="absolute z-10 flex flex-col py-12 left-1/2  transform -translate-x-1/2 -translate-y-1/2 top-[40%]">
        <div class="max-w-md bg-white shadow-md p-6 rounded-lg">
          <h1 class="text-3xl font-semibold text-center mb-4">
            Quản lý đặt chỗ
          </h1>
          <h4 class="text-center mb-6">
            Nhập thông tin chi tiết của bạn để xem hành trình, thay đổi và đăng
            ký thêm dịch vụ.
          </h4>
          <form class="reservation-form">
            <div class="mb-4">
              <input
                type="text"
                id="lastName"
                placeholder="Họ"
                class="w-full px-4 py-2 border rounded-md text-lg"
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                id="reservationCode"
                placeholder="Mã đặt chỗ"
                class="w-full px-4 py-2 border rounded-md text-lg"
              />
            </div>
            <button
              type="submit"
              class="w-full px-6 py-2 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700"
            >
              Truy xuất Đặt chỗ
            </button>
          </form>
        </div>
      </div>

      <div class="info-section mx-auto bg-white shadow-md p-6">
        <h2 class="text-2xl">Tạo ra trải nghiệm Emirates của riêng bạn</h2>
        <p>
          Có rất nhiều thứ bạn có thể làm với công cụ quản lý đặt chỗ của chúng
          tôi và bạn có thể kiểm soát hành trình của mình chỉ bằng vài cú nhấp
          chuột. Công cụ quản lý của chúng tôi rất dễ dàng và an toàn - chỉ cần
          có mã số đặt chỗ và tên họ của bạn là có thể bắt đầu.
        </p>
        <ul class="list-disc pl-5 mt-4">
          <li>
            <strong>Quản lý đặt chỗ: </strong>
            <span>
              Bạn có thể chỉnh sửa và quản lý tất cả các nhu cầu du lịch của bạn
              trực tuyến. Đặt một suất ăn đặc biệt nếu bạn có một chế độ ăn uống
              cụ thể, nâng cấp chỗ ngồi và thêm một khách sạn hoặc xe thuê vào
              đặt chỗ của bạn. Khám phá các dịch vụ như Xe đưa đón.
            </span>
          </li>
          <li>
            <strong>Kiểm tra lịch trình: </strong>
            <span>
              Xem, in hoặc email lộ trình chuyến bay. Kiểm tra chi tiết chuyến
              bay và theo dõi với mục đặt chỗ.
            </span>
          </li>
          <li>
            <strong>Chọn chỗ ngồi: </strong>
            <span>
              Chọn vị trí ngồi ưa thích của bạn trên máy bay. Khám phá bản đồ
              chỗ ngồi và cảm nhận trải nghiệm trước khi bạn chọn chỗ ngồi.
            </span>
          </li>
          <li>
            <strong>Cập nhật địa chỉ email và số liên lạc: </strong>
            <span>
              Luôn cập nhật thông tin chi tiết của bạn để chúng tôi có thể gửi
              cho bạn thông báo về tình trạng chuyến bay, bất kỳ sự gián đoạn
              nào hoặc cơ hội nâng hạng nếu có.
            </span>
          </li>
          <li>
            <strong>Đăng ký trực tuyến: </strong>
            <span>
              Tiết kiệm thời gian tại sân bay và làm thủ tục trực tuyến từ 48
              tiếng đến 90 phút trước chuyến bay. Bạn cũng có thể làm thủ tục
              lên máy bay trên điện thoại di động và tải thẻ lên máy bay của
              mình xuống điện thoại.
            </span>
          </li>
          <li>
            <strong>Mua hành lý quá cước: </strong>
            <span>
              Xem giới hạn trọng lượng đối với hành lý ký gửi và hành lý xách
              tay, và nếu bạn cần mang thêm nhiều hành lý hơn, bạn có thể trả
              thêm phí hành lý trực tuyến với giá thấp hơn 20% so với tại sân
              bay.
            </span>
          </li>
          <li>
            <strong>Đăng nhập vào Emirates Skywards: </strong>
            <span>
              Quản lý mọi khía cạnh của tài khoản khách hàng thân thiết trực
              tuyến. Thêm mã hội viên của bạn vào phần đặt chỗ và tích lũy Dặm
              thưởng Skywards trên chuyến bay.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Control;
