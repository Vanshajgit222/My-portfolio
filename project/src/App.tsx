import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Award, GraduationCap, Briefcase, Code, Users, Globe } from 'lucide-react';
import CompanyLogos from './components/CompanyLogos';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';

function App() {
  const projects = [
    {
      title: 'Zeda.io',
      description: 'Improving On-Boarding User Experience on Zeda.io platform. PM school challenge #165 secured 3rd position.',
      tags: ['Personal Project', 'Product Case Study', 'PM School'],
      backgroundColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      link: 'https://drive.google.com/file/d/1xmBjvuZPjz1gcgticAxn29HCPvKYZPPf/view'
    },
    {
      title: 'Tira',
      description: 'Improving Monetization Strategy of Tira Beauty. PM school challenge #169 secured 1st position.',
      tags: ['Personal Project', 'Product Case Study', 'PM School', 'Self Care'],
      backgroundColor: 'bg-gradient-to-br from-pink-400 to-rose-500',
      link: 'https://drive.google.com/file/d/1deCSQI6vgFp_TplZ423MRbSTWgypZVtw/view'
    },
    {
      title: 'ProdBlitz',
      description: 'In-depth research into the potential food crisis problem and presenting options for proactive measures.',
      tags: ['Personal Project', 'Product Case Study', 'ProdBlitz', 'Agriculture'],
      backgroundColor: 'bg-gradient-to-br from-green-600 to-emerald-700',
      link: 'https://drive.google.com/file/d/1E8crXzuP2sr-SPL1oycPk0mbOeUfn1E7/view'
    },
    {
      title: 'Zomato',
      description: 'Feature to improve zomato platform. Case study on zomato improving the feature for the platform.',
      tags: ['Personal Project', 'Product Case Study', 'Cloud Kitchen', 'Zomato'],
      backgroundColor: 'bg-gradient-to-br from-red-500 to-red-600',
      link: 'https://drive.google.com/file/d/1n_qWmQ7acwbuS45s41BH4JFyeFRXIh5b/view'
    },
    {
      title: 'Cult.fit',
      description: 'Gamifying user experience which in turn could improve retention number. I did a case study on the platform.',
      tags: ['Personal Project', 'Product Case Study', 'PM School'],
      backgroundColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
      link: 'https://drive.google.com/file/d/12lOD3btYneeg0xE5M13eRqXK9Cpe2fv9/view'
    },
    {
      title: 'IndiGo',
      description: 'Improving the ticket booking journey on your app and improving user acquisition.',
      tags: ['Personal Project', 'Product Case Study'],
      backgroundColor: 'bg-gradient-to-br from-indigo-600 to-blue-700',
      link: 'https://drive.google.com/file/d/1GdIjy3VaMW9xHgurJESXuJQ3sEfriWyr/view'
    },
    {
      title: 'Tripper',
      description: 'Developed an idea to develop a new platform that will enable users to plan their trips more efficiently.',
      tags: ['Personal Project', 'Travel', 'Tripper'],
      backgroundColor: 'bg-gradient-to-br from-purple-400 to-pink-400',
      link: 'https://drive.google.com/file/d/1_n-9LXdhTblja_3XW-stg4hdXId11wet/view'
    },
    {
      title: 'Flipkart',
      description: 'Developed strategy to improve retention of Flipkart and strategy to acquire new customers.',
      tags: ['Personal Project', 'Product Case Study', 'Flipkart'],
      backgroundColor: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      link: 'https://drive.google.com/file/d/1FL2VK4GbsmxmtxE8cbDH7OHdngrkjaOF/view'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center">
        <div className="w-full">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hey 👋 I'm Vanshai Kumar Singh
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A product enthusiast from IIT (ISM) Dhanbad !
            </p>
            <div className="text-gray-300 leading-relaxed space-y-4 max-w-4xl">
              <p>
                I'm passionate about solving real-world problems through innovative products that can make a positive impact on the lives of many people. I've had the experience of creating successful products from the ground up, which were widely appreciated and even acquired. I'm skilled at making data-driven decisions and have a sharp sense for developing products that resonate with users. My work spans various industries, including both B2B and B2C sectors, allowing me to gain valuable insights from diverse experiences.
              </p>
              <p>
                I've also taken the initiative to build my own products, winning national-level competitions with them. As a leader, I thrive on bringing out the best in my team members and helping them reach their full potential.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              My Experience
            </h2>
            <CompanyLogos />
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section title="My Education" id="education">
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Indian Institute of Technology (ISM) Dhanbad
                </h3>
                <p className="text-gray-300 mb-1">B.Tech, Chemical Engineering</p>
                <p className="text-blue-400 font-medium">CGPA: 7.40</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-6 h-6 text-green-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  City Public School, Sikhar Gaya
                </h3>
                <p className="text-green-400 font-medium">Percentage: 94.2%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  City Public School, Sikhar Gaya
                </h3>
                <p className="text-purple-400 font-medium">Percentage: 97.4%</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section title="Achievements" id="achievements">
        <div className="space-y-4">
          {[
            "Secured 1st position in PM School Challenge #169- Tira Beauty",
            "Awarded 2nd place in Book My Mentor's case competition for innovative solutions on the Truecaller platform",
            "Ranked Top 2% in JEE Mains 2022 and JEEAdvanced 2021 in General Category",
            "Secured a position in the top 10 in the Prodblitz- Product Management competition at IIT Dhanbad",
            "Secured 3rd position in PM School challenge #165- Zeda.io"
          ].map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3 bg-gray-800/30 p-4 rounded-lg">
              <Award className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">{achievement}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="My works" id="projects">
        <p className="text-gray-300 mb-8">Here are some of my selected product and design case studies</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Additional Sections */}
      <Section title="Check these out !" id="additional">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Resume</h3>
              <button className="text-white hover:text-yellow-200 transition-colors flex items-center">
                <span>Click Here</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2" />
              Leadership Positions/Clubs
            </h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-lg">
                <p className="text-white font-medium">Head of Operations of Kalpitam - The Product Club of IIT(ISM) Dhanbad</p>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-lg">
                <p className="text-white font-medium">Product Specialist at Student Alumni International Relationships Cell (SAIRC)</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              Languages
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-white font-medium">English - Professional</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-white font-medium">Hindi - Professional</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Connect with me!" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://linkedin.com/in/vanshai" className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors flex items-center space-x-3">
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:Vanshajkumar2021@gmail.com" className="bg-red-600 hover:bg-red-700 p-4 rounded-lg transition-colors flex items-center space-x-3">
            <Mail className="w-6 h-6" />
            <span>Vanshajkumar2021@gmail.com</span>
          </a>
          <a href="tel:+918102659415" className="bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors flex items-center space-x-3">
            <Phone className="w-6 h-6" />
            <span>+91 8102659415</span>
          </a>
        </div>
      </Section>

      {/* Thank You Section */}
      <Section className="text-center py-20">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-64 h-64 mx-auto flex items-center justify-center mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">THANK</h2>
            <h2 className="text-4xl font-bold text-white">YOU!</h2>
          </div>
        </div>
        <p className="text-gray-300 text-lg">Thank you for visiting my portfolio!</p>
      </Section>
    </div>
  );
}

export default App;