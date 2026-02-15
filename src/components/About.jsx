import portfolioData from '../data/portfolioData.json';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {about.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Highlights</h3>
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available For</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Freelance Projects
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Consulting
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Contract Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
