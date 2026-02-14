import { Leaf, Heart, Sun } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">About Paradise Nursery</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          At Paradise Nursery, we believe every space deserves a touch of nature. Founded with a passion
          for greenery and sustainable living, we curate the finest collection of houseplants to transform
          your home into a lush paradise.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
            <Leaf className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-lg font-semibold">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">Every plant is hand-selected and nurtured to ensure it arrives healthy and thriving.</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
            <Heart className="mb-4 h-10 w-10 text-secondary" />
            <h3 className="mb-2 text-lg font-semibold">Grown with Love</h3>
            <p className="text-sm text-muted-foreground">Our team of plant enthusiasts cares deeply about every leaf and root.</p>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
            <Sun className="mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-2 text-lg font-semibold">Expert Guidance</h3>
            <p className="text-sm text-muted-foreground">We provide care tips and support so your plants flourish for years to come.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
