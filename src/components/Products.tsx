import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Gate Pass',
    tagline: 'Smart Entry System',
    color: 'from-orange-400 to-red-500',
    borderColor: 'border-orange-500',
    panelColor: 'bg-orange-500',
    tilt: 'rotate-2',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=700&fit=crop',
  },
  {
    id: 2,
    name: 'AI Customer Support',
    tagline: 'Intelligent Automation',
    color: 'from-blue-400 to-cyan-500',
    borderColor: 'border-blue-500',
    panelColor: 'bg-blue-500',
    tilt: '-rotate-1',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=700&fit=crop',
  },
  {
    id: 3,
    name: 'Smart Workflow',
    tagline: 'Business Automation',
    color: 'from-purple-400 to-pink-500',
    borderColor: 'border-purple-500',
    panelColor: 'bg-purple-500',
    tilt: 'rotate-1',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=700&fit=crop',
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading - Same style as other sections */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.1]">
            Our <span className="text-gradient">Products</span>
          </h2>
        </div>

        {/* Products Row - Horizontal Scroll on Mobile */}
        <div className="flex gap-8 md:gap-10 lg:gap-12 overflow-x-auto md:overflow-visible pb-8 md:pb-0 scrollbar-hide">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative flex-shrink-0 w-80 md:w-96 lg:w-[420px] ${product.tilt} hover:rotate-0 transition-all duration-700`}
            >
              {/* Card Container */}
              <div className={`relative rounded-3xl overflow-hidden border-4 ${product.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer`}>
                {/* Full Image */}
                <div className="relative h-[500px] md:h-[550px] lg:h-[600px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Circle with Arrow */}
                  <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Bottom Colored Panel with Content */}
                <div className={`absolute bottom-0 left-0 right-0 ${product.panelColor} p-6 md:p-8 rounded-t-3xl`}>
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base md:text-lg font-medium text-white/90">
                    {product.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 md:mt-20">
          <button className="group inline-flex items-center gap-3 bg-[#FC6D26] hover:bg-[#e85d1a] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Products
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
