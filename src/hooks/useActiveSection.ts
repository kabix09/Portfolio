import { useEffect } from 'react';

export function useActiveSection(
  sectionIds: string[], 
  onSectionActive: (id: string) => void,
  options?: { rootMargin?: string }
) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Margines -45% z góry i dołu sprawia, że sekcja "aktywuje się" 
      // gdy jej środek mija środek ekranu
      rootMargin: options?.rootMargin || '-45% 0px -45% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onSectionActive(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, onSectionActive, options?.rootMargin]);
}