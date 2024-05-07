import data from '../../data.json';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  const { slides } = data['section-one'];

  return (
    <section id='home' className='bg-custom-silver pt-[50px] h-screen'>
      <Swiper
        pagination={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className='py-[50px] lg:py-[100px] h-full'
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className='user-select-none cursor-pointer'
          >
            <div className='flex  flex-col gap-[40px] md:flex-row md:items-center md:justify-around '>
              {/* text */}
              <div className='flex flex-col gap-4 text-center lg:text-left '>
                <h1 className='title text-balance max-w-[600px]'>
                  {slide.text.black}{' '}
                  <span className='text-custom-green'>{slide.text.green}</span>
                </h1>
                <p className='text-[14px] text-custom-grey'>{slide.desc}</p>
              </div>
              {/* img */}
              <img
                src={slide.img.url}
                alt={slide.img.alt}
                className='object-contain max-h-400px] aspect-square'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default Hero;
