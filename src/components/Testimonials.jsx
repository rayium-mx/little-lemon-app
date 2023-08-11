import Card from './Card';

const testimonials = [
  {
    img: '1',
    name: 'Sarah M.',
    comment: 'Authentic flavors, transported me to the coast!',
  },
  {
    img: '2',
    name: 'Alex P.',
    comment: 'Perfect ambiance, delectable dishes, impeccable service!',
  },
  {
    img: '3',
    name: 'Javier R.',
    comment: 'Hidden culinary treasure, every bite delightful!',
  },
  {
    img: '4',
    name: 'Emily T.',
    comment: 'Exceeded expectations, flavors transported me!',
  },
];

const CardContent = customer => {
  return (
    <>
      <p className="text-3xl text-center my-5 tracking-widest">⭐️⭐️⭐️⭐️⭐️</p>
      <div className="flex flex-col items-center px-4 py-2">
        <img
          src={require(`../assets/testimonials/${customer.img}.jpg`)}
          className="w-1/2 rounded-full"
          alt={customer.name}
        />
        <p className="font-markazi text-3xl mt-4">{customer.name}</p>
      </div>
      <p style={{ minHeight: '8rem' }} className="text-xl italic p-5 text-center">
        "{customer.comment}"
      </p>
    </>
  );
};

const Testimonials = () => {
  return (
    <article id="testimonials">
      <div className="sm:w-10/12 mx-auto p-5">
        <h1 className="text-primary-2 mb-12 sm:text-center">Testimonials</h1>
        <div className="flex items-stretch justify-between gap-8 flex-col sm:flex-row">
          {testimonials.map((customer, index) => {
            return <Card key={index} content={CardContent(customer)} />;
          })}
        </div>
      </div>
    </article>
  );
};

export default Testimonials;
