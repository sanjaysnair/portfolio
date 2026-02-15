import portfolioData from '../data/portfolioData.json';
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
  const { profile } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Background Animation Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="w-44 h-44 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-75 animate-pulse"></div>
            <img
              src={profileImage}
              alt={profile.name}
              className="relative w-full h-full rounded-full border-4 border-white shadow-2xl object-cover ring-4 ring-white/20"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 text-cyan-100 animate-fade-in animation-delay-300">
          {profile.title}
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Crafting exceptional digital experiences through clean code and innovative solutions.
          Available for freelance projects.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-700">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
