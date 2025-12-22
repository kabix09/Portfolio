import React from 'react';
import { ExternalLink } from 'lucide-react';
import { organizations } from '@/constants/organizations';

const Organizations = () => {
  return (
    <section className="py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">
          Organizacje i Społeczności
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <div 
              key={org.name}
              className="group relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  {/* Powiększony Container na Logo: w-20 h-20 zamiast w-12 */}
                  <div className="w-20 h-20 rounded-xl bg-gray-50 dark:bg-zinc-800 p-3 flex items-center justify-center shadow-sm border border-gray-100 dark:border-zinc-700">
                    <img 
                      src={org.logo} 
                      alt={`${org.name} logo`} 
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Większa ikona linku */}
                  <a 
                    href={org.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-zinc-800 rounded-full"
                    aria-label={`Odwiedź stronę ${org.name}`}
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>

                {/* Powiększona Typografia */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {org.name}
                </h3>
                <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-4">
                  {org.years}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {org.description}
                </p>
              </div>

              {/* Opcjonalny dekoracyjny pasek na dole karty przy hoverze */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;