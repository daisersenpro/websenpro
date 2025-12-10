import { Play, Heart, Share2 } from 'lucide-react';

export default function Music() {
  const tracks = [
    {
      title: 'Sin Miedo',
      album: 'Calles de Fuego',
      year: '2024',
      plays: '2.5M',
      cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Realidad Cruda',
      album: 'Calles de Fuego',
      year: '2024',
      plays: '1.8M',
      cover: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Contra Todo',
      album: 'Underground',
      year: '2023',
      plays: '3.2M',
      cover: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Noche de Barrio',
      album: 'Underground',
      year: '2023',
      plays: '2.1M',
      cover: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  return (
    <section id="music" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-lg px-4 py-2 mb-6">
            <span className="text-red-500 font-semibold">MÚSICA</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Últimos <span className="text-red-600">Lanzamientos</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre los tracks más recientes y las colaboraciones que están rompiendo el juego
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 text-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 fill-current" />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                  {track.plays}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{track.title}</h3>
                <p className="text-gray-400 mb-1">{track.album}</p>
                <p className="text-gray-500 text-sm mb-4">{track.year}</p>

                <div className="flex items-center gap-3">
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Ver toda la discografía
          </button>
        </div>
      </div>
    </section>
  );
}
