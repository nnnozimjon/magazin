import { useSwiper } from "swiper/react";

const SwiperButton: React.FC = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="bg-blue-600 w-[100px] h-[100px]"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        className="bg-blue-600 w-[100px] h-[100px]"
        onClick={() => swiper.slideNext()}
      >
        next
      </button>
    </div>
  );
};

export default SwiperButton;
