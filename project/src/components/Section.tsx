import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <h2 className="text-3xl font-bold text-white mb-8 pb-2 border-b border-gray-700">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;