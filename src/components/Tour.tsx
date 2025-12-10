import { Calendar, MapPin, Ticket } from 'lucide-react';

export default function Tour() {
  const shows = [
    {
      date: '15 ENE',
      year: '2025',
      city: 'Madrid',
      venue: 'WiZink Center',
      status: 'available'
    },
    {
      date: '22 ENE',
      year: '2025',
      city: 'Barcelona',
      venue: 'Palau Sant Jordi',
      status: 'available'
    },
    {
      date: '05 FEB',
      year: '2025',
      city: 'Valencia',
      venue: 'Pabellón Fuente San Luis',
      status: 'soldout'
    },
    {
      date: '12 FEB',
      year: '2025',
      city: 'Sevilla',
      venue: 'Estadio de la Cartuja',
      status: 'available'
    },
  ];

  return (
    <section id="tour" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-lg px-4 py-2 mb-6">
            <span className="text-red-500 font-semibold">TOUR 2025</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Próximos <span className="text-red-600">Shows</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vive la experiencia completa. No te pierdas los shows más intensos del año.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-red-600/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4 text-center min-w-[100px]">
                    <div className="text-2xl font-black text-red-600">{show.date}</div>
                    <div className="text-sm text-gray-400 font-semibold">{show.year}</div>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">{show.city}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{show.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {show.status === 'soldout' ? (
                    <div className="bg-gray-800 text-gray-400 px-6 py-3 rounded-full font-bold">
                      Agotado
                    </div>
                  ) : (
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all transform group-hover:scale-105 flex items-center gap-2">
                      <Ticket className="w-5 h-5" />
                      Comprar Tickets
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2 mx-auto">
            <Calendar className="w-5 h-5" />
            Ver todas las fechas
          </button>
        </div>
      </div>
    </section>
  );
}
