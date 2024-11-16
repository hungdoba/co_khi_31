export default function AboutUs() {
  return (
    <section id="gioi-thieu">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Việc gì khó để chúng tôi lo</h1>
            <p className="text-xl text-gray-600">
              Chúng tôi sẽ giải quyết vấn đề của bạn một cách nhanh chóng, hiệu
              quả và chuyên nghiệp nhất. Đó cũng chính là lí do tại sao chúng
              tôi đã giúp hàng trăm khách hàng giải quyết vấn đề của họ trong
              hơn 3 năm qua.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <img
              className="rounded shadow-2xl"
              src="images/about-01.jpg"
              width="768"
              height="432"
              alt="About us"
            />
          </figure>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">Câu chuyện của chúng tôi</h3>
            <p className="text-lg text-gray-600 mb-8">
              Từ những chàng trai trẻ đam mê cơ khí, máy móc, sau một quá trình
              dài học tập và làm việc tại các công ty cơ khí lớn, chúng tôi đã
              quyết định thành lập Cơ khí 31 vào năm 2019 với mục tiêu mang lại
              giải pháp gia công cơ khí hiệu quả, tiết kiệm và chất lượng.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hiện tại trên địa bàn thị xã Thái Hòa, Cơ khí 31 là cơ sở duy nhất
              có khả năng gia công cơ khí với công nghệ CNC tiên tiến, giúp tăng
              hiệu quả sản xuất, giảm chi phí và nâng cao chất lượng sản phẩm.
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <img
                className="grow self-start rounded"
                src="images/about-02.jpg"
                width="435"
                height="326"
                alt="About us 02"
              />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h4 className="h4 mb-2">Sứ mệnh của chúng tôi:</h4>
              <ul className="text-lg text-gray-600 list-disc list-inside">
                <li className="mb-2">
                  Mang công nghệ hiện đại CNC phục vụ khách hàng.
                </li>
                <li className="mb-2">
                  Ứng dụng gia công cơ khí chính xác tại địa phương.
                </li>
                <li className="mb-2">
                  Tăng tốc độ gia công, giảm thời gian đi lại và tiết kiệm chi
                  phí cho doanh nghiệp.
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="mt-4 text-lg text-gray-600">
              Nền tảng của Cơ khí 31 được xây dựng trên sự đam mê và tâm huyết
              với ngành cơ khí. Chúng tôi không ngừng học hỏi và áp dụng những
              công nghệ tiên tiến nhất để mang lại giá trị tốt nhất cho khách
              hàng. Với đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị hiện
              đại, chúng tôi tự tin đáp ứng mọi yêu cầu khắt khe nhất của khách
              hàng, từ những chi tiết nhỏ nhất đến những dự án lớn và phức tạp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
