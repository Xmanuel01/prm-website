'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building a Better Future Together
          </h1>
          <p className="text-xl mb-8">
            The People's Reform Movement is committed to transparent governance,
            economic empowerment, and social justice for all citizens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/manifesto"
              className="btn-primary bg-secondary hover:bg-secondary-dark"
            >
              Our Manifesto
            </Link>
            <Link
              href="/join"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
