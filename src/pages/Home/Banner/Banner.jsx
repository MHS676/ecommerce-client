import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src='https://t4.ftcdn.net/jpg/05/08/17/01/360_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg' />
            </div>
            <div>
                <img src='https://t3.ftcdn.net/jpg/04/78/41/36/360_F_478413613_7kJADcvjJXAoJFvfLekU5We38KhXMVVz.jpg' />
            </div>
            <div>
                <img src='https://t3.ftcdn.net/jpg/05/02/12/00/360_F_502120066_amTEIgDm5A24VTdz3El8hNf4IVGQSckU.jpg' />
            </div>
            <div>
                <img src='https://cdn.shopify.com/s/files/1/2108/6923/collections/Artboard_2_copy_5.jpg?v=1689073901' />
            </div>
            <div>
                <img src='https://charmichairs.com/wp-content/uploads/2017/06/chair_3rd-banner.jpg' />
            </div>
            <div>
                <img src='https://charmichairs.com/wp-content/uploads/2017/06/chair_1-st-banner.jpg' />
            </div>
        </Carousel>
    );
};

export default Banner;