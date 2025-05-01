export function SubscribeNewsletter() {
  return (
    <section id="subscribe-newsletter" className="text-center px-6 py-12 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to be the first to know about our launch</h2>
      <form className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-none text-black w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white bg-white"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Subscribe Now
        </button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <input type="checkbox" id="newsletter-consent" required className="mr-2" />
        <label htmlFor="newsletter-consent" className="text-sm">
          Yes, subscribe me to your newsletter.
        </label>
      </div>
    </section>
  );
}