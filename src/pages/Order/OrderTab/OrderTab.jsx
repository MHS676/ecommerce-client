// import FoodCard from '../../../components/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ChairCard from '../../../components/FoodCard/ChairCard';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div className=''>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10  '>
                        {
                            items.map(item => <ChairCard
                                key={item._id}
                                item={item}
                            ></ChairCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;