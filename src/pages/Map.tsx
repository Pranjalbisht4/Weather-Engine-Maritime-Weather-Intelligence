import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wind, 
  Waves, 
  Navigation, 
  AlertTriangle, 
  Eye,
  Layers
} from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';
import { mapMarkers } from '@/data/mapMarkers';
import { MapData } from '@/types/map';

const Map = () => {
  const [activeLayer, setActiveLayer] = useState('wind');

  const layers = [
    { id: 'wind', label: 'Wind', icon: Wind, color: 'text-blue-500' },
    { id: 'waves', label: 'Waves', icon: Waves, color: 'text-teal-500' },
    { id: 'currents', label: 'Currents', icon: Navigation, color: 'text-green-500' },
    { id: 'warnings', label: 'Warnings', icon: AlertTriangle, color: 'text-red-500' },
  ];

  const mapData: MapData = {
    wind: { speed: '15-25 knots', direction: 'NW', coverage: '85%' },
    waves: { height: '1.5-3.2m', period: '8s', coverage: '92%' },
    currents: { speed: '0.8-1.2 knots', direction: 'E', coverage: '78%' },
    warnings: { active: '3 alerts', severity: 'Medium', coverage: '12%' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Interactive Maritime Map</h1>
          <p className="text-muted-foreground">Real-time weather conditions and forecasts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="glass-card border-glass-border h-[600px] relative overflow-hidden">
              <CardContent className="p-0 h-full">
                {/* Interactive Leaflet Map */}
                <InteractiveMap 
                  activeLayer={activeLayer}
                  markers={mapMarkers}
                  className="h-full w-full"
                />

                {/* Map Controls Overlay */}
                <div className="absolute top-4 right-4 space-y-2 z-[1000]">
                  <Button variant="glass" size="icon">
                    <Layers className="h-4 w-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 glass-card p-3 backdrop-blur-lg z-[1000]">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-secondary rounded-full" />
                      <span>Vessels</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      <span>Ports</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Layer Controls */}
          <div className="space-y-6">
            <Card className="glass-card border-glass-border">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  Map Layers
                </h3>
                <div className="space-y-2">
                  {layers.map((layer) => {
                    const Icon = layer.icon;
                    const isActive = activeLayer === layer.id;
                    return (
                      <Button
                        key={layer.id}
                        variant={isActive ? "ocean" : "ghost"}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setActiveLayer(layer.id)}
                      >
                        <Icon className={`h-4 w-4 mr-2 ${isActive ? 'text-white' : layer.color}`} />
                        {layer.label}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Current Layer Info */}
            <Card className="glass-card border-glass-border">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Layer Information</h3>
                <div className="space-y-3">
                  {Object.entries(mapData[activeLayer as keyof typeof mapData]).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-sm text-muted-foreground capitalize">{key}:</span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-glass-border">
              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <Button variant="outline" size="sm" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Toggle Visibility
                </Button>
                <Button variant="secondary" size="sm" className="w-full">
                  Export Map
                </Button>
                <Button variant="ocean" size="sm" className="w-full">
                  Full Screen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;