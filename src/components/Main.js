const Main = () => {
  return (
    <main>
      <section>
        <article className="w-full my-12 p-8 bg-primary-1" id="hero">
          <div className="w-9/12 mx-auto">
            <h1 className="text-primary-2">Little Lemon</h1>
            <h2 className="text-light">Chicago</h2>
            <p className="text-light sm:w-1/3 mt-4">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
            </p>
          </div>
        </article>
      </section>
      <section>
        <article className="w-full my-12 p-8" id="specials">
          <h1>This week's specials</h1>
        </article>
        <article className="w-full my-12 p-8" id="testimonials">
          <h1>Testimonials</h1>
        </article>
        <article className="w-full my-12 p-8" id="about-us">
          <h1>About us</h1>
        </article>
      </section>
    </main>
  );
};

export default Main;
