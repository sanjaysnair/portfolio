import { useState } from 'react';
import portfolioData from '../data/portfolioData.json';

const Portfolio = () => {
  const { portfolio } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(portfolio.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
          Portfolio
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Showcasing my freelance work and projects. Each project demonstrates my commitment to delivering high-quality solutions.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden flex items-center justify-center">
                <div className="text-white">
                  <svg
                    className="w-16 h-16 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Portfolio;
