import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Wind, 
  Waves, 
  Cloud, 
  Navigation,
  Clock,
  MapPin,
  Bell,
  Filter
} from 'lucide-react';

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      severity: 'high',
      type: 'storm',
      title: 'Tropical Storm Warning',
      description: 'Tropical Storm Alex approaching with winds up to 45 knots and wave heights of 5-7 meters',
      location: 'North Atlantic - Zone 7 (35°N, 45°W)',
      timeIssued: '2 hours ago',
      duration: 'Next 18 hours',
      impact: 'High risk to vessel operations',
      icon: Cloud,
      recommendations: [
        'Reduce speed to 8-10 knots',
        'Consider alternative routing',
        'Secure all loose equipment'
      ]
    },
    {
      id: 2,
      severity: 'medium',
      type: 'waves',
      title: 'High Wave Advisory',
      description: 'Significant wave heights of 3.5-4.5 meters expected due to strong westerly winds',
      location: 'Gulf of Mexico - Zone 3 (28°N, 90°W)',
      timeIssued: '4 hours ago',
      duration: 'Next 12 hours',
      impact: 'Moderate impact on vessel stability',
      icon: Waves,
      recommendations: [
        'Monitor vessel stability',
        'Reduce speed if necessary',
        'Ensure proper ballast distribution'
      ]
    },
    {
      id: 3,
      severity: 'medium',
      type: 'wind',
      title: 'Strong Wind Warning',
      description: 'Sustained winds of 25-30 knots with gusts up to 35 knots from the northwest',
      location: 'Mediterranean Sea - Zone 12 (40°N, 8°E)',
      timeIssued: '6 hours ago',
      duration: 'Next 8 hours',
      impact: 'Increased fuel consumption expected',
      icon: Wind,
      recommendations: [
        'Adjust course to minimize wind resistance',
        'Monitor fuel consumption',
        'Prepare for rough conditions'
      ]
    },
    {
      id: 4,
      severity: 'low',
      type: 'current',
      title: 'Strong Current Notice',
      description: 'Ocean current speeds of 1.8-2.2 knots detected, stronger than usual seasonal patterns',
      location: 'Caribbean Sea - Zone 8 (18°N, 75°W)',
      timeIssued: '8 hours ago',
      duration: 'Next 24 hours',
      impact: 'Minor impact on ETA calculations',
      icon: Navigation,
      recommendations: [
        'Update navigation calculations',
        'Consider current assistance',
        'Monitor position regularly'
      ]
    },
    {
      id: 5,
      severity: 'high',
      type: 'storm',
      title: 'Cyclone Watch',
      description: 'Tropical cyclone development possible in the next 48 hours. Currently Category 1 potential',
      location: 'Indian Ocean - Zone 15 (15°S, 75°E)',
      timeIssued: '1 hour ago',
      duration: 'Next 48 hours',
      impact: 'Potential severe disruption to operations',
      icon: AlertTriangle,
      recommendations: [
        'Monitor development closely',
        'Prepare contingency plans',
        'Consider postponing departure'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  const getSeverityBorder = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-l-destructive';
      case 'medium': return 'border-l-warning';
      case 'low': return 'border-l-secondary';
      default: return 'border-l-secondary';
    }
  };

  const getShakeAnimation = (severity: string) => {
    return severity === 'high' ? 'animate-pulse' : '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Weather Alerts</h1>
          <p className="text-muted-foreground">Active weather warnings and maritime safety notifications</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card border-glass-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
              </div>
              <p className="text-2xl font-bold text-destructive">2</p>
              <p className="text-sm text-muted-foreground">High Severity</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-glass-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Wind className="h-6 w-6 text-warning" />
                </div>
              </div>
              <p className="text-2xl font-bold text-warning">2</p>
              <p className="text-sm text-muted-foreground">Medium Severity</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-glass-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Waves className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-secondary">1</p>
              <p className="text-sm text-muted-foreground">Low Severity</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-glass-border">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Total Active</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            All Alerts
          </Button>
          <Button variant="ghost" size="sm">High Severity</Button>
          <Button variant="ghost" size="sm">Storm Warnings</Button>
          <Button variant="ghost" size="sm">Wave Advisories</Button>
        </div>

        {/* Alert List */}
        <div className="space-y-6">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card 
                key={alert.id} 
                className={`glass-card border-glass-border border-l-4 ${getSeverityBorder(alert.severity)} ${getShakeAnimation(alert.severity)}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        alert.severity === 'high' ? 'bg-destructive/10' :
                        alert.severity === 'medium' ? 'bg-warning/10' :
                        'bg-secondary/10'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          alert.severity === 'high' ? 'text-destructive' :
                          alert.severity === 'medium' ? 'text-warning' :
                          'text-secondary'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-xl">{alert.title}</CardTitle>
                          <Badge variant={getSeverityColor(alert.severity)}>
                            {alert.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{alert.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Alert Details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{alert.location}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Issued {alert.timeIssued} • Duration: {alert.duration}</span>
                      </div>
                      
                      <div className="p-3 bg-muted/20 rounded-lg">
                        <p className="text-sm font-medium text-foreground">Impact Assessment</p>
                        <p className="text-sm text-muted-foreground">{alert.impact}</p>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Recommendations</h4>
                      <ul className="space-y-2">
                        {alert.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="secondary" size="sm">
                          Acknowledge
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 text-center">
          <Button variant="ocean" size="lg">
            <Bell className="h-4 w-4 mr-2" />
            Configure Alert Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Alerts;