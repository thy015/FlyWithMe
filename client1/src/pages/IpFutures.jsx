import React, { useState } from "react";

const IpFutures = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageInfo) => {
    setSelectedImage(imageInfo);
  };

  const imageData = [
    {
      src: "https://i.pinimg.com/564x/2b/1d/93/2b1d9391d514b1acee24a21fbd807b90.jpg",
      alt: "First Class Image",
      title: "Hạng Nhất",
      description: "Trải nghiệm hành trình Hạng Nhất của riêng bạn. Trượt cánh cửa để có không gian riêng tư tại buồng Private Suite, điều chỉnh ánh sáng cho dễ chịu, thưởng thức ẩm thực và giải trí theo sở thích riêng của bạn.",   

    },
    {
      src: "https://dulichhangkhong.com.vn/ve-may-bay/vnt_upload/news/09_2021/ve-may-bay-hang-pho-thong-8.jpg",
      alt: "Economy Class Image",
      title: "Hạng Phổ thông",
      description: "Trải nghiệm hạng Phổ thông như thể được nâng hạng. Tựa lưng thật thoải mái, thưởng thức những bữa ăn ngon miệng và khám phá hàng ngàn bộ phim, chương trình truyền hình và hơn thế nữa.",
    },
  ];
  return (
    <div className="bg-white mt-[-50px]">
        <div 
          className="relative w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.pinimg.com/564x/65/c8/4f/65c84fc0b8eba2cf5b307f93d777025c.jpg')" }}
        >
      <div className="container mx-auto ">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 ">
            <h1 className="text-4xl font-bold mb-4 text-white">Các tính năng nổi bật trong khoang máy bay</h1>
            <p className="text-xl text-white">Tận hưởng sự thoải mái, thư giãn và khám phá lợi ích khi Fly Better (Tận hưởng nhiều hơn) với chúng tôi.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-10 p-5">
        <div className="w-full md:w-1/2 p-5">
          <img 
            className="max-w-full h-auto rounded" 
            src="https://i.pinimg.com/564x/2b/1d/93/2b1d9391d514b1acee24a21fbd807b90.jpg" 
            alt="First Class Image" 
          />
        </div>
        <div className="w-full md:w-1/2 bg-white p-5 rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-red-500 inline-block">Hạng Nhất</h2>
          <p className="text-gray-600 mb-5">Trải nghiệm hành trình Hạng Nhất của riêng bạn. Trượt cánh cửa để có không gian riêng tư tại buồng Private Suite, điều chỉnh ánh sáng cho dễ chịu, thưởng thức ẩm thực và giải trí theo sở thích riêng của bạn.</p>
          <a className="text-red-500 font-bold hover:underline" href="#">Khám phá khoang Hạng Nhất</a>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-10 p-5">
        <div className="w-full md:w-1/2 bg-white p-5 rounded shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b-2 border-red-500 inline-block">Hạng Phổ thông</h2>
          <p className="text-gray-600 mb-5">Trải nghiệm hạng Phổ thông như thể được nâng hạng. Tựa lưng thật thoải mái, thưởng thức những bữa ăn ngon miệng và khám phá hàng ngàn bộ phim, chương trình truyền hình và hơn thế nữa.</p>
          <a className="text-red-500 font-bold hover:underline" href="#">Khám phá khoang Hạng Phổ thông</a>
        </div>
        <div className="w-full md:w-1/2 p-5">
          <img 
            className="max-w-full h-auto rounded" 
            src="https://dulichhangkhong.com.vn/ve-may-bay/vnt_upload/news/09_2021/ve-may-bay-hang-pho-thong-8.jpg" 
            alt="Economy Class Image" 
          />
        </div>
      </div>
      <div className="container mx-auto text-center my-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Các trang liên quan</h1>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="bg-white rounded shadow-md max-w-sm w-full">
            <img 
              className="w-full h-auto" 
              src="https://2sao.vietnamnetjsc.vn/images/2017/11/15/09/14/may-bay-03.jpg" 
              alt="First Class" 
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Chỗ ngồi</h2>
              <p className="text-gray-600 mb-5">Buồng riêng Private Suite ở khoang Hạng Nhất, những chiếc ghế có thể kéo dài thành giường phẳng ở khoang Hạng Thương Gia và không gian rộng hơn trong tất cả hạng khoang của ...</p>
            </div>
          </div>
          <div className="bg-white rounded shadow-md max-w-sm w-full">
            <img 
              className="w-full h-auto" 
              src="https://th.bing.com/th/id/R.1c54e285b0757be26e06fdca05181fa1?rik=6jZx6aO35Wp2Ng&pid=ImgRaw&r=0" 
              alt="Entertainment" 
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Hệ thống các món ăn từ khắp thế giới</h2>
              <p className="text-gray-600 mb-5">Có đến 50 món để bạn thỏa sức khám phá những đặc sản các vùng miền.</p>
            </div>
          </div>
          <div className="bg-white rounded shadow-md max-w-sm w-full">
            <img 
              className="w-full h-auto" 
              src="https://hangkhongmy.vn/wp-content/uploads/2015/12/giai-tri.jpg" 
              alt="Entertainment" 
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Hệ thống giải trí trên máy bay</h2>
              <p className="text-gray-600 mb-5">Có đến 6.500 kênh giải trí để bạn thỏa sức khám phá những thế giới mới.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpFutures;
