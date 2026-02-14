import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import AboutUs from '@/components/AboutUs';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center">
        <img src={heroBg} alt="Paradise Nursery" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl">
            Paradise Nursery
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Where every plant finds a home
          </p>
          <Link
            to="/plants"
            className="inline-block rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <AboutUs />
    </div>
  );
};

export default Index;
