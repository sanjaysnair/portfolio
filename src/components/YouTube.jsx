const YouTube = () => {
  const youtubeChannelUrl = "https://www.youtube.com/@Sanjay-S-Nair/videos";

  // Sample video data - you can update this with your actual video IDs
  const featuredVideos = [
    {
      id: 1,
      videoId: "8WUU-VMDdMw", // Replace with your actual YouTube video ID
      title: "WORLD'S LARGEST BIRD SCULPTURE | Jatayu Earth Center",
      description: "World's Largest Bird Sculpture, a stunning monument dedicated to the mythical bird Jatayu from the Ramayana epic, symbolizing honor and women's safety."
    },
    {
      id: 2,
      videoId: "yFhnx1HqqRU", // Replace with your actual YouTube video ID
      title: "Thrissur Pooram 2025 Part-1",
      description: "Thrissur Pooram, known as the \"Mother of all Poorams,\" is Kerala's most spectacular 36-hour temple festival, held annually in April-May (Malayalam month of Medam) at the Thekkinkadu Maidanam in Thrissur."
    },
    {
      id: 3,
      videoId: "I4UdB4uZtqU", // Replace with your actual YouTube video ID
      title: "Kalaripayattu - An Indian martial art",
      description: "Kalaripayattu is an ancient Indian martial art form that originated in Kerala, India. It is one of the oldest surviving martial arts in the world, and is believed to have been developed over centuries by warriors and monks. Kalaripayattu is a highly complex and effective martial art, and is known for its emphasis on agility, balance, and speed."
    }
  ];

  return (
    <section id="youtube" className="section-padding bg-gradient-to-br from-red-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            YouTube Channel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Check out my latest video editing work and creative content. Subscribe for tutorials, tips, and behind-the-scenes content!
          </p>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to My Channel
          </a>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative pb-[56.25%] bg-gray-900">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center p-8 bg-white rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-600 mb-6">
            Visit my YouTube channel for more videos on video editing, tech tutorials, and creative content!
          </p>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            View All Videos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
