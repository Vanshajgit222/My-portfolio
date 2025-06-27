import React from 'react';
import { ExternalLink } from 'lucide-react';

const CompanyLogos: React.FC = () => {
  const companies = [
    {
      name: 'Bharti AXA Life Insurance',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      linkedinUrl: 'https://www.linkedin.com/company/bharti-axa-life-insurance/posts/?feedView=all'
    },
    {
      name: 'Digistay',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      linkedinUrl: 'https://www.linkedin.com/company/digistay/posts/?feedView=all'
    },
    {
      name: 'Strategy of Finance',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      linkedinUrl: 'https://www.linkedin.com/company/strategy-of-finance-podcast/posts/?feedView=all'
    },
    {
      name: 'Bancapp Automation',
      logo: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      linkedinUrl: 'https://www.linkedin.com/company/bancapp-automation/posts/?feedView=all'
    },
    {
      name: 'Quinx Innovation',
      logo: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      linkedinUrl: 'https://www.linkedin.com/company/quinx-innovations/posts/?feedView=all'
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-800/50 py-6 rounded-lg">
      <div className="animate-scroll flex items-center space-x-16 whitespace-nowrap">
        {/* First set */}
        {companies.map((company, index) => (
          <div key={`first-${index}`} className="flex flex-col items-center space-y-3 min-w-[200px]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {company.name.charAt(0)}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm mb-2">{company.name}</h3>
              <a 
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
              >
                <span>Visit LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
        {/* Second set for seamless loop */}
        {companies.map((company, index) => (
          <div key={`second-${index}`} className="flex flex-col items-center space-y-3 min-w-[200px]">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {company.name.charAt(0)}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium text-sm mb-2">{company.name}</h3>
              <a 
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
              >
                <span>Visit LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;