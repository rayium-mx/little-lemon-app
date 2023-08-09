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
      <section className="w-9/12 mx-auto">
        <Specials />
        <Testimonials />
        <AboutUs />
      </section>
    </main>
  );
};

export default HomePage;
