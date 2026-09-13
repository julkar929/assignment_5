const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare them
            side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="brand-gradient-bg text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Explore Technologies
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-pink-400 hover:text-pink-500 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/banner-stack.png"
            alt="3D Technology Stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;