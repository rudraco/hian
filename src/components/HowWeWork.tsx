import { Search, Palette, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy Call',
    description: 'Understanding your goals, challenges, and vision to create a tailored roadmap.',
  },
  {
    icon: Palette,
    title: 'Prototype & UI/UX Planning',
    description: 'Designing intuitive interfaces and user experiences that delight your customers.',
  },
  {
    icon: Code2,
    title: 'Development & Integration',
    description: 'Building robust, scalable solutions with cutting-edge technologies.',
  },
  {
    icon: TestTube,
    title: 'Testing, Launch & AI Setup',
    description: 'Rigorous quality assurance and seamless deployment with AI automation.',
  },
  {
    icon: Rocket,
    title: 'Growth Support & Optimization',
    description: 'Continuous improvement and support to maximize your success.',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures successful delivery from concept to launch and beyond
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-1 h-16 bg-gradient-to-b from-orange-500 to-purple-500 hidden md:block"></div>
                )}

                <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl gradient-orange-purple flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>

                  <div className={`flex-1 glass rounded-2xl p-8 ${isEven ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-bold text-gradient">0{index + 1}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
