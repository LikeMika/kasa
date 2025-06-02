import { FaStar } from 'react-icons/fa';
import '../styles/Rating.scss';

function Rating({ rating }) {
  const totalStars = 5;
  const stars = parseInt(rating, 10);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          color={index < stars ? '#FF6060' : '#E3E3E3'}
        />
      ))}
    </div>
  );
}

export default Rating;
