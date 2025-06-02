const destinations = [
  { name: "Malaysia", image: "/destinations/malaysia.jpg" },
  { name: "Kenya", image: "/destinations/kenya.jpg" },
  { name: "Saudi Arabia", image: "/destinations/saudi.jpg" },
  { name: "Ethiopia", image: "/destinations/ethiopia.jpg" },
  { name: "Sri Lanka", image: "/destinations/srilanka.jpg" },
];

export default function TopDestinations() {
  return (
    <section className="py-12 px-6 bg-amber-50 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Top Travel Destinations in 2025</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {destinations.map((dest) => (
          <div key={dest.name} className="bg-white shadow rounded overflow-hidden">
            <img src={dest.image} alt={dest.name} className="w-full h-24 object-cover" />
            <div className="p-2 font-medium text-sm">{dest.name}</div>
          </div>
        ))}
      </div>
      <button className="mt-6 text-green-700 font-medium hover:underline">See all destinations</button>
    </section>
  );
}