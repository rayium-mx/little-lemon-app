import not_found from '../assets/placeholder.png';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-content mb-16">
      <img className="w-1/4 mx-auto" src={not_found} alt="Not Found" />
      <h2 className="text-primary-1">Oops! Looks like there's nothing here yet.</h2>
      <button className="primary-2">
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};

export default NotFound;
