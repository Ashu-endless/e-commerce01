import Product from "./Product";
import {ProductArr} from "./data";
import './AllPrdctsCllction.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";



function AllPrdctsCllction() {

    const Products = ProductArr.map((ProductJson) =>
    <SwiperSlide> <Product key={ProductJson.id} {...ProductJson}  /></SwiperSlide>
);


    return ( <>
    <p>Top Categories</p>
    <div id="All-Products-Div" >
       {/* { Products}
        */}
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Products}
      </Swiper>
    </div>
    </> );
}

export default AllPrdctsCllction;