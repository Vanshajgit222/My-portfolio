import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Wrench, Lightbulb } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code className="w-5 h-5" />,
      skills: ['Javascript', 'Python', 'C++', 'SQL', 'HTML', 'CSS', 'Node.js'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'technologies',
      title: 'Technologies',
      icon: <Wrench className="w-5 h-5" />,
      skills: ['Canva', 'Figma', 'Wati.io', 'Ms-Excel', 'Mix Panel', 'Tableau', 'Whimsical', 'Draw.io', 'Notion', 'JIRA', 'Power Bi', 'n8n.io'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'concepts',
      title: 'Concepts',
      icon: <Lightbulb className="w-5 h-5" />,
      skills: ['User Experience', 'Agile Methodologies', 'Product Roadmaping', 'A/B Testing', 'LLMs', 'API', 'Cache Memory', 'Machine Learning', 'Market Research', 'User Persona Development', 'Artificial Intelligence'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="space-y-4">
      {skillCategories.map((category) => (
        <div key={category.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-full p-6 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="text-gray-400">
              {expandedCategory === category.id ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>
          
          {expandedCategory === category.id && (
            <div className="px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r ${category.color} hover:scale-105 transition-transform`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;