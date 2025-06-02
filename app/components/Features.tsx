const features = [
  { title: 'Easy Application', description: 'User-friendly forms and guidance.' },
  { title: 'Fast Processing', description: 'Quick turnaround times.' },
  { title: '24/7 Support', description: 'We’re here to help anytime.' },
];

const Features = () => (
  <section className="py-12 bg-white">
    <div className="max-w-6xl px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Our Features</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded shadow">
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
