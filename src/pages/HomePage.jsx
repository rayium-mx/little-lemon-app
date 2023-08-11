import AboutUs from '../components/AboutUs';
import Hero from '../components/HeroBanner';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <main data-testid="home-page">
      <section>
        <Hero />
      </section>
      <section className="w-full sm:w-10/12 sm:mt-44 mx-auto">
        <Specials />
      </section>
      <section className="w-full bg-primary-1 mx-auto">
        <Testimonials />
      </section>
      <section className="w-full sm:w-10/12 mx-auto">
        <AboutUs />
      </section>
    </main>
  );
};

export default HomePage;
