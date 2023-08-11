const Card = ({content, bgColor}) => {
  return <div className={`bg-${bgColor ?? 'light'} rounded-lg shadow-md hover:shadow-lg`}>{content}</div>;
};

export default Card;
