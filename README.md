# SenPro Rapper Website

Un sitio web moderno y responsivo para el artista SenPro, construido con React, TypeScript, Vite y Tailwind CSS.

## 🚀 Características

- **Frontend moderno**: React 18 con TypeScript
- **Herramienta de build rápida**: Vite para desarrollo y producción optimizado
- **Estilos con Tailwind CSS**: Framework CSS utility-first para diseño responsivo
- **Backend serverless**: Integración con Supabase para autenticación y base de datos
- **Iconografía**: Lucide React para iconos vectoriales
- **Linting**: ESLint configurado con reglas de React

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── About.tsx       # Sección "Acerca de"
│   ├── Footer.tsx      # Pie de página
│   ├── Hero.tsx        # Sección principal/héroe
│   ├── Music.tsx       # Sección de música/tracks
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Tour.tsx        # Sección de giras/eventos
│   └── Videos.tsx      # Sección de videos
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
├── index.css           # Estilos globales
└── vite-env.d.ts       # Tipos de Vite

Config files:
├── vite.config.ts      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind CSS
├── tsconfig.json       # Configuración de TypeScript
├── eslint.config.js    # Configuración de ESLint
└── postcss.config.js   # Configuración de PostCSS
```

## 🛠️ Requisitos

- Node.js 16+ 
- npm, yarn, pnpm o bun

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/daisersenpro/websenpro.git
cd websenpro
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

## 🚀 Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```
Compila el proyecto para producción en la carpeta `dist/`

### Preview de Producción
```bash
npm run preview
```
Visualiza la versión compilada localmente

### Linting
```bash
npm run lint
```
Verifica el código con ESLint

### Type Checking
```bash
npm run typecheck
```
Verifica tipos de TypeScript sin emitir archivos

## 🔧 Dependencias Principales

### Production
- **react** (18.3.1): Librería de UI
- **react-dom** (18.3.1): Renderización en el DOM
- **lucide-react** (0.344.0): Iconos vectoriales
- **@supabase/supabase-js** (2.57.4): Cliente Supabase para backend

### Development
- **Vite** (5.4.2): Build tool y dev server
- **TypeScript** (5.5.3): Tipado estático
- **Tailwind CSS** (3.4.1): Framework CSS
- **ESLint** (9.9.1): Linting de código
- **PostCSS** (8.4.35): Procesador CSS

## 🌐 Supabase Integration

Este proyecto utiliza Supabase para:
- Autenticación de usuarios
- Base de datos en tiempo real
- Almacenamiento de archivos

Para configurar Supabase:
1. Crea una cuenta en [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Copia las variables de entorno a `.env.local`

Estructura de `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎨 Tailwind CSS

Este proyecto utiliza Tailwind CSS para estilos. Algunos recursos útiles:
- [Documentación oficial](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

## 📱 Responsividad

El sitio es completamente responsivo y funciona en:
- Dispositivos móviles (teléfonos, tablets)
- Pantallas de escritorio
- Pantallas UHD

## 🚀 Deploy

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
1. Conecta tu repositorio GitHub a Netlify
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Opción 3: GitHub Pages
```bash
npm run build
# Sube la carpeta dist/ a gh-pages
```

## 📝 Notas de Desarrollo

- El proyecto usa módulos ES6
- TypeScript está configurado en strict mode
- ESLint está configurado para React best practices
- Los archivos `.local` no se incluyen en git

## 🤝 Contribuir

1. Crea una rama para tu feature: `git checkout -b feature/nueva-feature`
2. Commit tus cambios: `git commit -am 'Agrega nueva feature'`
3. Push a la rama: `git push origin feature/nueva-feature`
4. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de SenPro.

## 📞 Contacto

Para preguntas o sugerencias, contacta con daisersenpro en GitHub.

---

**Última actualización**: Diciembre 2025
