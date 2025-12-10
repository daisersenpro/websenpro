import { Instagram, Youtube, Music2, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' },
    { icon: Music2, label: 'Spotify', url: '#' },
    { icon: Mail, label: 'Email', url: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-4xl font-black text-white mb-4">
              SEN<span className="text-red-600">PRO</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6 max-w-md leading-relaxed">
              Mantente conectado con las últimas noticias, lanzamientos y fechas de conciertos.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-gray-900 hover:bg-red-600 text-white p-3 rounded-full transition-all transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Música</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    Discografía
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    Colaboraciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Tour</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    Fechas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    VIP Pass
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 SenPro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                Términos
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
