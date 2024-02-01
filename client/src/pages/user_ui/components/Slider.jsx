import { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import CarouselItem from './CarouselItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    const [productList , setProductList] = useState([]);
    const [loading , setLoading] = useState(false);

    const getProducts = async () => {
        try{
            setLoading(true);
            const request = await axios.post('http://localhost:7000/api/admin/get-limited-products' , {counter:8});
            setProductList(request.data.message);
            setLoading(false);
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => { getProducts() } , []);

    if (loading) return (
        <div className='flex flex-col items-center space-y-10 mt-12 mb-6'>
            <h1 className='text-gary-800 text-base'>Loading...</h1>
        </div>
    );

    return (
        <div className="mt-12 bg-white">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    productList &&
                    productList.map(product => {
                        return (
                            <SwiperSlide>
                                <CarouselItem
                                    product = {product}
                                />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider;