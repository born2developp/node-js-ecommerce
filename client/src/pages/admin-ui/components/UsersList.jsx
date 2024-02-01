import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCarouselItem from "./ProductCarouselItem";
import UserCarouselItem from "./UserCarouselItem";

const UsersList = () => {
    return (
        <div className="flex flex-col space-y-5">
            <Link to={'/admin-users'}>
                <h1 className="text-gray-800 text-2xl ml-5">Users</h1>
            </Link>
            <div className=''>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <UserCarouselItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default UsersList;