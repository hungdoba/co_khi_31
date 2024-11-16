import Image from 'next/image';
export default function Gallery() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Thư viện ảnh</h2>
            <p className="text-xl text-gray-600">
              Một số hình ảnh về công ty, sản phẩm, dịch vụ của chúng tôi. Hi
              vọng cung cấp cho bạn cái nhìn tổng quan về chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="grid gap-4">
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-6.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-5.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-8.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="rounded-lg"
                  width={800}
                  height={600}
                  src="/gallery/gallery-9.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
