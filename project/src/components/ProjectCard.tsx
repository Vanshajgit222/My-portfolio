import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  backgroundColor: string;
  textColor?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  backgroundColor, 
  textColor = 'text-white',
  link 
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`${backgroundColor} p-6 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer group`}
      onClick={handleClick}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className={`text-xl font-bold ${textColor} group-hover:scale-105 transition-transform`}>
          {title}
        </h3>
        {link && (
          <ExternalLink className={`w-5 h-5 ${textColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
        )}
      </div>
      <p className={`${textColor} opacity-90 text-sm mb-4 leading-relaxed`}>
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-medium rounded-full ${textColor} bg-black/20 backdrop-blur-sm`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;