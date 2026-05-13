import { CheckCircle, Award, Code, Users, Laptop, Search, Globe } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import profileImg from "../assets/profileimage.jpeg";
import aliProfileImg from "../assets/alirizwan.jpeg"; // Add Ali's image to your assets

const AboutPage = () => {
  const skills = [
    { name: 'SEO & Search Strategy', percentage: 98 },
    { name: 'Technical SEO Audits', percentage: 95 },
    { name: 'On-Page & Off-Page SEO', percentage: 96 },
    { name: 'WordPress Development', percentage: 92 },
    { name: 'HTML/CSS/JavaScript', percentage: 90 },
    { name: 'Content Strategy', percentage: 88 },
    { name: 'Analytics & Reporting', percentage: 90 },
    { name: 'Local & E-commerce SEO', percentage: 94 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>
        
        <div className="absolute inset-0">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 animate-slide-up">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Driving organic growth through expert SEO strategy and powerful web development
            </p>
          </div>
        </div>
      </section>

      {/* Abdul Rehman - SEO Specialist */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/5">
            <img src="/profileimage.jpeg" alt="Profile" />
            </div>
            <div className="lg:w-3/5">
              <SectionHeading 
                subtitle="FOUNDER & SEO EXPERT"
                title="Hi, I'm Abdul Rehman"
                description="Certified SEO specialist and digital strategist with a passion for driving organic traffic and maximizing search visibility."
                alignment="left"
              />
              <p className="text-gray-700 mb-6">
                I'm a results-driven SEO Specialist from Pakistan, dedicated to helping businesses dominate search rankings and grow their online presence. With deep expertise in technical SEO, keyword strategy, link building, and content optimization, I turn websites into high-performing organic traffic engines.
              </p>
              <p className="text-gray-700 mb-6">
                My mission is to deliver measurable ROI through data-driven SEO strategies. Whether it's improving Core Web Vitals, conducting in-depth competitor analysis, or crafting content that ranks, I approach every project with precision and a focus on sustainable, long-term growth.
              </p>
              <p className="text-gray-700 mb-6">
                Based in Bahawalnagar, Punjab, Pakistan, I collaborate with clients worldwide to unlock their full digital potential through search engine excellence.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/alirizwan1231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GitHub Profile
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - Ali Rizwan */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-2/5">
               <img src="/alirizwan.jpeg" alt="Profile" />
        
            </div>
            <div className="lg:w-3/5">
              <SectionHeading 
                subtitle="PARTNER & WEB DEVELOPER"
                title="Ali Rizwan"
                description="Full-stack web developer specializing in building fast, scalable, and SEO-friendly web applications."
                alignment="left"
              />
              <p className="text-gray-700 mb-6">
                Ali Rizwan is a skilled Web Developer who brings technical excellence to every project. With strong proficiency in React, Node.js, and modern web architectures, he transforms designs into high-performance digital experiences.
              </p>
              <p className="text-gray-700 mb-6">
                His expertise spans front-end and back-end development, API integrations, database management, and deployment automation. Ali ensures that every website we deliver is not only visually stunning but also technically robust and optimized for speed.
              </p>
              <p className="text-gray-700 mb-6">
                Together, we combine strategic SEO with cutting-edge development to create websites that rank higher, load faster, and convert better.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/alirizwan1231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GitHub Profile
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="OUR EXPERTISE"
            title="Skills & Technologies"
            description="A powerful combination of SEO mastery and full-stack development to dominate the digital landscape."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="OUR JOURNEY"
            title="Experience & Education"
            description="Our professional background and the qualifications that fuel our success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Work Experience</h3>
              
              <div className="space-y-12">
                <div className="relative pl-10 pb-8 border-l-2 border-primary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                    <Search className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      2023 - Present
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Senior SEO Specialist</h4>
                    <p className="text-gray-600 italic">Freelance / Agency Partner</p>
                  </div>
                  <p className="text-gray-700">
                    Leading SEO strategy for diverse clients; achieving 300%+ organic traffic growth through technical audits, content optimization, and authority link building.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-8 border-l-2 border-primary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                    <Globe className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      2022 - 2024
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Web Developer</h4>
                    <p className="text-gray-600 italic">Ali Rizwan - Full-Stack Development</p>
                  </div>
                  <p className="text-gray-700">
                    Building responsive, SEO-friendly web applications using React, Node.js, and modern CMS platforms with a focus on performance and scalability.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary-600 p-2 rounded-full">
                    <Code className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-2">
                      2021 - 2023
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Developer</h4>
                    <p className="text-gray-600 italic">User-Focused Development</p>
                  </div>
                  <p className="text-gray-700">
                    Developed responsive and user-friendly websites using modern front-end technologies with SEO best practices integrated from the ground up.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Education & Certifications</h3>
              
              <div className="space-y-12">
                <div className="relative pl-10 pb-8 border-l-2 border-secondary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                      2023
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Advanced SEO Certification</h4>
                    <p className="text-gray-600 italic">Semrush / Moz Academy</p>
                  </div>
                  <p className="text-gray-700">
                    Mastered technical SEO, advanced keyword research, competitive analysis, and enterprise-level SEO strategy implementation.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-8 border-l-2 border-secondary-200">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                      2023
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Full-Stack Web Development</h4>
                    <p className="text-gray-600 italic">Udemy / FreeCodeCamp</p>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive training in MERN stack development, REST API design, and modern deployment pipelines.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-secondary-600 p-2 rounded-full">
                    <Award className="text-white" size={16} />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-600 text-sm font-medium rounded-full mb-2">
                      2022
                    </span>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Web Development</h4>
                    <p className="text-gray-600 italic">Apna College</p>
                  </div>
                  <p className="text-gray-700">
                    Focused on modern front-end development technologies, responsive design, and performance optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Values Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <SectionHeading 
                subtitle="OUR VALUES"
                title="What We Believe In"
                description="The core principles that guide our partnership and client relationships."
                alignment="left"
              />

              <div className="space-y-6">
                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Data-Driven Results</h3>
                    <p className="text-gray-600">
                      Every strategy is backed by analytics, keyword data, and measurable KPIs to ensure real growth.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Technical Excellence</h3>
                    <p className="text-gray-600">
                      Clean code, fast load times, and SEO-friendly architecture built into every project from day one.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Transparent Communication</h3>
                    <p className="text-gray-600">
                      Regular reporting, clear timelines, and honest updates throughout every project phase.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircle className="text-primary-600 mr-3 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      SEO is never "done." We constantly monitor, test, and refine strategies to stay ahead of algorithm changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;