import { QueryClient, QueryClientProvider } from "@smart-tv/query";
import {
  AppProvider,
  Button,
  Card,
  Grid,
  Route,
  RouterProvider,
  Row,
  Screen,
} from "@smart-tv/ui";
import { useState } from "react";

const client = new QueryClient({
  staleTime: 1000 * 10,
  cacheTime: 1000 * 60,
});

// Sample content data for demonstration
const featuredContent = [
  {
    id: 1,
    title: "Welcome to Smart TV",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=225&fit=crop",
    description: "Experience the future of television",
  },
  {
    id: 2,
    title: "Smart Navigation",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=225&fit=crop",
    description: "Remote control optimized UI",
  },
  {
    id: 3,
    title: "Modern Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=225&fit=crop",
    description: "Beautiful and responsive interface",
  },
];

const quickActions = [
  { id: 1, icon: "🎬", title: "Movies", color: "from-purple-600 to-blue-600" },
  { id: 2, icon: "📺", title: "Shows", color: "from-green-600 to-teal-600" },
  { id: 3, icon: "🎵", title: "Music", color: "from-pink-600 to-rose-600" },
  { id: 4, icon: "🎮", title: "Games", color: "from-orange-600 to-red-600" },
  { id: 5, icon: "⚙️", title: "Settings", color: "from-gray-600 to-slate-600" },
  {
    id: 6,
    icon: "📊",
    title: "Analytics",
    color: "from-indigo-600 to-purple-600",
  },
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
          <div className="absolute left-20 top-20 h-32 w-32 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-20 top-40 h-32 w-32 animate-pulse rounded-full bg-purple-500 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-32 w-32 animate-pulse rounded-full bg-pink-500 mix-blend-multiply blur-xl filter" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-16 text-center text-white">
          {/* Logo and Title */}
          <div className="mb-12 pt-10">
            <div className="mb-6 flex transform flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
              <Button
                focusKey="logo"
                className="mb-4 flex items-center justify-center gap-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-8xl font-bold text-transparent"
                active="scale-110"
                forceFocus
                onFocus={(layout) => {
                  layout.node.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center", // "start" sometimes causes offset issues
                  });
                }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-tr from-blue-500 to-purple-500 text-3xl text-white shadow-lg hover:shadow-xl">
                  📺
                </div>
                Smart TV
              </Button>
              <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
            </div>

            <p className="max-w-3xl text-2xl font-light leading-relaxed opacity-90">
              Experience the next generation of television with our modern,
              responsive, and beautifully designed Smart TV platform
            </p>
          </div>
          {/* Featured Content Cards */}
          <div className="mb-12 w-full max-w-6xl">
            <h2 className="mb-8 text-left text-3xl font-semibold">
              ✨ Featured Experience
            </h2>
            <div className="overflow-hidden p-6">
              <Row gap={24} className="pb-6" focusKey="featured-row">
                {featuredContent.map((content) => (
                  <Card
                    key={`featured-${content.id}`}
                    focusKey={`featured-${content.id}`}
                    className="h-56 w-96 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:border-white/30 focus:scale-105 focus:shadow-2xl focus:shadow-purple-500/25"
                    onFocus={() => setSelectedContent(content)}
                    active="border-white/50 shadow-2xl shadow-purple-500/30 scale-105"
                  >
                    <div className="relative h-full w-full">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="relative z-10 flex h-full flex-col justify-end p-6">
                        <h3 className="mb-2 text-xl font-bold">
                          {content.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80">
                          {content.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </Row>
            </div>
          </div>
          {/* Quick Actions Grid */}

          <div className="w-full max-w-6xl">
            <div className="">
              <h2 className="mb-8 text-left text-3xl font-semibold">
                🚀 Quick Actions
              </h2>
              <Grid
                columns={3}
                gap={20}
                className="mb-8"
                focusKey="actions-grid"
              >
                {quickActions.map((action) => (
                  <Button
                    key={`action-${action.id}`}
                    focusKey={`action-${action.id}`}
                    className={`h-32 rounded-2xl bg-gradient-to-br ${action.color} flex flex-col items-center justify-center space-y-3 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-lg`}
                    active="scale-105 shadow-2xl border-white/50"
                    onEnterPress={() => console.log(`${action.title} selected`)}
                  >
                    <div className="text-4xl">{action.icon}</div>
                    <span className="text-lg font-semibold text-white">
                      {action.title}
                    </span>
                  </Button>
                ))}
              </Grid>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 max-w-4xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-center text-2xl font-bold">
                🎯 Built for Excellence
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="text-lg">📺 Smart TV Optimized</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span className="text-lg">
                      ⚡ Lightning Fast Performance
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                    <span className="text-lg">🎨 Modern Design System</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                    <span className="text-lg">� TypeScript Ready</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <span className="text-lg">🎮 Remote Control Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-teal-400"></div>
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
              className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 text-xl font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              active="scale-110 shadow-2xl"
              onEnterPress={() => console.log("Get Started clicked")}
              onFocus={(layout) => {
                layout.node.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center", // "start" sometimes causes offset issues
                });
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
    focusKey: "HOME",
    component: HomePage,
    to: "/",
    skippable: false,
  },
];

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <RouterProvider>
          {routes.map((route) => (
            <Route
              key={route.focusKey}
              path={route.to}
              skippable={route.skippable}
              component={route.component}
            />
          ))}
        </RouterProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}
