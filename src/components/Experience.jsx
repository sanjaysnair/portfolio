import portfolioData from '../data/portfolioData.json';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>
                
                <div className={`md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}>
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                          {job.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">
                        {job.company}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'md:col-start-2' : ''}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
