import "react-responsive-carousel/lib/styles/carousel.min.css"; // required styles
import { Carousel } from 'react-responsive-carousel';

const MyCarousel_2 = () => {
  return (
    
    <Carousel autoPlay infiniteLoop showThumbs={false} className="my-carousel">
        <div>
            <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
            <p className="legend">Are you done shopping?</p>
        </div>
        <div>
            <img src="https://plus.unsplash.com/premium_photo-1681486917346-badf6c3b3c79?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
            <p className="legend">Click on view all products on the top to find more!</p>
        </div>
    </Carousel>
  );
};

export default MyCarousel_2;
