import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export interface TimelineItemType {
  school: string;
  years: string;
  degree: string;
  description: string;
  tools: string[];
}

interface TimelineCardProps {
  item: TimelineItemType;
  index: number;
}

export const TimelineCard = ({ item, index }: TimelineCardProps) => {
  const t = useTranslations("sections.education");
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;
  
  const MAX_VISIBLE_TOOLS = 2; 
  const visibleTools = isExpanded ? item.tools : item.tools.slice(0, MAX_VISIBLE_TOOLS);
  const hiddenToolsCount = item.tools.length - MAX_VISIBLE_TOOLS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative flex items-center lg:justify-between ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Punkt na osi czasu */}
      <motion.div 
         className="absolute left-[2rem] lg:left-1/2 w-[1.6rem] h-[1.6rem] bg-accent rounded-full -translate-x-1/2 z-10 border-[4px] border-primary"
      >
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
      </motion.div>

      <div className="hidden lg:block lg:w-[45%]" />

      <div className="w-full lg:w-[45%] pl-[5rem] lg:pl-0">
        <motion.div 
          layout
          className="relative group p-[3rem] pb-[2.5rem] bg-primary-lighter border border-white/5 rounded-[2.5rem] hover:border-accent/30 transition-all duration-300 shadow-sm"
        >
          
          {/* Nagłówek i lata */}
          <div className="flex items-start gap-[2rem] mb-[2rem]">
            <div className="p-[1.5rem] bg-accent/10 rounded-[1.5rem] text-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-[2rem] font-bold leading-tight">
                {t(item.school)}
              </h3>
              <p className="text-accent font-mono text-[1.4rem]">
                {t(item.years)}
              </p>
            </div>
          </div>

          <h4 className="text-[1.7rem] font-medium mb-[1rem]">
            {t(item.degree)}
          </h4>
          
          {/* Pełny opis, bez ucinania i bez przycisku pod spodem */}
          <div className="text-font-third text-[1.5rem] leading-[1.6] mb-[2rem]">
            {t(item.description)}
          </div>

          {/* Sekcja technologii z przyciskami "i ponad X..." oraz "mniej" na końcu */}
          <motion.div layout className="flex flex-wrap gap-[0.5rem] items-center">
            {visibleTools.map((toolKey) => (
              <span 
                key={toolKey} 
                className="text-[1.2rem] px-[1.2rem] py-[0.4rem] bg-primary text-accent rounded-full border border-accent/20"
              >
                {t(toolKey)}
              </span>
            ))}
            
            {/* Przycisk pokazujący resztę technologii (gdy zwinięte) */}
            {!isExpanded && hiddenToolsCount > 0 && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="text-[1.2rem] px-[1.2rem] py-[0.4rem] bg-transparent text-font-third rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                i ponad {hiddenToolsCount} umiejętności
              </button>
            )}

            {/* Szary przycisk na samym końcu listy do zwijania technologii (gdy rozwinięte) */}
            {isExpanded && hiddenToolsCount > 0 && (
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-[1.2rem] px-[1.2rem] py-[0.4rem] bg-transparent text-font-third rounded-full border border-white/20 hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                mniej
              </button>
            )}
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
};