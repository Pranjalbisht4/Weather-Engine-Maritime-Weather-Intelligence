import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Wind, 
  Waves, 
  Thermometer, 
  Cloud,
  Calendar,
  Download
} from 'lucide-react';

const Forecast = () => {
  const forecastData = [
    { day: 'Today', wind: 15, waves: 2.1, temp: 24, condition: 'Partly Cloudy' },
    { day: 'Tomorrow', wind: 18, waves: 2.8, temp: 22, condition: 'Cloudy' },
    { day: 'Day 3', wind: 12, waves: 1.9, temp: 26, condition: 'Sunny' },
    { day: 'Day 4', wind: 22, waves: 3.2, temp: 21, condition: 'Windy' },
    { day: 'Day 5', wind: 28, waves: 4.1, temp: 19, condition: 'Stormy' },
    { day: 'Day 6', wind: 16, waves: 2.5, temp: 23, condition: 'Partly Cloudy' },
    { day: 'Day 7', wind: 14, waves: 2.0, temp: 25, condition: 'Sunny' },
    { day: 'Day 8', wind: 20, waves: 3.0, temp: 22, condition: 'Cloudy' },
    { day: 'Day 9', wind: 17, waves: 2.6, temp: 24, condition: 'Partly Cloudy' },
    { day: 'Day 10', wind: 13, waves: 1.8, temp: 26, condition: 'Sunny' },
  ];

  const getWindColor = (speed: number) => {
    if (speed < 15) return 'text-success';
    if (speed < 25) return 'text-warning';
    return 'text-destructive';
  };

  const getWaveColor = (height: number) => {
    if (height < 2) return 'text-success';
    if (height < 3.5) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">10-Day Maritime Forecast</h1>
          <p className="text-muted-foreground">Detailed weather predictions for optimal voyage planning</p>
        </div>

        {/* Chart Overview */}
        <div className="mb-8">
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Forecast Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2 p-4 bg-gradient-to-t from-muted/20 to-transparent rounded-lg">
                {forecastData.map((day, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    {/* Wind speed bar */}
                    <div className="relative w-6 bg-muted/30 rounded-full h-32 overflow-hidden">
                      <div 
                        className={`absolute bottom-0 left-0 right-0 rounded-full transition-all duration-500 ${
                          day.wind < 15 ? 'bg-success' : day.wind < 25 ? 'bg-warning' : 'bg-destructive'
                        }`}
                        style={{ height: `${(day.wind / 30) * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-center">
                      <p className={`font-semibold ${getWindColor(day.wind)}`}>{day.wind}kt</p>
                      <p className="text-muted-foreground text-[10px]">{day.day}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full" />
                  <span>Safe (0-15kt)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full" />
                  <span>Caution (15-25kt)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span>High Risk (25kt+)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Forecast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {forecastData.slice(0, 5).map((day, index) => (
            <Card key={index} className="glass-card border-glass-border floating-animation">
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <h3 className="font-semibold text-foreground">{day.day}</h3>
                  
                  {/* Weather icon area */}
                  <div className="flex justify-center">
                    <Cloud className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{day.condition}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <Wind className="h-4 w-4 text-primary" />
                      <span className={getWindColor(day.wind)}>{day.wind} kt</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Waves className="h-4 w-4 text-secondary" />
                      <span className={getWaveColor(day.waves)}>{day.waves}m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span>{day.temp}°C</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Extended Forecast Table */}
        <Card className="glass-card border-glass-border">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Extended 10-Day Forecast
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-glass-border">
                    <th className="text-left py-3 px-2">Day</th>
                    <th className="text-left py-3 px-2">Condition</th>
                    <th className="text-left py-3 px-2">Wind Speed</th>
                    <th className="text-left py-3 px-2">Wave Height</th>
                    <th className="text-left py-3 px-2">Temperature</th>
                    <th className="text-left py-3 px-2">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {forecastData.map((day, index) => (
                    <tr key={index} className="border-b border-glass-border/50 hover:bg-muted/20">
                      <td className="py-3 px-2 font-medium">{day.day}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center space-x-2">
                          <Cloud className="h-4 w-4 text-muted-foreground" />
                          <span>{day.condition}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className={getWindColor(day.wind)}>{day.wind} knots</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className={getWaveColor(day.waves)}>{day.waves}m</span>
                      </td>
                      <td className="py-3 px-2">{day.temp}°C</td>
                      <td className="py-3 px-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          day.wind < 15 && day.waves < 2 ? 'bg-success/20 text-success' :
                          day.wind < 25 && day.waves < 3.5 ? 'bg-warning/20 text-warning' :
                          'bg-destructive/20 text-destructive'
                        }`}>
                          {day.wind < 15 && day.waves < 2 ? 'Optimal' :
                           day.wind < 25 && day.waves < 3.5 ? 'Proceed with caution' :
                           'High risk - Consider delay'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Forecast;