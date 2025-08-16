import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Gauge, 
  Route, 
  Fuel,
  Clock,
  TrendingDown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Recommendations = () => {
  const currentSpeed = 18;
  const recommendedSpeed = 14;
  const fuelSavings = 23;

  // Gauge component for speed recommendation
  const SpeedGauge = ({ current, recommended }: { current: number, recommended: number }) => {
    const maxSpeed = 25;
    const currentAngle = (current / maxSpeed) * 180;
    const recommendedAngle = (recommended / maxSpeed) * 180;

    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          
          {/* Danger zone (red) */}
          <path
            d="M 144 40 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="hsl(var(--destructive))"
            strokeWidth="8"
          />
          
          {/* Caution zone (yellow) */}
          <path
            d="M 114 20 A 80 80 0 0 1 144 40"
            fill="none"
            stroke="hsl(var(--warning))"
            strokeWidth="8"
          />
          
          {/* Safe zone (green) */}
          <path
            d="M 20 80 A 80 80 0 0 1 114 20"
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="8"
          />

          {/* Current speed indicator */}
          <g transform={`rotate(${currentAngle - 90} 100 80)`}>
            <line x1="100" y1="80" x2="100" y2="25" stroke="hsl(var(--primary))" strokeWidth="3" />
            <circle cx="100" cy="80" r="6" fill="hsl(var(--primary))" />
          </g>

          {/* Recommended speed indicator */}
          <g transform={`rotate(${recommendedAngle - 90} 100 80)`}>
            <line x1="100" y1="80" x2="100" y2="30" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="4,4" />
            <circle cx="100" cy="30" r="4" fill="hsl(var(--secondary))" />
          </g>
        </svg>
        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-2xl font-bold text-foreground">{current} kt</p>
          <p className="text-sm text-muted-foreground">Current Speed</p>
        </div>
      </div>
    );
  };

  const recommendations = [
    {
      icon: TrendingDown,
      title: 'Reduce Speed',
      description: 'Decrease speed from 18kt to 14kt',
      impact: '23% fuel savings',
      timeImpact: '+2.5 hours',
      priority: 'high',
      status: 'recommended'
    },
    {
      icon: Route,
      title: 'Alternative Route',
      description: 'Take southern route to avoid storm system',
      impact: '12% time savings',
      timeImpact: '-3.2 hours',
      priority: 'medium',
      status: 'optional'
    },
    {
      icon: Clock,
      title: 'Departure Timing',
      description: 'Delay departure by 6 hours for optimal conditions',
      impact: '15% fuel savings',
      timeImpact: '+6 hours initially',
      priority: 'low',
      status: 'consider'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'recommended': return CheckCircle;
      case 'optional': return AlertCircle;
      case 'consider': return Target;
      default: return Target;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Voyage Recommendations</h1>
          <p className="text-muted-foreground">Optimal vessel speed and route recommendations against current weather conditions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Speed Recommendation Gauge */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Speed Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <SpeedGauge current={currentSpeed} recommended={recommendedSpeed} />
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Current Speed</p>
                  <p className="text-2xl font-bold text-primary">{currentSpeed} kt</p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Recommended</p>
                  <p className="text-2xl font-bold text-secondary">{recommendedSpeed} kt</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-success/10 rounded-lg">
                <Fuel className="h-6 w-6 mx-auto mb-2 text-success" />
                <p className="text-lg font-semibold text-success">{fuelSavings}% Fuel Savings</p>
                <p className="text-sm text-muted-foreground">Estimated savings at recommended speed</p>
              </div>
            </CardContent>
          </Card>

          {/* Weather Impact Summary */}
          <Card className="glass-card border-glass-border">
            <CardHeader>
              <CardTitle>Current Weather Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                <span className="text-foreground">Wind Speed</span>
                <span className="font-semibold text-warning">22 knots (High)</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-warning/10 rounded-lg">
                <span className="text-foreground">Wave Height</span>
                <span className="font-semibold text-warning">3.2m (Moderate)</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                <span className="text-foreground">Visibility</span>
                <span className="font-semibold text-success">8.5km (Good)</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-destructive/10 rounded-lg">
                <span className="text-foreground">Current Conditions</span>
                <span className="font-semibold text-destructive">Challenging</span>
              </div>

              <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Overall Assessment</p>
                <p className="font-medium">Current conditions suggest reducing speed for optimal fuel efficiency and safety. High winds and moderate waves create increased resistance.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Recommendations */}
        <Card className="glass-card border-glass-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Detailed Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                const StatusIcon = getStatusIcon(rec.status);
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{rec.title}</h3>
                        <div className="flex items-center space-x-2">
                          <StatusIcon className="h-4 w-4 text-muted-foreground" />
                          <span className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${getPriorityColor(rec.priority)}`}>
                            {rec.priority.toUpperCase()}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-2">{rec.description}</p>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-success font-medium">{rec.impact}</span>
                        <span className="text-muted-foreground">{rec.timeImpact}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-ocean/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Combined Impact</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-success">35%</p>
                  <p className="text-sm text-muted-foreground">Total Fuel Savings</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-warning">-0.7hrs</p>
                  <p className="text-sm text-muted-foreground">Time Optimization</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$2,400</p>
                  <p className="text-sm text-muted-foreground">Cost Savings</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;