import { Target, Eye, Heart, Zap, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of the curve, embracing cutting-edge technologies to deliver future-ready solutions.',
  },
  {
    icon: Shield,
    title: 'Transparency & Trust',
    description: 'Open communication and honest relationships form the foundation of our partnerships.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Approach',
    description: 'Your success is our success. We listen, understand, and deliver exactly what you need.',
  },
  {
    icon: Target,
    title: 'Future-Ready Technology',
    description: 'Building scalable solutions that grow with your business and adapt to change.',
  },
  {
    icon: Heart,
    title: 'Quality + Fair Pricing',
    description: 'Premium quality at competitive rates, ensuring the best value for your investment.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '40+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Hian Technologies</span>
            </h1>
            <p className="text-xl text-gray-600">
              We are a team of passionate innovators, designers, and developers committed to
              transforming businesses through technology and AI-driven solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-orange-500" size={40} />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                To empower businesses with innovative, scalable, and AI-enabled digital solutions
                that drive real growth and transformation. We believe technology should be accessible,
                powerful, and tailored to solve real-world challenges.
              </p>
            </div>

            <div className="glass rounded-3xl p-12 bg-gradient-to-br from-orange-100 to-purple-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Target className="text-orange-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Driven by Purpose</h3>
                <p className="text-gray-600">
                  Every project we undertake is guided by our commitment to excellence and our
                  passion for creating meaningful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-12 bg-gradient-to-br from-purple-100 to-orange-100">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Eye className="text-purple-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking Ahead</h3>
                <p className="text-gray-600">
                  We envision a future where businesses of all sizes can harness the power of AI
                  and digital technology to compete globally.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="text-purple-500" size={40} />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                To become a global leader in AI-first digital transformation, helping businesses
                worldwide unlock their full potential through intelligent automation, innovative
                design, and scalable technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover-lift group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl gradient-orange-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Want to Join Our Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <button className="gradient-orange-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
            Explore Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
