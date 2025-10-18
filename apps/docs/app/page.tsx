
import Link from "next/link";

// Platform brands configuration
const platformBrands = [
  {
    id: "samsung-tizen",
    name: "Samsung",
    subtitle: "Tizen OS",
    version: "v2.4+",
    hoverColor: "blue",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 120 40" fill="none">
        <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="currentColor" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400">SAMSUNG</text>
      </svg>
    ),
  },
  {
    id: "lg-webos",
    name: "LG",
    subtitle: "webOS",
    version: "v3.0+",
    hoverColor: "purple",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 80 40" fill="none">
        <circle cx="20" cy="20" r="15" className="fill-purple-600 dark:fill-purple-400"/>
        <text x="45" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor" className="fill-purple-600 dark:fill-purple-400">LG</text>
      </svg>
    ),
  },
  {
    id: "hisense-vidaa",
    name: "Hisense",
    subtitle: "VIDAA",
    version: "v3+",
    hoverColor: "green",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 120 40" fill="none">
        <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor" textAnchor="middle" className="fill-green-600 dark:fill-green-400">VIDAA</text>
      </svg>
    ),
  },
  {
    id: "android-tv",
    name: "Android TV",
    subtitle: "Android TV",
    version: "v5.0+",
    hoverColor: "emerald",
    logo: (
      <svg className="w-auto h-12 group-hover:scale-110 transition-transform" viewBox="0 0 48 48" fill="none">
        <path d="M6 34.5V12.5C6 10.6 7.6 9 9.5 9H38.5C40.4 9 42 10.6 42 12.5V34.5C42 36.4 40.4 38 38.5 38H9.5C7.6 38 6 36.4 6 34.5Z" className="fill-emerald-600 dark:fill-emerald-400"/>
        <path d="M13 21L19 21M13 27L29 27M35 21C35 19.3 33.7 18 32 18C30.3 18 29 19.3 29 21C29 22.7 30.3 24 32 24C33.7 24 35 22.7 35 21Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "amazon-fire-tv",
    name: "Amazon",
    subtitle: "Fire TV",
    version: "All Versions",
    hoverColor: "orange",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 40" fill="none">
        <path d="M15 8L8 20L15 32M25 12L28 28M38 12L35 28" className="stroke-orange-600 dark:stroke-orange-400" strokeWidth="3" strokeLinecap="round"/>
        <text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor" className="fill-orange-600 dark:fill-orange-400">amazon</text>
      </svg>
    ),
  },
  {
    id: "apple-tv",
    name: "Apple",
    subtitle: "Apple TV",
    version: "tvOS 10+",
    hoverColor: "pink",
    logo: (
      <svg className="w-auto h-12 group-hover:scale-110 transition-transform" viewBox="0 0 48 48" fill="none">
        <path d="M32 12.5C30.5 10.5 28 9.5 25.5 9.5C22.5 9.5 20 11 19 13.5C18.5 13.5 18 13.5 17.5 13.5C14.5 13.5 12 16 12 19C12 22 14.5 24.5 17.5 24.5H30.5C33.5 24.5 36 22 36 19C36 16.5 34.5 14 32 12.5Z" className="fill-gray-400 dark:fill-gray-500"/>
        <path d="M24 26V38M24 38L19 33M24 38L29 33" className="stroke-pink-600 dark:stroke-pink-400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 10C28 10 29 6 25 4" className="stroke-pink-600 dark:stroke-pink-400" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "roku-tv",
    name: "Roku",
    subtitle: "Roku TV",
    version: "OS 9.0+",
    hoverColor: "violet",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 40" fill="none">
        <text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor" textAnchor="middle" className="fill-violet-600 dark:fill-violet-400">ROKU</text>
      </svg>
    ),
  },
  {
    id: "vizio-smartcast",
    name: "Vizio",
    subtitle: "SmartCast",
    version: "v3.0+",
    hoverColor: "cyan",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 40" fill="none">
        <text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-400">VIZIO</text>
      </svg>
    ),
  },
  {
    id: "xbox",
    name: "Xbox",
    subtitle: "Xbox",
    version: "All Versions",
    hoverColor: "lime",
    logo: (
      <svg className="w-auto h-12 group-hover:scale-110 transition-transform" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" className="fill-lime-600 dark:fill-lime-400"/>
        <path d="M24 12C24 12 18 16 18 24C18 24 18 18 24 18M24 12C24 12 30 16 30 24C30 24 30 18 24 18M24 18V36" className="stroke-white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "playstation",
    name: "PlayStation",
    subtitle: "PlayStation",
    version: "PS4/PS5",
    hoverColor: "indigo",
    logo: (
      <svg className="w-auto h-10 group-hover:scale-110 transition-transform" viewBox="0 0 100 40" fill="none">
        <text x="50" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400">PlayStation</text>
      </svg>
    ),
  },
  {
    id: "opera-tv",
    name: "Opera",
    subtitle: "Opera TV",
    version: "All Versions",
    hoverColor: "red",
    logo: (
      <svg className="w-auto h-12 group-hover:scale-110 transition-transform" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" className="fill-red-600 dark:fill-red-400"/>
        <text x="24" y="30" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white" textAnchor="middle">O</text>
      </svg>
    ),
  },
  {
    id: "html5-universal",
    name: "Universal",
    subtitle: "Any HTML5 Platform",
    version: "Universal Support",
    hoverColor: "blue",
    isSpecial: true,
    logo: (
      <svg className="w-auto h-12 group-hover:scale-110 transition-transform" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" className="fill-gradient-to-br from-blue-500 to-purple-500"/>
        <path d="M16 18L24 24L16 30M26 30H32" className="stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Page(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950/50 dark:to-purple-950/50" />
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
              Open Source • MIT Licensed • TV Optimized
            </span>
          </div>

          {/* Main Heading with TV Screen Effect */}
          <div className="relative mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              <span className="block mb-2">Build for the</span>
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50"></span>
                <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Big Screen
                </span>
              </span>
            </h1>
            {/* TV Frame Accent */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Production-ready React components for building{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              immersive Smart TV experiences
            </span>
            {" "}with spatial navigation, video streaming, and optimized performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              href="/components"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="relative z-10 text-lg">Get Started</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="https://github.com/smarttv-dev/smart-tv"
              target="_blank"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-300 text-gray-900 dark:text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">View on GitHub</span>
            </Link>
          </div>

          {/* Stats with Glass Morphism */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">3</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Core Packages</div>
              </div>
            </div>
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">17+</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">UI Components</div>
              </div>
            </div>
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500/50 dark:hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 bg-clip-text text-transparent mb-2">MIT</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/20 relative overflow-hidden border-y border-gray-200/50 dark:border-gray-800/50">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/30 opacity-30"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 text-sm font-bold mb-6 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Universal Compatibility
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Works on{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-30"></span>
                <span className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Every Platform
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built for <span className="font-bold text-green-600 dark:text-green-400">Chromium 30+</span> and legacy browsers. 
              Supports all major Smart TV platforms including{" "}
              <span className="font-semibold">Tizen, webOS, VIDAA, Android TV, Fire TV</span>, and any platform that runs HTML, CSS & JavaScript.
            </p>
          </div>

          {/* Platform Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {platformBrands.map((platform) => (
              <div
                key={platform.id}
                className={`group relative ${
                  platform.isSpecial
                    ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border-dashed"
                    : "bg-white/80 dark:bg-gray-900/80"
                } backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-${platform.hoverColor}-500 dark:hover:border-${platform.hoverColor}-400 transition-all duration-300 hover:shadow-xl hover:shadow-${platform.hoverColor}-500/20 hover:-translate-y-2 flex flex-col items-center justify-center min-h-[140px]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${platform.hoverColor}-500/0 to-${platform.hoverColor}-500/0 group-hover:from-${platform.hoverColor}-500/5 group-hover:to-${platform.hoverColor}-500/10 rounded-2xl transition-all`}></div>
                <div className="relative text-center w-full">
                  <div className="mb-3 flex items-center justify-center h-12">
                    {platform.logo}
                  </div>
                  <h4 className={`font-black ${
                    platform.isSpecial
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                      : "text-gray-900 dark:text-white"
                  } text-sm mb-1`}>
                    {platform.subtitle}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {platform.version}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Details Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Legacy Browser Support */}
            <div className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Legacy Browser Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  Optimized for <span className="font-bold text-green-600 dark:text-green-400">Chromium 30+</span> and older browser engines found in Smart TVs from 2013+
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">ES5 Compatible</span>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold">Polyfills Included</span>
                </div>
              </div>
            </div>

            {/* Standards-Based */}
            <div className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Standards-Based
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  Built on web standards (HTML5, CSS3, ES6+) that work on any platform supporting modern web technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">HTML5</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-bold">CSS3</span>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Performance Optimized */}
            <div className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Performance Optimized
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  Lightweight bundle, minimal dependencies, and optimized rendering for smooth performance on low-powered TV hardware
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-bold">Tree-Shakeable</span>
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-bold">60fps UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl border border-green-200/50 dark:border-green-800/50">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold">Works everywhere:</span> If your TV can run HTML, CSS, and JavaScript, it can run Smart TV Library
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-900 opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Powerful Features
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A complete, battle-tested toolkit for building professional Smart TV applications with React
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* UI Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 rounded-3xl transition-all duration-500" />

              {/* Floating Orb */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  UI Components
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  17+ composable components with spatial navigation, focus management, and pre-built styles optimized for TV interfaces.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Spatial Navigation
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Focus Management
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Virtualization Ready
                  </li>
                </ul>

                <Link
                  href="/components/ui"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:translate-x-1"
                >
                  Explore UI
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Query Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500" />

              {/* Floating Orb */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Data Query
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Powerful hooks and utilities for fetching, caching, and managing server state in TV apps with ease.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Smart Caching
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Optimistic Updates
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Auto Refetching
                  </li>
                </ul>

                <Link
                  href="/components/query"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:translate-x-1"
                >
                  Explore Query
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Player Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500 dark:hover:border-pink-400 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-red-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:via-red-500/10 group-hover:to-pink-500/10 rounded-3xl transition-all duration-500" />

              {/* Floating Orb */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-pink-600 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-pink-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Video Player
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Professional video player with Shaka Player integration, DRM support, and TV-optimized controls.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Adaptive Streaming
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    DRM Protected
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Remote Control Ready
                  </li>
                </ul>

                <Link
                  href="/components/player"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:translate-x-1"
                >
                  Explore Player
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Size Comparison Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-900 opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/10 dark:bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 text-green-700 dark:text-green-300 text-sm font-bold mb-6 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Incredibly Lightweight
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Optimized{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-30"></span>
                <span className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Bundle Sizes
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Minimal footprint, maximum performance. Our packages are tree-shakeable and optimized for Smart TV constraints.
            </p>
          </div>

          {/* Bundle Size Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* UI Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343" />
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  @smart-tv/ui
                </h3>

                {/* Bundle Size */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      45
                    </span>
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">KB</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    gzipped • tree-shakeable
                  </p>
                </div>

                {/* Size Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: '45%' }}></div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    17+ Components
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Spatial Navigation
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Zero Dependencies
                  </div>
                </div>
              </div>
            </div>

            {/* Query Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  @smart-tv/query
                </h3>

                {/* Bundle Size */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                      12
                    </span>
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">KB</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    gzipped • tree-shakeable
                  </p>
                </div>

                {/* Size Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" style={{ width: '12%' }}></div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Smart Caching
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Auto Refetching
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Minimal Overhead
                  </div>
                </div>
              </div>
            </div>

            {/* Player Package */}
            <div className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-pink-500 dark:hover:border-pink-400 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-red-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:via-red-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-pink-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  @smart-tv/player
                </h3>

                {/* Bundle Size */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 bg-clip-text text-transparent">
                      78
                    </span>
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">KB</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    gzipped • includes Shaka Player
                  </p>
                </div>

                {/* Size Bar */}
                <div className="relative h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 rounded-full" style={{ width: '78%' }}></div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Adaptive Streaming
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    DRM Support
                  </div>
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Full Controls
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 text-center">
              How We Compare
            </h3>
            
            <div className="space-y-6">
              {/* Our Library - Combined */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 dark:text-white text-lg">Smart TV Library</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">All 3 packages combined</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                      135 KB
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">gzipped</p>
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-lg" style={{ width: '27%' }}></div>
                </div>
              </div>

              {/* Competitor 1 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-xs">A</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 dark:text-white text-lg">Material-UI</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Popular UI framework</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-700 dark:text-gray-300">
                      350 KB
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">gzipped</p>
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              {/* Competitor 2 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-xs">B</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 dark:text-white text-lg">Ant Design</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Enterprise UI library</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-700 dark:text-gray-300">
                      500 KB
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">gzipped</p>
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              {/* Competitor 3 */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-xs">C</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 dark:text-white text-lg">Chakra UI</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Modular UI framework</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-gray-700 dark:text-gray-300">
                      280 KB
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">gzipped</p>
                  </div>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                    2.6x
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    Smaller than Material-UI
                  </p>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    3.7x
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    Smaller than Ant Design
                  </p>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 bg-clip-text text-transparent mb-2">
                    2.1x
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    Smaller than Chakra UI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl border border-green-200/50 dark:border-green-800/50">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">Performance matters:</span> Optimized for low-powered TV hardware with minimal bundle size and maximum efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* TV Scanlines Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm font-bold mb-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Lightning Fast Setup
              </div>

              <h2 className="text-5xl sm:text-6xl font-black text-white mb-8 leading-tight">
                Get Started in
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Minutes
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Install packages from npm, import components, and start building. Use our CLI to scaffold new Smart TV apps instantly.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-black shadow-lg shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Install Packages</h4>
                    <p className="text-gray-400 leading-relaxed">Add the packages you need via npm, pnpm, yarn, or bun</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-black shadow-lg shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Import Components</h4>
                    <p className="text-gray-400 leading-relaxed">Use production-ready components with full TypeScript support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white text-lg font-black shadow-lg shadow-pink-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Build & Deploy</h4>
                    <p className="text-gray-400 leading-relaxed">Ship your Smart TV app to production with confidence</p>
                  </div>
                </div>
              </div>

              <Link
                href="/components"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/50 hover:shadow-3xl transition-all hover:scale-105"
              >
                View Installation Guide
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              {/* TV Frame Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* TV Screen */}
              <div className="relative bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-800 group-hover:border-gray-700 transition-all">
                {/* Window Controls */}
                <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-mono">App.tsx</span>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
                    {`import { VideoPlayer, MediaProvider } from '@smart-tv/player'
import '@smart-tv/player/styles.css'

export default function App() {
  return (
    <MediaProvider>
      <VideoPlayer
        src="video.m3u8"
        poster="poster.jpg"
        autoPlay={false}
      />
    </MediaProvider>
  )
}`}
                  </pre>
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-900 opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Why Choose Us
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Built for TV Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built by developers, for developers. Optimized for Smart TV platforms with performance and UX in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Blazing Fast</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Optimized for peak performance on TV hardware with minimal overhead</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Customizable</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Flexible APIs and styling options to match your brand perfectly</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-indigo-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Type Safe</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Full TypeScript support with complete type definitions included</p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">MIT licensed, community-driven, and free forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Accent Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            Join 1000+ Developers
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Join developers building the next generation of Smart TV applications with modern tools and best practices
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/components"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-50 text-gray-900 font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <svg className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="relative z-10 text-lg">Browse Components</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="https://github.com/smarttv-dev/smart-tv"
              target="_blank"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:border-white text-white font-black rounded-2xl transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Star on GitHub</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">MIT Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Actively Maintained</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
