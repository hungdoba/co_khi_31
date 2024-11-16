import Image from 'next/image';
function Team() {
  return (
    <section
      id="doi-ngu"
      className="scroll-mt-24 bg-gradient-to-b from-gray-100 to-white border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Đội ngũ của chúng tôi</h2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* 1st member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src="images/team-member-01.jpg"
                  width="120"
                  height="120"
                  alt="Team member 01"
                />
                <h4 className="text-xl font-bold mb-1">Nguyễn Văn A</h4>
                <div className="text-blue-600 font-medium mb-2">Giám đốc</div>
                <p className="text-gray-600 text-center mb-3">
                  Tốt nghiệp đại học Bách khoa Hà Nội, chuyên ngành cơ khí chế
                  tạo máy. Có kinh nghiệm làm việc tại các công ty lớn trong và
                  ngoài nước.
                </p>
                <div className="flex flex-row text-sm text-gray-600 font-medium">
                  <p className="text-gray-900 hover:underline">
                    Báo giá - Thiết kế - Gia công
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="150"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src="images/team-member-02.jpg"
                  width="120"
                  height="120"
                  alt="Team member 02"
                />
                <h4 className="text-xl font-bold mb-1">Nguyễn Văn B</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Chuyên viên
                </div>
                <p className="text-gray-600 text-center mb-3">
                  Có kinh nghiệm 12 năm làm việc với máy phay CNC, máy tiện, máy
                  cắt dây.
                </p>
                <div className="flex flex-row text-sm text-gray-600 font-medium">
                  <p className="text-gray-900 hover:underline">
                    Gia công - Lắp đặt
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd member */}
            <div
              className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3"
              data-aos="zoom-y-out"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-team]"
            >
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-full mb-4"
                  src="images/team-member-03.jpg"
                  width="120"
                  height="120"
                  alt="Team member 03"
                />
                <h4 className="text-xl font-bold mb-1">Nguyễn Văn C</h4>
                <div className="text-blue-600 font-medium mb-2">
                  Chuyên viên
                </div>
                <p className="text-gray-600 text-center mb-3">
                  Có kinh nghiệm 12 năm làm việc với máy phay CNC, máy tiện, máy
                  cắt dây.
                </p>
                <div className="flex flex-row text-sm text-gray-600 font-medium">
                  <p className="text-gray-900 hover:underline">
                    Gia công - Lắp đặt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
