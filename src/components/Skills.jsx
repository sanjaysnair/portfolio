import portfolioData from '../data/portfolioData.json';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'blue' },
    { title: 'Backend', skills: skills.backend, color: 'purple' },
    { title: 'Database', skills: skills.database, color: 'green' },
    { title: 'Tools & Others', skills: skills.tools, color: 'orange' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      green: 'bg-green-100 text-green-700 hover:bg-green-200',
      orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    };
    return colors[color];
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className={`w-2 h-8 ${
                  category.color === 'blue' ? 'bg-blue-600' :
                  category.color === 'purple' ? 'bg-purple-600' :
                  category.color === 'green' ? 'bg-green-600' :
                  'bg-orange-600'
                } rounded mr-3`}></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center px-8">
              <div className="text-4xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">30+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
