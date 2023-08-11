import restaurant from '../assets/restaurant.jpg';
import chefs from '../assets/Mario and Adrian A.jpg';

const RestaurantImg = () => {
  return <img className="shadow-md rounded-lg" src={restaurant} alt="Little Lemon Restaurant" />;
};

const ChefsImg = () => {
  return <img className="shadow-md rounded-lg" src={chefs} alt="Little Lemon's chefs" />;
};

const AboutUs = () => {
  return (
    <article id="about-us">
      <h1>About us</h1>
      <div className="mt-12 mb-8 flex justify-center gap-4 flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <h1 className="text-primary-2">Little Lemon</h1>
          <h1 className="text-primary-1">Chicago</h1>
          <p className="text-primary-1 sm:w-2/3 mt-4">
            Welcome to Little Lemon, where cherished Mediterranean family recipes take on a modern twist. As a
            family-owned restaurant, we infuse each dish with the warmth of tradition and a touch of innovation. Our
            culinary journey brings you the best of both worlds – the timeless flavors of the Mediterranean, served with
            a contemporary flair.
          </p>
        </div>
        <div className="hidden sm:flex w-1/2 justify-end">
          <div className="image-container w-full">
            <div className="image_top">
              <RestaurantImg />
            </div>
            <div className="image_bottom">
              <ChefsImg />
            </div>
          </div>
        </div>
        <div className="sm:hidden w-full flex gap-8 flex-col">
          <RestaurantImg />
          <ChefsImg />
        </div>
      </div>
    </article>
  );
};

export default AboutUs;
