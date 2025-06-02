const steps = [
  {
    number: 1,
    title: 'Apply Online',
    description: 'Submit your visa application on our website',
  },
  {
    number: 2,
    title: 'Pay Online',
    description: 'Secure payment system that accepts Credit, or Bank transfer',
  },
  {
    number: 3,
    title: 'Submit Documents',
    description: 'Submit and manage your required documents through our secured portal',
  },
  {
    number: 4,
    title: 'Receive Your eVisa',
    description: 'Sit back and relax — we’ll deliver your visa straight to your inbox',
  },
];

const Steps = () => (
  <section className="py-12 bg-white">
    <div className="max-w-6xl px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">4 Easy Steps to Get Your eVisa</h2>
      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="p-6 border rounded shadow text-center">
            <div className="text-4xl font-bold text-green-600 mb-4">{step.number}</div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-green-600 text-white rounded px-6 py-3 hover:bg-green-700">Apply Now</button>
      </div>
    </div>
  </section>
);

export default Steps;
