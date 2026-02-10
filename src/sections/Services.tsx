import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lightbulb, 
  Code2, 
  TrendingUp, 
  Users, 
  Shield, 
  Headphones 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Consulting',
      description: 'Get expert guidance to navigate complex business challenges and identify growth opportunities.',
    },
    {
      icon: Code2,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and automation.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Drive revenue with data-driven marketing strategies and performance optimization.',
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Empower your workforce with comprehensive training and development programs.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Protect your business with robust risk assessment and mitigation strategies.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your business operations run smoothly.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of services designed to help your business thrive
            in today&apos;s competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
