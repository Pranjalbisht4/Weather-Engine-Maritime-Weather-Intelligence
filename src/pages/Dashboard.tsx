import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wind, 
  Waves, 
  Thermometer, 
  Eye, 
  AlertTriangle, 
  Ship,
  TrendingUp,
  Cloud
} from 'lucide-react';
import oceanHero from '@/assets/ocean-hero.jpg';

const Dashboard = () => {
  const weatherData = [
    {
      icon: Wind,
      title: 'Wind Speed',
      value: '15 knots',
      status: 'Normal',
      color: 'text-success'
    },
    {
      icon: Waves,
      title: 'Wave Height',
      value: '2.3m',
      status: 'Moderate',
      color: 'text-warning'
    },
    {
      icon: Thermometer,
      title: 'Temperature',
      value: '24°C',
      status: 'Optimal',
      color: 'text-success'
    },
    {
      icon: Eye,
      title: 'Visibility',
      value: '8.5 km',
      status: 'Good',
      color: 'text-success'
    }
  ];

  const alerts = [
    {
      severity: 'high',
      title: 'Tropical Storm Warning',
      location: 'North Atlantic - Zone 7',
      time: '2 hours ago'
    },
    {
      severity: 'medium',
      title: 'High Wave Advisory',
      location: 'Gulf of Mexico - Zone 3',
      time: '4 hours ago'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Ocean Animation */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${oceanHero})` }}
      >
        {/* Animated Ocean Background */}
        <div className="absolute inset-0 wave-animation opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/30" />
        
        {/* Floating Bubbles Animation */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full bubble-animation"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main SEA Text */}
        <div className="relative z-10 text-center space-y-8 px-4">
          <h1 className="text-9xl md:text-[12rem] font-black text-white drop-shadow-2xl tracking-wider">
            SEA
          </h1>
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-white/95 font-semibold">
              Maritime Weather Intelligence
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Advanced sea solutions for shipping and offshore energy
            </p>
          </div>
          <div className="flex gap-6 justify-center mt-12">
            <Button variant="glass" size="lg" className="text-white border-white/40 backdrop-blur-md">
              Explore Platform
            </Button>
            <Button variant="ocean" size="lg" className="shadow-2xl">
              Get Started
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Weather Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Current Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="glass-card floating-animation border-glass-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 ocean-gradient rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-foreground">{item.value}</p>
                      <p className={`text-sm font-medium ${item.color}`}>{item.status}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weather Alerts */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.severity === 'high' 
                      ? 'border-destructive bg-destructive/10' 
                      : 'border-warning bg-warning/10'
                  }`}
                >
                  <h4 className="font-semibold text-foreground">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Vessel Status */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Ship className="h-5 w-5 text-primary" />
                Vessel Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">Atlantic Voyager</h4>
                  <p className="text-sm text-muted-foreground">Container Ship</p>
                </div>
                <div className="text-right">
                  <p className="text-success font-semibold">Optimal</p>
                  <p className="text-xs text-muted-foreground">Speed: 18 knots</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">Pacific Runner</h4>
                  <p className="text-sm text-muted-foreground">Cargo Ship</p>
                </div>
                <div className="text-right">
                  <p className="text-warning font-semibold">Caution</p>
                  <p className="text-xs text-muted-foreground">Speed: 12 knots</p>
                </div>
              </div>

              <Button variant="ocean" className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 glass-card rounded-2xl border-glass-border">
              <Cloud className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">98.5%</h3>
              <p className="text-muted-foreground">Forecast Accuracy</p>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl border-glass-border">
              <Ship className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">1,247</h3>
              <p className="text-muted-foreground">Vessels Monitored</p>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl border-glass-border">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-success" />
              <h3 className="text-2xl font-bold text-foreground">23%</h3>
              <p className="text-muted-foreground">Fuel Savings</p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-md border-t border-glass-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
            <span>© 2025 Weathernews Inc.</span>
            <div className="flex items-center space-x-4">
              <button className="hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <span>|</span>
              <button className="hover:text-primary transition-colors cursor-pointer">
                Cookie Policy
              </button>
              <span>|</span>
              <button className="hover:text-primary transition-colors cursor-pointer">
                Terms of use
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;