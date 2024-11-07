import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MobileCarouselProps {
  companies: string[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ companies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {companies.map((company, index) => (
        <div key={index} className='flex-shrink-0 px-2'>
          <Image
            src={`/images/logos/${company}-logo.svg`}
            alt={company}
            width={100}
            height={40}
            objectFit='contain'
            className='h-6 w-auto'
          />
        </div>
      ))}
    </Slider>
  );
};

export default MobileCarousel;
