
import { QueryClient, QueryClientProvider } from '@smart-tv/query';
import { AppProvider, Button, Card, Grid, Route, RouterProvider, Row, Screen } from '@smart-tv/ui';
import { useState } from 'react';

const client = new QueryClient({
  staleTime: 1000 * 10,
  cacheTime: 1000 * 60
});

// Sample content data for demonstration
const featuredContent = [
  { id: 1, title: "Welcome to Smart TV", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=225&fit=crop", description: "Experience the future of television" },
  { id: 2, title: "Smart Navigation", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=225&fit=crop", description: "Remote control optimized UI" },
  { id: 3, title: "Modern Design", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop", description: "Beautiful and responsive interface" },
];

const quickActions = [
  { id: 1, icon: "🎬", title: "Movies", color: "from-purple-600 to-blue-600" },
  { id: 2, icon: "📺", title: "Shows", color: "from-green-600 to-teal-600" },
  { id: 3, icon: "🎵", title: "Music", color: "from-pink-600 to-rose-600" },
  { id: 4, icon: "🎮", title: "Games", color: "from-orange-600 to-red-600" },
  { id: 5, icon: "⚙️", title: "Settings", color: "from-gray-600 to-slate-600" },
  { id: 6, icon: "📊", title: "Analytics", color: "from-indigo-600 to-purple-600" },
];

// Home Page Component
function HomePage() {
  const [, setSelectedContent] = useState(featuredContent[0]);

  return (
    <Screen>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center text-white">
          {/* Logo and Title */}
          <div className="mb-12 pt-10">
            <div className="mb-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <Button
                focusKey="logo"
                className="flex items-center justify-center gap-4 text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
                active="scale-110"
                forceFocus
                onFocus={(layout) => {
                  layout.node.scrollIntoView(
                    {
                      behavior: "smooth",
                      block: "center",
                      inline: "center", // "start" sometimes causes offset issues
                    }
                  );
                }}
              >
                <div className="w-24 h-24 text-3xl rounded-full text-white bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg hover:shadow-xl border-4 border-white/20">📺</div>
                Smart TV
              </Button>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
            </div>

            <p className="text-2xl font-light opacity-90 max-w-3xl leading-relaxed">
              Experience the next generation of television with our modern, responsive, and beautifully designed Smart TV platform
            </p>
          </div>
          {/* Featured Content Cards */}
          <div className="mb-12 w-full max-w-6xl">
            <h2 className="text-3xl font-semibold mb-8 text-left">✨ Featured Experience</h2>
            <div className="overflow-hidden p-6">
              <Row gap={24} className="pb-6" focusKey="featured-row">
                {featuredContent.map((content) => (
                  <Card
                    key={`featured-${content.id}`}
                    focusKey={`featured-${content.id}`}
                    className="flex-shrink-0 w-96 h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 focus:scale-105 focus:shadow-2xl focus:shadow-purple-500/25"
                    onFocus={() => setSelectedContent(content)}
                    active="border-white/50 shadow-2xl shadow-purple-500/30 scale-105"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                        <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                        <p className="text-sm opacity-80 leading-relaxed">{content.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </Row>
            </div>
          </div>
          {/* Quick Actions Grid */}
          
          <div className='w-full max-w-6xl'>
            <div className="">
              <h2 className="text-3xl font-semibold mb-8 text-left">🚀 Quick Actions</h2>
              <Grid columns={3} gap={20} className="mb-8" focusKey="actions-grid">
                {quickActions.map((action) => (
                  <Button
                    key={`action-${action.id}`}
                    focusKey={`action-${action.id}`}
                    className={`h-32 rounded-2xl bg-gradient-to-br ${action.color} hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center space-y-3 border border-white/10 hover:border-white/30`}
                    active="scale-105 shadow-2xl border-white/50"
                    onEnterPress={() => console.log(`${action.title} selected`)}
                  >
                    <div className="text-4xl">{action.icon}</div>
                    <span className="text-lg font-semibold text-white">{action.title}</span>
                  </Button>
                ))}
              </Grid>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 max-w-4xl">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">🎯 Built for Excellence</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-lg">📺 Smart TV Optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-lg">⚡ Lightning Fast Performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-lg">🎨 Modern Design System</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-lg">� TypeScript Ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-lg">🎮 Remote Control Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-lg">� Cross-Platform Compatible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pb-12">
            <Button
              focusKey="get-started"
              className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              active="scale-110 shadow-2xl"
              onEnterPress={() => console.log("Get Started clicked")}
              onFocus={(layout) => {
                layout.node.scrollIntoView(
                  {
                    behavior: "smooth",
                    block: "center",
                    inline: "center", // "start" sometimes causes offset issues
                  }
                );
              }}

            >
              🎬 Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </Screen>
  );
}

// Define routes
const routes = [
  {
    focusKey: 'HOME',
    component: HomePage,
    to: '/',
    skippable: false,
  }
];

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <RouterProvider>
          {routes.map((route) => (
            <Route key={route.focusKey} path={route.to} skippable={route.skippable} component={route.component} />
          ))}
        </RouterProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}
