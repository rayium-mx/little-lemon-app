import food from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <article className="w-full bg-primary-1 sm:h-96" id="hero">
      <div className="sm:w-3/5 mx-auto flex justify-center gap-4 flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <h1 className="text-primary-2">Little Lemon</h1>
          <h2 className="text-light">Chicago</h2>
          <p className="text-light sm:w-2/3 mt-4">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
          </p>
          <div className="button primary-2 my-4 w-full sm:w-2/3">
            <Link to="book">Make a reservation</Link>
          </div>
        </div>
        <div className="hidden sm:flex w-1/2 justify-end">
          <img
            src={food}
            style={{ height: '28rem' }}
            className="sm:w-4/5 object-cover rounded-md"
            alt="Restaurant food"
          />
        </div>
      </div>
    </article>
  );
};

export default Hero;
