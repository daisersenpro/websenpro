import { Play, Eye } from 'lucide-react';

export default function Videos() {
  const videos = [
    {
      title: 'Sin Miedo - Video Oficial',
      views: '5.2M',
      duration: '3:45',
      thumbnail: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Contra Todo - En Vivo',
      views: '2.8M',
      duration: '4:12',
      thumbnail: 'https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Freestyle Session #3',
      views: '1.5M',
      duration: '5:30',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <section id="videos" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-lg px-4 py-2 mb-6">
            <span className="text-red-500 font-semibold">VIDEOS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Últimos <span className="text-red-600">Videos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-black to-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <button className="bg-red-600 text-white rounded-full p-5 transform group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-8 h-8 fill-current" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm text-white font-semibold">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-3">{video.title}</h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{video.views} vistas</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/20">
            Ver más en YouTube
          </button>
        </div>
      </div>
    </section>
  );
}
