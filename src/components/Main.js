const Main = () => {
  return (
    <main>
      <section>
        <article className="w-full my-12 p-8 bg-primary-1" id="hero">
          <div className="w-9/12 mx-auto">
            <h1 className="title text-primary-2">Little Lemon</h1>
            <h2 className="font-markazi text-light text-5xl">Chicago</h2>
            <p className="text-light text-xl w-1/3 mt-4">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
          </div>
        </article>
      </section>
      <section>
        <article className="w-full my-12 p-8" id="specials">
          <h1 className="title text-dark">This week's specials</h1>
        </article>
        <article className="w-full my-12 p-8" id="testimonials">
          <h1 className="title text-dark">Testimonials</h1>
        </article>
        <article className="w-full my-12 p-8" id="about-us">
          <h1 className="title text-dark">About us</h1>
        </article>
      </section>
    </main>
  );
};

export default Main;
