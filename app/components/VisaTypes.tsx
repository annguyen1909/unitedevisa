const visatypes = [
  {
    title: 'TOURIST VISA',
    description:
      "Whether it's for a quick getaway or a grand adventure, this travel visa tops the list — and we make getting it refreshingly simple.",
    destinations: ['Kenya', 'Cambodia', 'Sri Lanka'],
    buttonText: 'Apply Now',
    buttonColor: 'bg-green-600',
  },
  {
    title: 'BUSINESS VISA',
    description:
      "With this visa, you're cleared to do business abroad — just be ready to provide a few extra documents to seal the deal.",
    destinations: ['Azerbaijan', 'Bahrain', 'India'],
    buttonText: 'Apply Now',
    buttonColor: 'bg-blue-600',
  },
  {
    title: 'TRANSIT VISA',
    description:
      "This visa is issued to travelers transiting through a country en route to their final destination. Many countries waive the requirement for this type of visa.",
    destinations: ['Uganda', 'Rwanda', 'Tanzania'],
    buttonText: 'Apply Now',
    buttonColor: 'bg-orange-600',
  },
  {
    title: 'MEDICAL VISA',
    description:
      "Seeking specialized care overseas? A medical visa grants access to a country's healthcare system — though it's only available in certain destinations.",
    destinations: ['India', 'Malaysia', 'UK'],
    buttonText: 'Apply Now',
    buttonColor: 'bg-yellow-600',
  },
];

import Image from 'next/image';

const VisaTypes = () => (
  <section className="py-12 bg-white">
    <div className="max-w-6xl px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">All eVisa Types. One Place.</h2>
      <div className="grid gap-8 md:grid-cols-4">
        {visatypes.map((type, index) => (
          <div key={index} className="p-6 border rounded shadow flex flex-col justify-between">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-center">{type.title}</h3>
              <p className="text-gray-600 text-center mb-4">{type.description}</p>
              <div className="flex justify-center gap-2 mb-4">
                {type.destinations.map((destination, i) => (
                  <Image
                    key={i}
                    src={`/flags/${destination.toLowerCase().replace(/ /g, '-')}.svg`}
                    alt={destination}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
            <button
              className={`w-full py-2 text-white rounded ${type.buttonColor} hover:opacity-90 mt-auto`}
            >
              {type.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisaTypes;
