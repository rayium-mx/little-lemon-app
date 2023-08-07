import AboutUs from './AboutUs';
import Hero from './HeroBanner';
import Specials from './Specials';
import Testimonials from './Testimonials';

const Main = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="w-9/12 mx-auto">
        <Specials />
        <Testimonials />
        <AboutUs />
      </section>
    </main>
  );
};

export default Main;
