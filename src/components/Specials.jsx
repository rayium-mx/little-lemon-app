import Card from './Card';
import delivery from '../assets/delivery.svg';

const specials = [
  {
    name: 'Greek Salad',
    img: 'greek_salad.jpg',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    price: '12.99',
  },
  {
    name: 'Bruchetta',
    img: 'bruchetta.jpg',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  ',
    price: '5.99',
  },
  {
    name: 'Lemon Dessert',
    img: 'lemon_dessert.jpg',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. ',
    price: '5.00',
  },
];

const CardContent = special => {
  return (
    <>
      <img src={require(`../assets/${special.img}`)} className="object-cover w-full rounded-t-lg" alt={special.name} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-markazi text-3xl">{special.name}</p>
          <p className="text-secondary-1 font-semibold">$ {special.price}</p>
        </div>
        <p style={{ minHeight: '8rem' }}>{special.description}</p>
        <button className="pl-0 flex items-stretch">
          Order for delivery
          <img src={delivery} alt="Delivery" className="ml-4 w-6" />
        </button>
      </div>
    </>
  );
};

const Specials = () => {
  return (
    <article id="specials">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
        <h1>This week's specials!</h1>
        <button className="primary-2 mt-8 w-full sm:w-fit sm:mt-0">Online Menu</button>
      </div>
      <div className="flex items-center justify-between gap-8 flex-col sm:flex-row">
        {specials.map((special, index) => {
          return <Card key={index} content={CardContent(special)}/>;
        })}
      </div>
    </article>
  );
};

export default Specials;
