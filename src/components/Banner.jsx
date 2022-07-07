import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper";


function Banner() {
    return ( <div className="Banner" >


<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide><div className='image swiper-slide' ></div></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>



        {/* <div className='image' ></div>
        <div className="motto" >Get Daily items at <b>Best Value!</b>  </div>

        <div id='search-div3410' ><input type="text" placeholder='Search product' name="" id="" /> <span icon="search" ></span> </div> */}
    </div> );
}

export default Banner;