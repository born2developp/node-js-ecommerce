// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCarouselItem from './ProductCarouselItem';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsList = () => {
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        try {
            const request = await axios.post('http://localhost:7000/api/admin/get-limited-products', { counter: 25});
            setProductList(request.data.message);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { getProducts() }, []);

    return (
        <div className="flex flex-col space-y-5">
            <Link to={'/admin-products'}>
                <h1 className="text-gray-800 text-2xl ml-5">Products</h1>
            </Link>
            <div>
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
                                    <ProductCarouselItem product={product} />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default ProductsList;