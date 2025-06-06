export default function Hero() {
  return (
    <section
      className="bg-cover bg-center min-h-[80vh] flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('image/hero.png')" }}
    >
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Let Us Get You The Visa To Your Dream Destination
        </h1>
        <p className="text-lg md:text-xl mt-4">Fast – Reliable – Experts Support 24/7</p>

        <div className="bg-white rounded-lg p-2 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>Your Nationality</option>
            <option>United States</option>
            <option>India</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>Which country?</option>
            <option>Malaysia</option>
            <option>Kenya</option>
          </select>
          <button className="bg-green-600 text-white rounded px-4 py-6 hover:bg-green-700">
            Check Now
          </button>
        </div>
      </div>
    </section>
  );
}