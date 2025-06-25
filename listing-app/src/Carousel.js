import "react-responsive-carousel/lib/styles/carousel.min.css"; // required styles
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    
    <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
            <img src="https://media.licdn.com/dms/image/v2/D5612AQEBAKHjibQIIg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713421601369?e=2147483647&v=beta&t=fyhzNBQBu0X55yzkg8unkv9n_9th5PD_glAgiIht_bo" alt="Slide 1" />
            <p className="legend">Looking for cosmetics?</p>
        </div>
        <div>
            <img src="https://t4.ftcdn.net/jpg/12/40/10/91/360_F_1240109131_clQTODnd402HTEqCBmvbxf7sL2OuIbt7.jpg" alt="Slide 2" />
            <p className="legend">You are at the right place!</p>
        </div>
    </Carousel>
  );
};

export default MyCarousel;
