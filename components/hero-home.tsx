import Image from 'next/image';
import PageIllustration from '@/components/page-illustration';
import Avatar01 from '@/public/images/avatar-01.jpg';
import Avatar02 from '@/public/images/avatar-02.jpg';
import Avatar03 from '@/public/images/avatar-03.jpg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Công nghệ CNC tiên tiến <br className="max-lg:hidden" />
              Hiệu quả - Tiết kiệm
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Cơ khí 31 chuyên cung cấp các giải pháp gia công cơ khí với công
                nghệ CNC tiên tiến, giúp tăng hiệu quả sản xuất, giảm chi phí và
                nâng cao chất lượng sản phẩm.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Gọi ngay: 08099684647{' '}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mx-auto">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    className="rounded-3xl"
                    objectFit="cover"
                    width={1200}
                    height={600}
                    src="/factories/factory-1.jpg"
                    alt="Avatar 01"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    className="rounded-3xl"
                    objectFit="cover"
                    width={1200}
                    height={600}
                    src="/factories/factory-2.jpg"
                    alt="Avatar 02"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    className="rounded-3xl"
                    objectFit="cover"
                    width={1200}
                    height={600}
                    src="/factories/factory-3.jpg"
                    alt="Avatar 03"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
