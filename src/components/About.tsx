import { Mic2, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: 'Fans', value: '500K+' },
    { icon: Award, label: 'Premios', value: '12' },
    { icon: TrendingUp, label: 'Streams', value: '10M+' },
    { icon: Mic2, label: 'Shows', value: '150+' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-red-600/10 border border-red-600/20 rounded-lg px-4 py-2 mb-6">
              <span className="text-red-500 font-semibold">SOBRE MÍ</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              La voz de la <span className="text-red-600">nueva generación</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              SenPro es más que un artista, es un movimiento. Con letras que conectan con la realidad de las calles
              y un flow único que rompe esquemas, ha logrado posicionarse como una de las voces más auténticas
              del rap en español.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Desde sus primeros freestyles hasta llenar escenarios, cada barra cuenta una historia, cada rima
              es un pedazo de verdad sin filtros.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Leer más
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all group"
              >
                <stat.icon className="w-10 h-10 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
