import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    'Innovative solutions tailored to your needs',
    'Expert team with industry experience',
    'Proven track record of success',
    '24/7 support and maintenance',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                    alt="Office workspace"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop"
                    alt="Team meeting"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=500&fit=crop"
                    alt="Working together"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              We Are a Team of Passionate Experts Ready to Help You Succeed
            </h2>

            <p className="text-gray-600 text-lg">
              Founded with a vision to transform businesses through innovation, we have
              grown into a trusted partner for companies worldwide. Our commitment to
              excellence and customer satisfaction drives everything we do.
            </p>

            <p className="text-gray-600">
              We believe in building long-term relationships with our clients, understanding
              their unique challenges, and delivering solutions that exceed expectations.
              Our diverse team brings together expertise from various industries to provide
              comprehensive support.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
