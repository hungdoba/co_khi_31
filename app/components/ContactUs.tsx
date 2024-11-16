export default function ContactUs() {
  return (
    <section id="lien-he" className="scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Liên hệ với chúng tôi</h1>
            <ul className="text-xl text-gray-600 space-y-4">
              <li>
                Địa chỉ: Xóm 5, thị xã Thái Hòa, huyện Nghĩa Đàn, tỉnh Nghệ An
              </li>
              <li>Email: contact@example.com</li>
              <li>Số điện thoại: 0123 456 789</li>
            </ul>
          </div>

          {/* World illustration */}
          <div className="flex flex-col items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7530.084096965752!2d105.41227435911338!3d19.323981599231743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1731756298223!5m2!1sen!2sjp"
              className="w-full h-64 sm:h-96 md:h-[450px]"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
