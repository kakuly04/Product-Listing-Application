import "react-responsive-carousel/lib/styles/carousel.min.css"; // required styles
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    
    <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
            <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
            <p className="legend">Looking for cosmetics?</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" />
            <p className="legend">Don't worry we have more than just costmetics!</p>
        </div>
    </Carousel>
  );
};

export default MyCarousel;
