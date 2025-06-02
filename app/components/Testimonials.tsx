const testimonials = [
  { name: 'Jane Doe', feedback: 'UnitedeVisa made my visa process seamless!' },
  { name: 'John Smith', feedback: 'Excellent service and support throughout.' },
];

const Testimonials = () => (
  <section className="py-12 bg-gray-100">
    <div className="max-w-4xl px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white border rounded shadow">
            <p className="mb-2 text-gray-800"> - {testimonial.feedback}</p>
            <p className="text-sm text-gray-500">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
