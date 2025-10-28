import { DollarSign, Zap, TrendingUp, Clock, Handshake } from 'lucide-react';

const reasons = [
  {
    icon: DollarSign,
    title: 'Balanced Pricing with High-Quality Delivery',
    description: 'Premium solutions at competitive rates without compromising on excellence.',
  },
  {
    icon: Zap,
    title: 'AI-Driven Automations',
    description: 'Reduce manual effort and boost conversions with intelligent automation systems.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Tech Solutions',
    description: 'Built to grow with your business, from startup to enterprise scale.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery + Dedicated Support',
    description: 'Quick turnaround times with ongoing support throughout your journey.',
  },
  {
    icon: Handshake,
    title: 'End-to-End Digital Growth Partner',
    description: 'Your complete technology partner for sustained business transformation.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Hian Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business insight to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl gradient-orange-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
